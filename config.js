  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
 	returnURL: 'http://localhost:3000/auth/openid/return',
 	identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
 	realm: 'http://localhost:3000',
 	issuer: 'https://sts.windows.net/519ea014-04c9-4839-9b4a-8a604aff827a/',
 	clientID: '519ea014-04c9-4839-9b4a-8a604aff827a',
 	clientSecret: '6wKwKYkcJXAAU9Mc0k4ehhu'
 };
