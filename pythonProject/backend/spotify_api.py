from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth
from config import SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI

#scope determines what permissions are going to be asked of users (read their private playlists, etc)
#all scopes: https://developer.spotify.com/documentation/web-api/concepts/scopes
SCOPE = "user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-read-currently-playing"

#initialize SpotifyOAuth
sp_oauth = SpotifyOAuth(
    client_id = SPOTIPY_CLIENT_ID,
    client_secret = SPOTIPY_CLIENT_SECRET,
    redirect_uri = SPOTIPY_REDIRECT_URI,
    scope = SCOPE
)

#creating a spotify client
spotifyClient = Spotify(auth_manager = sp_oauth)

def fetch_user_info():
    user_info = spotifyClient.me()
    print("Logged in as:", user_info["display_name"])
    print("Email:", user_info["email"])
    print("Country:", user_info["country"])
    print("ID:", user_info["id"])
    return user_info

#main function
if __name__ == "__main__":
    PROFILE = fetch_user_info()
    print(PROFILE)