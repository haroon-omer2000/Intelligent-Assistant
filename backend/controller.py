import base64
import createCaptions
import generateStories
import speechStory
import trans


class Controller():

    def __init__(self):
        pass

    def createCaptions(self, imageDetails):
        imgName = imageDetails['imgName']
        imgData = imageDetails['imageData']

        with open(imgName, "wb") as fh:
            fh.write(base64.decodebytes(imgData.encode('utf-8')))

        createCaptions_obj = createCaptions.createCaptions()
        return createCaptions_obj.generateCaptions(imageDetails)

    def generateStory(self, captions):
        generateStories_obj = generateStories.generateStories()
        return generateStories_obj.generateStory(captions)

    def speechStory(self, story, selectedLanguage):
        translators = {'English': 'en-US-JennyNeural',
                       'Urdu': 'ur-PK-AsadNeural'}
        if selectedLanguage == 'Urdu':
            trans_obj = trans.TextTranslator()
            story = trans_obj.translateText(story)
        print("translated text {}".format(story))
        speechStory_obj = speechStory.speechStory(
            translators[selectedLanguage])
        speechStory_obj.generateSpeech(story)
