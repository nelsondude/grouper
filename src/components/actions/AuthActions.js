import { AuthSession } from 'expo';
import {LOGIN_SUCCESS} from "./types";
import {BACKEND, CLIENT_ID, FB_APP_ID, GRANT_TYPE, LOCAL_DOMAIN} from "./globals";

logIn = async (dispatch) => {
  let redirectUrl = AuthSession.getRedirectUrl();

  // You need to add this url to your authorized redirect urls on your Facebook app
  console.log({ redirectUrl });


  let result = await AuthSession.startAsync({
    authUrl:
    `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
    `&client_id=${FB_APP_ID}` +
    `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
  });

  if (result.type !== 'success') {
    alert('Uh oh, something went wrong');
    return;
  }
  let accessToken = result.params.access_token;
  let userInfoResponse = await fetch(
    `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`
  );
  const userInfo = await userInfoResponse.json();

  const body = {
    client_id: CLIENT_ID,
    grant_type: GRANT_TYPE,
    backend: BACKEND,
    token: accessToken
  };

  console.log(body);
  fetch(LOCAL_DOMAIN + 'auth/convert-token', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(data => dispatch({type: LOGIN_SUCCESS, payload: data}))
    .catch(error => console.log(error))
};

export const loginUser = () => {
  return (dispatch) => {
    logIn(dispatch)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
};