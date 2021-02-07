import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDOSWgBLVuTIVELfyiAGAFR9bwPlpLKGI4',
  authDomain: 'pokemon-game-83dfa.firebaseapp.com',
  databaseURL: 'https://pokemon-game-83dfa-default-rtdb.firebaseio.com',
  projectId: 'pokemon-game-83dfa',
  storageBucket: 'pokemon-game-83dfa.appspot.com',
  messagingSenderId: '210431580023',
  appId: '1:210431580023:web:f305caf5d4fffa88197372'
}

firebase.initializeApp(firebaseConfig)

export const fire = firebase
export const database = firebase.database()

export default database
