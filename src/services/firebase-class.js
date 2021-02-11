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

class Firebase {
  constructor () {
    this.fire = firebase
    this.database = this.fire.database()
  }

  getPokemonSocket = (cb) => {
    this.database.ref('pokemons').off('value', (snapshot) => {
      cb(snapshot.val())
    })
  }

  offPokemonSocket = (cb) => {
    this.database.ref('pokemons').off()
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
  }

  postPokemon = (key, pokemon) => {
    this.database.ref('pokemons/' + key).set(pokemon)
  }
}

export default Firebase
