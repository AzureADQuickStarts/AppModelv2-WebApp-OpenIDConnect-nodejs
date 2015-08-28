  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
 	returnURL: 'http://localhost:3000/auth/openid/return',
 	identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
 	clientID: '519ea014-04c9-4839-9b4a-8a604aff827a',
 	clientSecret: 'HxAfPj1zZu7QS5Wydu89oRu',
 	skipUserProfile: true, // for OpenID only flows this should be set to true
 	responseType: 'id_token', // for login only flows
 	responseMode: 'form_post', // As per the OAuth 2.0 standard.
 	//scope: ['email', 'profile'] // additional scopes you may wish to pass
 };
