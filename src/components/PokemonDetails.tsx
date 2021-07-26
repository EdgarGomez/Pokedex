import React from 'react'
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { StyleSheet, css } from 'aphrodite';
import Link from 'next/link'

interface Props {
  pokemon: PokemonFull;
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
  },
  regularp: {
    fontSize: 19,
  },
  basicSprite: {
    width: 80,
    height: 80,
  },
  basicSprite2: {
    width: 80,
    height: 80,
    margin: '0 auto',
    display: 'block'
  }
})

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <div>
      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Types</p>
        <div style={{flexDirection: 'row'}}>
          {
            pokemon.types.map(({type}) => (
              <p style={{...styles.regularp, marginRight: 10}} key={type.name}>{type.name}</p>
            ))
          }
        </div>

        <p className={css(styles.title)}>Weight</p>
        <p className={css(styles.regularp)}>{pokemon.weight}kg</p>

      </div>

      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Sprites</p>
      </div>

      <div>
        <img src={pokemon.sprites.front_default} className={css(styles.basicSprite)} />
        <img src={pokemon.sprites.back_default} className={css(styles.basicSprite)} />
        <img src={pokemon.sprites.front_shiny} className={css(styles.basicSprite)} />
        <img src={pokemon.sprites.back_shiny} className={css(styles.basicSprite)} />
      </div>

      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Abilities</p>
        <div style={{flexDirection: 'row'}}>
          {
            pokemon.abilities.map(({ability}) => (
              <p style={{...styles.regularp, marginRight: 10}} key={ability.name}>{ability.name}</p>
            ))
          }
        </div>
      </div>

      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Moves</p>
        <div style={{flexWrap: 'wrap',flexDirection: 'row', display: 'flex'}}>
          {
            pokemon.moves.map(({move}) => (
              <p style={{...styles.regularp, marginRight: 10, width: '45%'}} key={move.name}>{move.name}</p>
            ))
          }
        </div>
      </div>

      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Stats</p>
        <div>
          {
            pokemon.stats.map((stat, i) => (
              <div key={stat.stat.name + i} style={{flexDirection: 'row', display: 'flex'}}>
                <p style={{...styles.regularp, marginRight: 10, width: 140}}>{stat.stat.name}</p>

                <p style={{...styles.regularp, fontWeight: 'bold'}}>{stat.base_stat}</p>
              </div>
            ))
          }
        </div>
        
        <div style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px auto 80px auto',
          textAlign: 'center'
        }}>
            
            <img src={pokemon.sprites.front_default} className={css(styles.basicSprite2)} />
            <Link href="/">Go back</Link>
        </div>

      </div>

    </div>
  )
}

