import jaydebeapi
import time
# from pydrive.auth import GoogleAuth
# from pydrive.drive import GoogleDrive

while True:
    # Wait for the start up of the server
    time.sleep(300)
    # Connect to H2 database
    conn = jaydebeapi.connect('org.h2.Driver', 'jdbc:h2:tcp://localhost:9092/mem:testdb', ['sa', ''], './h2.jar',)
    curs = conn.cursor()
    # Create new sql file
    print("creating sql")
    curs.execute("SCRIPT TO '/localbackup/fileName.sql'")
    print("saved to /localbackup/fileName.sql")

    #### START GOOGLE DRIVE UPLOAD###
    # gauth = GoogleAuth()
    # print("Logging into Google Drive")
    # # gauth.LocalWebserverAuth()
    # gauth.LoadCredentialsFile("mycreds.txt")
    # if gauth.credentials is None:
    #     # Authenticate if they're not there
    #     gauth.LocalWebserverAuth()
    # elif gauth.access_token_expired:
    #     # Refresh them if expired
    #     gauth.Refresh()
    # else:
    #     # Initialize the saved creds
    #     gauth.Authorize()
    # # Save the current credentials to a file
    # gauth.SaveCredentialsFile("mycreds.txt")
    # drive = GoogleDrive(gauth)
    # # Get file from Drive
    # file_list = drive.ListFile({'q':"'1Rp-MBks-j4kZK0JJKUGrCCyyFlKtRZwm'  in parents and trashed=False"}).GetList()
    # for x in range(len(file_list)):
    #     if file_list[x]['title'] == 'fileName.sql':
    #         fileId = file_list[x]['id']
    # upload_file = 'fileName.sql'
    # gfile = drive.CreateFile({'parents': [{'id': '1Rp-MBks-j4kZK0JJKUGrCCyyFlKtRZwm'}], 'id':fileId})
    # # Read file and set it as the content of this instance.
    # gfile.SetContentFile(upload_file)
    # print("Uploading file")
    # gfile.Upload() # Upload the file.
    # print("File uploaded")
    # Infinate loop every 8 hours
    time.sleep(28500)