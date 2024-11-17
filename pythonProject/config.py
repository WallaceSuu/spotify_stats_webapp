from dotenv import load_dotenv
import os


#using the os to access spotify API credentials (to be safe from it getting comprimized)
#using $env: syntax
#setting the variables through powershell:

# $env:SPOTIPY_CLIENT_ID = "your-spotify-client-id"
# $env:SPOTIPY_CLIENT_SECRET = "your-spotify-client-secret"
# $env:SPOTIPY_REDIRECT_URI = "your-app-redirect-url"

#set for current powershell session only

load_dotenv()

print("SPOTIPY_CLIENT_ID:", os.getenv("SPOTIPY_CLIENT_ID")) #if it prints properly, it is working