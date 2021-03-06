from flask import Flask, request, jsonify
from flask_cors import CORS
import json

from get_img import ImageRequests
from resize_img import ResizeClient

app = Flask(__name__)
CORS(app)

def img_to_resize(urls):
    '''Takes image URLs and sends them to image resizing microservice'''
    all_messages = []

    message = {
        "image_url": "",
        "height": 420,
        "width": 278,
        "scale_option": "fill"
    }
    
    resize_client = ResizeClient('resize-jeff')

    for img in urls:
        message["image_url"] = img
        result = resize_images(resize_client, message)
        
        # error handling
        # only include if resized img url is returned
        if result["success"] is True:
            all_messages.append(result)

        # breaks loop early if we get # of imgs we need
        if len(all_messages) == 6:
            break

    resize_client.channel.close()
    resize_client.connection.close()

    return all_messages
    
def resize_images(client, msg):
    '''Calls image resizing microservice'''
    print(" [x] Sending message to consumer")
    response = client.call(json.dumps(msg))
    print("Printing response sent to publisher from consumer:")

    return json.loads(response)

def get_keywords(form_data):
    '''Gets keywords to search for images microservice'''
    top_type = {"spring": " shirt", 
    "summer": " t-shirt", 
    "fall": " shirt", 
    "winter": " coat", 
    "formal": " suit", 
    "semi-formal": " shirt"}

    occassion = form_data['occasion']
    season = form_data['season']
    top_color = form_data['topColor']

    # handles occassion specific clothing options
    if occassion != "formal" and occassion != "semi-formal":
        tops = "'" + top_color + top_type[season] + "'"
    else:
        tops = "'" + top_color + top_type[occassion] + "'"

    return {"occassion": occassion, "season": season, "top": tops}

@app.route('/get_images', methods=['POST'])
def get_images():
    '''Calls google image microservice to retreive img urls'''
    data = request.json

    keys_bank = get_keywords(data)
    
    keywords = {
        "image_parameters": ["mens", keys_bank["occassion"], keys_bank["season"], keys_bank["top"], "style"], "num_images": "7"
    }

    google_image_client = ImageRequests('google_images_Jeff')

    # make calls to image retrieval service
    response = google_image_client.call(json.dumps(keywords))
    print("Printing response sent to client from server:")
    images_json = json.loads(response)

    # makes call to img resizing microservice
    img_msgs = img_to_resize(images_json['images'])
    print([url for url in img_msgs])

    google_image_client.channel.close()
    google_image_client.connection.close() 
    
    return jsonify(img_urls=[url for url in img_msgs])

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True, threaded=True)