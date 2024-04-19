import dropbox
from dropbox import DropboxOAuth2FlowNoRedirect

'''
It goes through an example of requesting a starting scope,
and requesting more throughout the process
'''
import json
with open('/Users/daniel/Desktop/Projects/Ace/developer/dropbox.json') as f:
    data = json.load(f)
APP_KEY = data['App_key']
APP_SECRET = data['App_secret']
DB_REDIRECT_URI = 'http://localhost:80/dropbox-auth-finish'

auth_flow = DropboxOAuth2FlowNoRedirect(APP_KEY,
                                        consumer_secret=APP_SECRET,
                                        token_access_type='offline',
                                        scope=['files.metadata.read'])

authorize_url = auth_flow.start()
print("1. Go to: " + authorize_url)
print("2. Click \"Allow\" (you might have to log in first).")
print("3. Copy the authorization code.")
auth_code = input("Enter the authorization code here: ").strip()

try:
    oauth_result = auth_flow.finish(auth_code)
    # Oauth token has files.metadata.read scope only
    assert oauth_result.scope == 'files.metadata.read'
except Exception as e:
    print('Error: %s' % (e,))
    exit(1)
