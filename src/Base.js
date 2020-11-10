import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Rebase from 're-base';
const config={


  apiKey: "AIzaSyCkwZkvgeOzhpU__iqolXbM1dE7Gv4qR6U",
    authDomain: "cumst-bc486.firebaseapp.com",
    databaseURL: "https://cumst-bc486.firebaseio.com",
    projectId: "cumst-bc486",
    storageBucket: "cumst-bc486.appspot.com",
    messagingSenderId: "330860551651"
};

const app=firebase.initializeApp(config);
const base=Rebase.createClass(app.database());

export {base};