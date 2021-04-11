import cv2
import flask
import numpy as np
import tensorflow as tf
import sys
from numpy import reshape
from flask import redirect, url_for, request
import json

app = flask.Flask(__name__)

@app.route("/")
def serve():
    return flask.render_template("index.html")

@app.route("/solution/<name>")
def solution(name):
    return {"result":"Is it a: %s " % name}

@app.route("/send/image", methods=['POST'])
def send():
    image = request.json
    image = image["pixels"]
    print(image, file=sys.stderr)
    with open("test", "w") as file:
        file.write(json.dumps(image))
    
    #image = image.reshape((1,28,28,1))
    #img2 = image["pixels"]
    model = tf.keras.models.load_model("NeuralNetworkModel")
    try:
        tensor = tf.convert_to_tensor(image, dtype=tf.int64)
        guess = model.predict(tensor)
        print("FIRST", file=sys.stderr)
    except:
        print("SECOND", file=sys.stderr)
        guess = "I don't know!"
    
    return redirect(url_for('solution', name = guess))
    
if __name__ == "__main__":
    model = tf.keras.models.load_model("NeuralNetworkModel")
    print(model)
    app.run(debug = True)
