from flask import Flask, jsonify, request
import os

app = Flask(__name__)

CURR_FILE_LOCATION = os.path.abspath(__file__)
ROOT = os.path.dirname(CURR_FILE_LOCATION)
UPLOAD_PATH = os.path.join(ROOT, 'uploads\\')

@app.route('/')
def hello_world():
    return jsonify('Hello World! The server is up and running.')

@app.route('/upload', methods=['POST'])
def upload_files():
    print('Inside upload file method')
    try:
        fileObjs = request.files.getlist('file')

        if not os.path.isdir(UPLOAD_PATH):
            os.mkdir(UPLOAD_PATH)
            
        for file in fileObjs:
            destination = os.path.join(UPLOAD_PATH, file.filename)
            file.save(destination)
        return jsonify('Upload Complete Successfully')
    except Exception as e:
        print(e)
        return 'Upload Failed'

if __name__ == '__main__':
    app.run(debug=True)