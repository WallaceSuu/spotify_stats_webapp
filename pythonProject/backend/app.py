from flask import Flask, jsonify
from flask_cors import CORS
from spotify_api import fetch_user_info

#this code starts the backend server at address http://127.0.0.1:5000
#Flask endpoint as JSON (w/ data): http://localhost:5000/api/data

app = Flask(__name__)
CORS(app) #enable Cross Origin Resource Sharing (CORS) for React frontend

@app.route('/api/data', methods = ['GET'])
def get_data():
    try:
        data = fetch_user_info() #returns a dictionary
        return jsonify(data) #ensure data is properly serialized
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)