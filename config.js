import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAaSBctvkCzSbU_WVjBOLhX76mPYZQJ72I',
  authDomain: 'testing-go-cart.firebaseapp.com',
  projectId: 'testing-go-cart',
  storageBucket: 'testing-go-cart.appspot.com',
  messagingSenderId: '1064072848427',
  appId: '1:1064072848427:web:a42a4586bf720153a8366e',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
