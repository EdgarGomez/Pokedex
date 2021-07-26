import { useRouter } from "next/router";
import { usePokemon } from '../../src/hooks/usePokemon';
import { StyleSheet, css } from 'aphrodite';
import { PokemonDetails } from '../../src/components/PokemonDetails';
import Link from 'next/link'

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    position: 'relative'
  },
  backButton: {
    paddingLeft: 15,
    marginTop: 15,
    color: 'white',
    display: 'block',
  },
  pokemonContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '320px',
    margin: '0 auto',
    position: 'relative',
    background: 'white'
  },
  pokemonName:{
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
    paddingLeft: 15,
    margin: 0
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: 0,
    opacity: 0.7,
    position: 'absolute',
    left: 40
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
    left: 40,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default function Pokemon() {
  const router = useRouter();
  const {id, name, picture, color} = router.query;
  const {isLoading, pokemon} = usePokemon(id);

  return (
    <>
      <div className={css(styles.pokemonContainer)}>
      <div className={css(styles.headerContainer)} style={{
        backgroundColor: color,
      }}>
        <Link
          href="/"
        >
          <a className={css(styles.backButton)}>
          Go back
          </a>
        </Link>
        <p className={css(styles.pokemonName)} style={{paddingTop: '20px'}}>
            {name}
          </p>
          <p className={css(styles.pokemonName)}>
          {'\n#' + id}
          </p>
        <img
          src="/pokebola-blanca.png"
          className={css(styles.pokeball)}
        />
        <img
          src={picture}
          className={css(styles.pokemonImage)}
        />
      </div>

      {
        isLoading
        ? (
          <div className={css(styles.loadingIndicator)}>
            Loading...
          </div>
        )
        : <PokemonDetails pokemon={pokemon} />
      }
    </div>
 
    </>
  )
}
