from flask import Flask, jsonify
from flask_cors import CORS
from spotify_api import fetch_user_info, fetch_recently_played, fetch_top_artists, fetch_top_tracks

#this code starts the backend server at address http://127.0.0.1:5000
#Flask endpoint as JSON (w/ data): http://localhost:5000/api/data

app = Flask(__name__)
CORS(app) #enable Cross Origin Resource Sharing (CORS) for React frontend

@app.route('/api/data', methods = ['GET'])
def get_data():
    try:
        data = fetch_user_info() #returns a dictionary
        recently_played = fetch_recently_played(50) #fetches 10 most recently listened to tracks
        top_artists_short = fetch_top_artists("short_term")
        top_artists_medium = fetch_top_artists("medium_term") #short_term: 4 weeks medium_term: 4 months long_term: all time
        top_artists_long = fetch_top_artists("long_term")
        top_tracks_short = fetch_top_tracks("short_term")
        top_tracks_medium = fetch_top_tracks("medium_term")
        top_tracks_long = fetch_top_tracks("long_term")
        response = {
            "user_info": data,
            "recently_played_tracks": recently_played,
            "top_artists_short": top_artists_short,
            "top_artists_medium": top_artists_medium,
            "top_artists_long": top_artists_long,
            "top_tracks_short": top_tracks_short,
            "top_tracks_medium": top_tracks_medium,
            "top_tracks_long": top_tracks_long
        }
        return jsonify(response) #ensure data is properly serialized
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)