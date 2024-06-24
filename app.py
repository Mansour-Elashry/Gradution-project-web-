from __future__ import division, print_function
import sys
import os
import re
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from keras.metrics import Precision, Recall
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
import statistics as st
import cv2

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index1.html")
    
@app.route('/camera', methods=['GET', 'POST'])
def camera():
    # Define the custom metric function f1_score
    def f1_score(y_true, y_pred):
        precision = Precision()(y_true, y_pred)
        recall = Recall()(y_true, y_pred)
        return 2 * ((precision * recall) / (precision + recall + tf.keras.backend.epsilon()))

    # Load the Keras model with custom_objects argument
    model = load_model("model.h5", custom_objects={'f1_score': f1_score})

    # Load the face cascade classifier
    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

    output = []
    cap = cv2.VideoCapture(0)
    i = 0

    while i <= 50:
        ret, img = cap.read()
        faces = face_cascade.detectMultiScale(img, 1.05, 5)

        for x, y, w, h in faces:
            face_img = img[y:y+h, x:x+w] 
            resized_face = cv2.resize(face_img, (48, 48))  # Resize the face image to 48x48 pixels
            reshaped = resized_face.reshape(1, 48, 48, 3) / 255  # Reshape and normalize the input
            predictions = model.predict(reshaped)
            max_index = np.argmax(predictions[0])
            emotions = ('angry', 'disgust', 'fear', 'happy', 'sad', 'neutral', 'surprise')
            predicted_emotion = emotions[max_index]
            output.append(predicted_emotion)

            cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)
            cv2.rectangle(img, (x, y-40), (x+w, y), (0, 255, 0), -1)
            cv2.putText(img, predicted_emotion, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    
        i += 1
        cv2.imshow('LIVE', img)
        key = cv2.waitKey(1)
        if key == 27: 
            cap.release()
            cv2.destroyAllWindows()
            break

    print(output)
    cap.release()
    cv2.destroyAllWindows()
    final_output1 = st.mode(output)
    return render_template("buttons.html", final_output=final_output1)

@app.route('/templates/quran', methods=['GET', 'POST'])
def quran():
    return render_template("quran.html")

@app.route('/templates/songs', methods=['GET', 'POST'])
def songs():
    return render_template("songs.html")

@app.route('/templates/buttons', methods=['GET', 'POST'])
def buttons_page():
    return render_template("buttons.html")

@app.route('/songs/surprise', methods=['GET', 'POST'])
def songs_surprise():
    return render_template("songsSurprise.html")

@app.route('/songs/angry', methods=['GET', 'POST'])
def songs_angry():
    return render_template("songsAngry.html")

@app.route('/songs/sad', methods=['GET', 'POST'])
def songs_sad():
    return render_template("songsSad.html")

@app.route('/songs/disgust', methods=['GET', 'POST'])
def songs_disgust():
    return render_template("songsDisgusted.html")

@app.route('/songs/happy', methods=['GET', 'POST'])
def songs_happy():
    return render_template("songshappy.html")

@app.route('/songs/fear', methods=['GET', 'POST'])
def songs_fear():
    return render_template("songsFear.html")

@app.route('/songs/neutral', methods=['GET', 'POST'])
def songs_neutral():
    return render_template("songsSad.html")

@app.route('/templates/join_page', methods=['GET', 'POST'])
def join_page():
    return render_template("join_page.html")

if __name__ == "__main__":
    app.run(debug=True)
