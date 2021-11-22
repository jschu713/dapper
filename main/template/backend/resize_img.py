# Using code from https://www.cloudamqp.com/docs/python.html
# and https://www.rabbitmq.com/tutorials/tutorial-six-python.html
# publish.py
import pika, os, ssl, json, uuid
from dotenv import load_dotenv


# Load environmental variables
load_dotenv()

class ResizeClient(object):

    def __init__(self):

        # Set up connection
        self.url = os.environ.get('CLOUDAMQP_URL')
        self.params = pika.URLParameters(self.url)
        self.context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
        self.params.ssl_options = pika.SSLOptions(self.context, server_hostname='CLOUDAMQP_HOST')
        self.connection = pika.BlockingConnection(self.params)

        self.channel = self.connection.channel()

        result = self.channel.queue_declare(queue='resize-jeff', exclusive=False, durable=False)
        self.callback_queue = result.method.queue

        self.channel.basic_consume(
            queue=self.callback_queue,
            on_message_callback=self.on_response,
            auto_ack=True)

    def on_response(self, ch, method, props, body):
        if self.corr_id == props.correlation_id:
            self.response = body

    def call(self, n):
        self.response = None
        self.corr_id = str(uuid.uuid4())
        self.channel.basic_publish(
            exchange='',
            routing_key='resize-jeff',
            properties=pika.BasicProperties(
                reply_to=self.callback_queue,
                correlation_id=self.corr_id,
                headers={"x-delay":1000},
                delivery_mode=2,
            ),
            body=n)
        while self.response is None:
            self.connection.process_data_events()
        return self.response


# resize_client = ResizeClient()

# SAMPLE PUBLISHING MESSAGE
# message = {
#   'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Savannah_Cat_portrait.jpg/800px-Savannah_Cat_portrait.jpg',
#   'height': 500,
#   'width': 500,
#   'scale_option': 'fill'
# }

# message2 = {
#   "image_url": "https://i.pinimg.com/originals/c4/c6/bc/c4c6bc9528e0fc7fa846eb31ebe41447.jpg",
#   "height": 420,
#   "width": 278,
#   "scale_option": "fill"
# }

# test = [message, message2]

# for t in test:
#     print(" [x] Sending message to consumer")
#     response = resize_client.call(json.dumps(t))
#     print("Printing response sent to publisher from consumer:")
#     print(json.loads(response))

# print(" [x] Sending message to consumer")
# response = resize_client.call(json.dumps(message))
# print("Printing response sent to publisher from consumer:")
# print(json.loads(response))

# print(" [x] Sending message to consumer")
# response = resize_client.call(json.dumps(message2))
# print("Printing response sent to publisher from consumer:")
# print(json.loads(response))