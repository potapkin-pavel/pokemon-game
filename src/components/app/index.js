import Footer from '../footer'
import Header from '../header'
import Layout from '../layout'
import PokemonCard from '../pokemon-card'
import bg from '../../assets/bg3.jpg'
const pokemons = [
  {
    abilities: [
      'keen-eye',
      'tangled-feet',
      'big-pecks'
    ],
    stats: {
      hp: 63,
      attack: 60,
      defense: 55,
      'special-attack': 50,
      'special-defense': 50,
      speed: 71
    },
    type: 'flying',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
    name: 'pidgeotto',
    'base-experience': 122,
    height: 11,
    id: 17,
    values: {
      top: 'A',
      right: 2,
      bottom: 7,
      left: 5
    }
  },
  {
    abilities: [
      'intimidate',
      'shed-skin',
      'unnerve'
    ],
    stats: {
      hp: 60,
      attack: 95,
      defense: 69,
      'special-attack': 65,
      'special-defense': 79,
      speed: 80
    },
    type: 'poison',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
    name: 'arbok',
    'base-experience': 157,
    height: 35,
    id: 24,
    values: {
      top: 5,
      right: 9,
      bottom: 'A',
      left: 'A'
    }
  },
  {
    abilities: [
      'static',
      'lightning-rod'
    ],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      'special-attack': 50,
      'special-defense': 50,
      speed: 90
    },
    type: 'electric',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    name: 'pikachu',
    'base-experience': 112,
    height: 4,
    id: 25,
    values: {
      top: 8,
      right: 'A',
      bottom: 9,
      left: 6
    }
  },
  {
    abilities: [
      'overgrow',
      'chlorophyll'
    ],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      'special-attack': 65,
      'special-defense': 65,
      speed: 45
    },
    type: 'grass',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    name: 'bulbasaur',
    'base-experience': 64,
    height: 7,
    id: 1,
    values: {
      top: 8,
      right: 4,
      bottom: 2,
      left: 7
    }
  },
  {
    abilities: [
      'blaze',
      'solar-power'
    ],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      'special-attack': 60,
      'special-defense': 50,
      speed: 65
    },
    type: 'fire',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    name: 'charmander',
    'base-experience': 62,
    height: 6,
    id: 4,
    values: {
      top: 7,
      right: 6,
      bottom: 1,
      left: 4
    }

  }
]

function App () {
  return (
    <>
      <Header title='This is First Layout' desc='Description'/>
      <Layout id='1' title='Title' urlBg={bg}>
        <p>In the game two players face off against one another, one side playing as &quot;blue&quot;,
          the other as &quot;red&quot; on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent&apos;s cards by
          turning them into the player&apos;s own color of red or blue.</p>
      </Layout>
      <Layout id='2' title='This is Second Layout' colorBg='#d4d4d4'>
        <div className={s.flex}>
          {pokemons.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} img={pokemon.img}
          id={pokemon.id} type={pokemon.type} values={pokemon.values}/>)}
        </div>
      </Layout>
      <Layout id='3' title='This is Third Layout' urlBg={bg}>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed
          on the board) must be of the player&apos;s card color. To do this, the player must capture cards
          by placing a card adjacent to an opponent&apos;s card whereupon the &lsquo;ranks&lsquo; of the
          sides where the two cards touch will be compared. If the rank of the opponent&apos;s card is
          higher than the player&apos;s card, the player&apos;s card will be captured and turned into the
          opponent&apos;s color. If the player&apos;s rank is higher, the opponent&apos;s card will be
          captured and changed into the player&apos;s color instead.</p>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
