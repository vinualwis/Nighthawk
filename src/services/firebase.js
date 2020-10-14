import firebase from 'firebase';
const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL
} = process.env;

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL
}
firebase.initializeApp(config);
export const auth = firebase.auth;
export const database = firebase.database();