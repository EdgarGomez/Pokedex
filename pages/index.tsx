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
      <div className={styles.container}>
        <div style={{marginBottom: '50px', display: 'flex', justifyItems: 'flex-start', justifyContent: 'flex-start'}}>
        <h1>
          Pokedex
        </h1>
        <div> 
          <Link href="/search">
            <a className={styles.menuItems}>Search</a>
          </Link>

          <Link href="/about">
            <a className={styles.menuItems}>What is this</a>
          </Link>
        </div>
        <span className={styles.logo}>
          <Image src="/pokebola.png" alt="Pokemon" width={300} height={300} />
        </span>
        </div>

        <InfiniteScroll
          pageStart={1}
          loadMore={loadPokemons}
          hasMore={true}
          loader={<div className="loader">Loading ...</div>}
          threshold={250}
          style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}
        >
        {simplePokemonList.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </InfiniteScroll>
 
      </div>
 
    </>
  )
}
