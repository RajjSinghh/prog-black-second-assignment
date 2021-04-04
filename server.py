import cv2
import flask
import numpy as np
import tensorflow as tf
from flask import redirect, url_for, request

app = flask.Flask(__name__)

@app.route("/")
def serve():
    return flask.render_template("index.html")

@app.route("/solution/<name>")
def solution(name):
    return "Is it a %s " % name

@app.route("/send/image", methods=['POST', 'GET'])
def send():
    if request.method == 'POST':
        img = flask.request.json
        model = tf.keras.models.load_model("NeuralNetworkModel")
        guess = model.predict(img)
        print(guess)
        print(model)
        return redirect(url_for('solution', name = guess))
    else:
        return 

if __name__ == "__main__":
    model = tf.keras.models.load_model("NeuralNetworkModel")
    print(model)
    app.run(debug = True)
