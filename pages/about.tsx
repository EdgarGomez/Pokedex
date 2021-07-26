import Image from 'next/image'
import Link from 'next/link'

import InfiniteScroll from 'react-infinite-scroller'
import { PokemonCard } from '../src/components/PokemonCard';

import { usePokemonPaginated } from '../src/hooks/usePokemonPaginated';
import styles from '../styles/Home.module.css'

export default function Home() {

  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <div className={styles.container} style={{minHeight: '100vh'}}>
        <div style={{marginBottom: '50px', display: 'flex', justifyItems: 'flex-start', justifyContent: 'flex-start'}}>
        <h1>
          Pokedex
        </h1>
        <div> 
          <Link href="/">
            <a className={styles.menuItems}>Go back</a>
          </Link>
        </div>
        <span className={styles.logo}>
          <Image src="/pokebola.png" alt="Pokemon" width={300} height={300} />
        </span>
        </div>

        <div className={styles.aboutDescription}>
        This is a hobby project made by Edgar (<Link href="https://edgargomez.es">edgargomez.es</Link>) using Nextjs (Reactjs), Typescript, PokeAPI, a bit of CSS and some fun. There is also a mobile version made in React Native.
        </div>

        <div className={styles.aboutDescription}>
        You can check both repositories here: <Link href="https://github.com/EdgarGomez/Pokedex-React-Native">React Native Pokedex</Link> and <Link href="https://github.com/EdgarGomez/Pokedex">Nextjs Pokedex</Link>
        </div>
 
      </div>
 
    </>
  )
}
