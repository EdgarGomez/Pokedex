import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'

import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { usePalette } from 'react-palette'

import { StyleSheet, css } from 'aphrodite';

interface Props {
  pokemon: SimplePokemon;
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 200,
    width: 240,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: 'relative',
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: '15px',
    margin: 0
  },
  pokebolaContainer: {
    width: 190,
    height:190,
    position: 'absolute',
    bottom: 0,
    right:0,
    overflow: 'hidden'
  },
  pokebola: {
    width: 190,
    height: 190,
    position: 'absolute',
    bottom: -25,
    right:-25,
    opacity: 0.5
  },
  pokemonImage:{
    width: 160,
    height: 160,
    position: 'absolute',
    right: -8,
    bottom: -8
  },
})

export const PokemonCard = ({pokemon}: Props) => {

  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const { data, loading, error } = usePalette(pokemon.picture)
  useEffect(() => {

    (loading) ? setBgColor('grey') : setBgColor(data.vibrant!);
    if(!isMounted.current) return;

      return () => {
        isMounted.current= false;
      }
  }, [loading])

  return (
    <Link
    href={{
      pathname: '/pokemon/[id]',
      query: { id: pokemon.id, name: pokemon.name, picture: pokemon.picture, color: bgColor },
    }}
    >
      <div className={css(styles.cardContainer)} style={{
        marginRight: '6px',
        marginLeft: '6px',
        backgroundColor: bgColor
      }}>
        <div>
          <p className={css(styles.name)} style={{paddingTop: '20px'}}>
            {pokemon.name}
          </p>
          <p className={css(styles.name)}>
          {'\n#' + pokemon.id}
          </p>
          
        </div>

        <div className={css(styles.pokebolaContainer)}>
          <img
            src={'/pokebola-blanca.png'}
            width={300} height={300}
            className={css(styles.pokebola)}
          />
        </div>
        

         <img
            src={pokemon.picture}
            width={250} height={250}
            className={css(styles.pokemonImage)}
          />

      </div>
    </Link>
  )
}

