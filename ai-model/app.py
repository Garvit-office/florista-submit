from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image

app = Flask(__name__)

model = tf.keras.models.load_model("plant_model.h5")

class_names = ["Healthy", "Leaf_Spot", "Rust", "Blight"]

def preprocess(image):
    image = image.resize((224,224))
    img = np.array(image) / 255.0
    return np.expand_dims(img, axis=0)

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files['file']
    image = Image.open(file)

    processed = preprocess(image)
    prediction = model.predict(processed)

    result = class_names[np.argmax(prediction)]

    return jsonify({"disease": result})

if __name__ == "__main__":
    app.run(port=5000)