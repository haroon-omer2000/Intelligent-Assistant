import base64
import createCaptions
import generateStories


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
