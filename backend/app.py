from flask import Flask, jsonify, request
import controller

app = Flask(__name__)

#ip = '192.168.56.1'
#ip = '192.168.18.25'
# ip = http://172.17.120.158:5000
# 192.168.18.63 home

#ip = '192.168.18.63'

#ip = '172.17.56.30'

#ip = '172.16.48.131'

ip = '192.168.103.190'
#ip = '172.17.60.110'

#ip = '172.16.56.41'

controller_obj = controller.Controller()


@app.route('/create_captions', methods=['POST'])
def create_captions():

    imageDetails = request.get_json()
    print('backend image recieved, generate captions',
          imageDetails['selectedLanguage'])
    caption = controller_obj.createCaptions(imageDetails)

    return jsonify({'Data': caption, 'Status': True})


@app.route('/generate_stories', methods=['POST'])
def generate_stories():

    imageDetails = request.get_json()
    caption = controller_obj.createCaptions(imageDetails)
    story = controller_obj.generateStory(caption)
    return jsonify({'Data': story, 'Status': True})


@app.route('/speech_story', methods=['POST'])
def speech_story():
    imageDetails = request.get_json()
    caption = controller_obj.createCaptions(imageDetails)
    story = controller_obj.generateStory(caption)
    controller_obj.speechStory(story, imageDetails['selectedLanguage'])
    return jsonify({'Data': story, 'Status': True})


if __name__ == '__main__':
    app.run(host=ip, port=5000, debug=True)
