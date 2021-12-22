from flask import Flask, jsonify, request
import controller

app = Flask(__name__)

#ip = '192.168.56.1'
ip = '192.168.18.25'
# ip = http://172.17.120.158:5000

controller_obj = controller.Controller()


@app.route('/create_captions', methods=['POST'])
def create_captions():

    imageDetails = request.get_json()
    print('backend image recieved, generate captions')
    caption = controller_obj.createCaptions(imageDetails)
    return jsonify({'Data': caption, 'Status': True})


@app.route('/generate_stories', methods=['POST'])
def generate_stories():

    imageDetails = request.get_json()
    print('backend image recieved, generate story')
    caption = controller_obj.createCaptions(imageDetails)
    story = controller_obj.generateStory(caption)
    return jsonify({'Data': story, 'Status': True})


if __name__ == '__main__':
    app.run(host=ip, port=5000, debug=True)
