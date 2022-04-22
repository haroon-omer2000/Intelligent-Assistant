from keras.models import load_model
from keras.applications.xception import Xception
from PIL import Image
import numpy as np
from keras.models import load_model
from keras.preprocessing.sequence import pad_sequences
from keras.applications.xception import Xception
from pickle import load


class createCaptions():

    def __init__(self):
        pass

    def extract_features(self, filename, model):

        try:
            image = Image.open(filename)
        except:
            print("Image is not right ")
            return
        image = image.resize((299, 299))
        image = np.array(image)
        if image.shape[2] == 4:
            image = image[..., :3]
        image = np.expand_dims(image, axis=0)
        image = image/127.5
        image = image - 1.0

        feature = model.predict(image)
        return feature

    def word_for_id(self, integer, tokenizer):
        for word, index in tokenizer.word_index.items():
            if index == integer:
                return word
        return None

    def generate_desc(self, model, tokenizer, photo, max_length):
        in_text = 'start'
        for i in range(max_length):
            sequence = tokenizer.texts_to_sequences([in_text])[0]
            sequence = pad_sequences([sequence], maxlen=max_length)
            pred = model.predict([photo, sequence], verbose=0)
            pred = np.argmax(pred)
            word = self.word_for_id(pred, tokenizer)
            if word is None:
                break
            in_text += ' ' + word
            if word == 'end':
                break
        return in_text

    def generateCaptions(self, imageDetails):
        tokenizer = load(open("tokenizer.p", "rb"))
        model = load_model('final.h5')
        xception_model = Xception(include_top=False, pooling="avg")
        max_length = 32

        photo = self.extract_features(imageDetails['imgName'], xception_model)

        description = self.generate_desc(model, tokenizer, photo, max_length)
        captions = ' '.join(description.split()[1:-1])
        print("THE CAPTION OF THE GIVEN IMAGE IS AS FOLLOWS: ", captions)
        return captions
