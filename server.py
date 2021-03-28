import cv2
import flask
import numpy as np
import tensorflow as tf

app = flask.Flask(__name__)

@app.route("/")
def serve():
    return flask.render_template("index.html")

@app.route("/send/image", methods=["POST"])
def image(image):
    img = flask.request.json

if __name__ == "__main__":
    model = tf.keras.models.load_model("saved_models/dnn.h5")
    app.run()
