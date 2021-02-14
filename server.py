import cv2
import flask
import numpy as np
import tensorflow as tf

app = flask.Flask(__name__)

@app.route("/")
def hello_world():
    return flask.render_template("index.html")

if __name__ == "__main__":
    app.run()