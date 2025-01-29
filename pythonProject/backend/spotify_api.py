from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth
from config import SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI
import json
from collections import Counter

#scope determines what permissions are going to be asked of users (read their private playlists, etc)
#all scopes: https://developer.spotify.com/documentation/web-api/concepts/scopes
SCOPE = "user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-read-currently-playing"

#initialize SpotifyOAuth
sp_oauth = SpotifyOAuth(
    client_id = SPOTIPY_CLIENT_ID,
    client_secret = SPOTIPY_CLIENT_SECRET,
    redirect_uri = SPOTIPY_REDIRECT_URI,
    scope = SCOPE,
    show_dialog=True
)

#creating a spotify client
spotifyClient = Spotify(auth_manager = sp_oauth)

track_mapping = {}

def fetch_user_info():
    user_info = spotifyClient.me()
    return user_info

def fetch_recently_played(limit):
    recently_played = spotifyClient.current_user_recently_played(limit = limit)
    return recently_played

def fetch_top_artists(time_range):
    results = spotifyClient.current_user_top_artists(time_range=time_range)
    return results

def fetch_top_tracks(time_range):
    results = spotifyClient.current_user_top_tracks(time_range=time_range)
    return results

def fetch_top_genres(artists):
    genres = []
    for artist in artists['items']:
        genres.extend(artist.get('genres', []))  # Collect genres for each artist
    genre_counts = Counter(genres)  # Count occurrences of each genre
    sorted_genre_counts = genre_counts.most_common()
    return sorted_genre_counts

def add_recent_tracks(track_mapping):
    recently_played = spotifyClient.current_user_recently_played(limit = 10)
    for item in recently_played['items']:
        track_id = item['track']['id']
        track_name = item['track']['name']
        played_at = item['played_at']

        #creating a unique listening id for each track
        unique_listening_id =  f"{track_id}_{played_at}"

        if unique_listening_id not in track_mapping:
            track_mapping[unique_listening_id] = {
                "track_id": track_id,
                "track_name": track_name,
                "listened_at": played_at
            }

#main function
if __name__ == "__main__":
    PROFILE = fetch_user_info()
    print(PROFILE)
    add_recent_tracks()