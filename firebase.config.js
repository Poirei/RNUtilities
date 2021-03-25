import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC0kLgN8Ewak-xsqB9pUFEYsPTCWeg9TBY',
  authDomain: 'rn-utilitiesapp.firebaseapp.com',
  databaseURL: 'https://rn-utilitiesapp.firebaseio.com',
  projectId: 'rn-utilitiesapp',
  storageBucket: 'rn-utilitiesapp.appspot.com',
  messagingSenderId: '170205659639',
  appId: '1:170205659639:android:ab97590d92fbfd6aba6ef2',
  measurementId: 'G-MEASUREMENT_ID',
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default () => {
  return {
    firebase,
    auth,
  };
};
