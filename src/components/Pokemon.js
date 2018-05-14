import React from 'react'
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'left',
  paddingLeft: 90,
  paddingRight: 90,
  display: 'inline-block',
  };

const Pokemon = ({ pokemon }) => (
  <li className="pokemons__item">
    
    <Paper style={style} zDepth={5} rounded={false}>
      <button
        type="button"
        className="pokemons__sprite"
        style={{
          backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`})`

        }}
      />
    </Paper>
    <p className="pokemons__name">{pokemon.name}</p>
  </li>
)

export default Pokemon
