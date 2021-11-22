from flask import Flask, request, jsonify
from flask_cors import CORS
import json

from get_img import ImageRequests
from resize_img import ResizeClient

app = Flask(__name__)
CORS(app)

def img_to_resize(urls):
    all_messages = []

    message = {
        "image_url": "",
        "height": 420,
        "width": 278,
        "scale_option": "fill"
    }

    resize_client = ResizeClient()

    for img in urls:
        message["image_url"] = img
        result = resize_images(resize_client, message)
        all_messages.append(result)
    return all_messages
    
def resize_images(client, msg):
    
    print(" [x] Sending message to consumer")
    response = client.call(json.dumps(msg))
    print("Printing response sent to publisher from consumer:")
    return json.loads(response)

@app.route('/get_images', methods=['POST'])
def get_images():
    data = request.json

    top_type = " shirt"
    btm_type = " pants"
    occassion = data['occasion']
    season = data['season']
    top_color = data['topColor']
    btm_color = data['btmColor']

    if occassion == "formal":
        top_type = " suit"
    if occassion == "casual" and season != "winter" and season != "fall":
        btm_type = " shorts"
    
    keywords = {
        "image_parameters": ["men", "mens", "male", "style", occassion, season, top_color + top_type, btm_color + btm_type], "num_images": "6"
    }

    google_image_client = ImageRequests()

    response = google_image_client.call(json.dumps(keywords))
    print("Printing response sent to client from server:")
    images_json = json.loads(response)


    img_msgs = img_to_resize(images_json['images'])
    print([url for url in img_msgs])
    
    return jsonify(img_urls=[url for url in img_msgs])




if __name__ == '__main__':
    app.run(debug=True)