from simplet5 import SimpleT5


class generateStories():

    def __init__(self):
        pass

    def generateStory(self, captions):
        model = SimpleT5()
        model.load_model("t5", "./model_2_path/", use_gpu=False)
        story = model.predict(captions)
        print("THE STORY OF THE GIVEN IMAGE IS AS FOLLOWS: ", story[0])
        return story[0]
