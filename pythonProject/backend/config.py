from dotenv import load_dotenv
import os

#using the os to access spotify API credentials (to be safe from it getting comprimized)

# Load the .env file
load_dotenv(dotenv_path="spotify_api_keys.env")

SPOTIPY_CLIENT_ID = os.getenv("SPOTIPY_CLIENT_ID")
SPOTIPY_CLIENT_SECRET = os.getenv("SPOTIPY_CLIENT_SECRET")
SPOTIPY_REDIRECT_URI = os.getenv("SPOTIPY_REDIRECT_URI")


# Test if environment variables are loaded
#print("SPOTIPY_CLIENT_ID:", SPOTIPY_CLIENT_ID)
#print("SPOTIPY_CLIENT_SECRET:", SPOTIPY_CLIENT_SECRET)
#print("SPOTIPY_REDIRECT_URI:", SPOTIPY_REDIRECT_URI)