import io
import httplib2
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from googleapiclient.http import MediaIoBaseDownload
from googleapiclient.discovery import build
from pprint import pprint
from google_drive_downloader import GoogleDriveDownloader as gdd



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
drive = GoogleDrive(gauth)
file_list = drive.ListFile({'q':"'1Rp-MBks-j4kZK0JJKUGrCCyyFlKtRZwm'  in parents and trashed=False"}).GetList()
for x in range(len(file_list)):
    if file_list[x]['title'] == 'fileName.sql':
        fileId = file_list[x]['id']
        # pprint(file_list[x])
gdd.download_file_from_google_drive(file_id=fileId, dest_path='/app/backend/src/main/resources/schema.sql')