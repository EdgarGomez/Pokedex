import React, { useState } from 'react'
import { useEffect } from 'react';
import { Loading } from '../src/components/Loading';
import { PokemonCard } from '../src/components/PokemonCard';
import { SearchInput } from '../src/components/SearchInput';
import { usePokemonSearch } from '../src/hooks/usePokemonSearch';
import { SimplePokemon } from '../src/interfaces/pokemonInterfaces';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Search() {

  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
  const [term, setTerm] = useState('');

  useEffect(() => {
    
    if(term.length === 0) {
      setPokemonFiltered([]);
    }

    if(isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(
          poke => poke.name.toLowerCase().includes(term.toLowerCase()))
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      setPokemonFiltered(
        (pokemonById) ? [pokemonById] : []
      );
    }
  }, [term])

  if(isFetching) {
    return (
      <Loading />
    )
  }

  return (
    <div className={styles.container} style={{minHeight: '100vh'}}>
      <div style={{marginBottom: '50px'}}>
        <h1>
          Pokedex
        </h1>
        <Link href="/"><a style={{color: 'blue', textAlign: 'center', display: 'block', width: '100%', marginBottom: 20}}>Go back</a></Link>
        <SearchInput
          onDebounce={(value) => setTerm(value)}
        />
        <span className={styles.logo}>
          <Image src="/pokebola.png" alt="Pokemon" width={300} height={300} />
        </span>
      </div>


      <p style={{
              paddingBottom: 10,
              fontSize: 22
            }}>Search: {term}</p>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {pokemonFiltered.map(item => <PokemonCard pokemon={item} />)}
      </div>
    </div>
  )
}