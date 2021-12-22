# Intelligent-Assistant

PROJECT DESCRIPTION:

  Intelligent Assistant is an Android/IOS application that takes image from user as input and returns them Urdu Audio of either a story generated from the image or the details of   that image depending in the user case selected by the user.

TOOLS AND TECHNOLOGIES: 

  For front end, we have used REACT NATIVE platform to make an android application
  For backend, we have used a FLASK server along with integrated Deep Learning models.
  
  For caption generation we have used vgg16 model by training on flickr 8K dataset.In order to tain vgg16 model, we first send captions of images to LSTM model to generate         different caption sequences and send images to dense layer to convert them into vectors.Once done with seq and vector generation, we send the sequence and vector to vgg16 model for training and it predicts captions of image.

  For story generation we simply fine tuned SimleT5 model for story generation. For fine tuning it, we extracted keywords from articles and used RCO stories 2016 version. We have keywords as source text and story as target text and send this as input for fine tuning.  

  
IMPLEMENTATION:

  We basically have implemented two user cases for the time being.
  1) First being to generate text caption/details from image
  2) Second use case helps to generate text stories from images

  In the next iteration,we plan to create audio of the above generated text.


