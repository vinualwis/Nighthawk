import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD4-r3JrfmCsR2VObOTxE5wioe1wrV9mfw",
  authDomain: "nighthawk-e2dde.firebaseapp.com",
  databaseURL: "https://nighthawk-e2dde.firebaseio.com",
}
firebase.initializeApp(config);
export const auth = firebase.auth;
export const database = firebase.database();