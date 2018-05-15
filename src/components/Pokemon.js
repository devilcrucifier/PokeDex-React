import React from 'react';
import Paper from 'material-ui/Paper';
import _ from 'lodash';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'left',
  paddingRight: 90,
  display: 'inline-block',
  };
  
class Pokemon extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    let pokemon = this.props.pokemon;
    return (
      <li className="pokemons__item">
      <Paper style={style} zDepth={5} rounded={false}>
        <button
          type="button"
          className="pokemons__sprite"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`})`
          
          }}
        />
        <Dialog
          title="Dialog With Actions"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        <p className="pokemons__name">{_.upperFirst(pokemon.name)}</p>
      </Paper>
      
    </li>
    );
  }
}
export default Pokemon