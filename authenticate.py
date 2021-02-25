from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from googleapiclient.http import MediaIoBaseDownload
from googleapiclient.discovery import build
from pprint import pprint
# from google_drive_downloader import GoogleDriveDownloader as gdd



gauth = GoogleAuth()
print("Logging into Google Drive")
# gauth.LocalWebserverAuth()
gauth.LoadCredentialsFile("mycreds.txt")
if gauth.credentials is None:
    # Authenticate if they're not there
    gauth.LocalWebserverAuth()
elif gauth.access_token_expired:
    # Refresh them if expired
    gauth.Refresh()
else:
    # Initialize the saved creds
    gauth.Authorize()
# Save the current credentials to a file
gauth.SaveCredentialsFile("mycreds.txt")