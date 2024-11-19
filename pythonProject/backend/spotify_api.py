from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth
from config import SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI
from datetime import datetime, timedelta
import re
import time

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

#main function
if __name__ == "__main__":
    PROFILE = fetch_user_info()
    print(PROFILE)
    ok = fetch_top_artists("medium_term")
    print(ok)