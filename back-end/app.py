import time
from flask import Flask

import numpy as np
import pickle
import sys
import os
import glob
import re
import numpy as np

import tensorflow as tf
from tensorflow.keras.preprocessing import image
from keras.models import load_model

from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)

# Allow
CORS(app)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


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
    else:
        preds = "Not a coconut"

    return preds


# Model saved with Keras model.save()
MODEL_PATH = 'cnn_model.h5'

# Load your trained model
model = load_model(MODEL_PATH)


@app.route('/upload', methods=['POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        preds = model_predict(file_path, model)
        result = preds
        return result
    return None


if __name__ == "__main__":
    app.run(debug=True)
