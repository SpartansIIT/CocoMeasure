import time
from flask import Flask, request, jsonify, make_response

import numpy as np
import pickle
import sys
import os
import glob
import re
import numpy as np
import json

import tensorflow as tf
from tensorflow.keras.preprocessing import image
from keras.models import load_model

from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from flask_cors import CORS


application = app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
# Allow
CORS(app)


# Path for uploaded images
UPLOAD_FOLDER = 'uploads'

# Allowed file extransions
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Model saved with Keras model.save()
MODEL_PATH = 'cnn_model.h5'

# Load your trained model
model = load_model(MODEL_PATH)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def model_predict(img_path, model):
    print(img_path)
    img = image.load_img(img_path, target_size=(224, 224))

    # Preprocessing the image
    x = image.img_to_array(img)
    # x = np.true_divide(x, 255)
    # Scaling
    x = x/255
    x = np.expand_dims(x, axis=0)

    preds = model.predict(x)
    preds = np.argmax(preds, axis=1)
    if preds == 0:
        preds = "above 13"
    elif preds == 1:
        preds = "below 12"
    elif preds == 2:
        preds = "between 12 and 13"
    elif preds == 3:
        preds = "Not a coconut"
    else:
        preds = "Please submit an image again"

    return preds


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        print("request data", request.data)
        print("request files", request.files)

        # check if the post request has the file part
        if 'file' not in request.files:
            return "No file part"
        file = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(file.filename))
        file.save(file_path)

        # Send uploaded image for prediction
        predicted_image_class = model_predict(
            file_path, model)
        print("predicted_image_class", predicted_image_class)

    return json.dumps(predicted_image_class)


if __name__ == "__main__":
    app.run(debug=True)
