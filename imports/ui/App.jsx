import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { grey900 } from 'material-ui/styles/colors';

// Contain the data from the db, pass it onto the components
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

// Database
import { Players } from  '../api/players';

// Our components
import TeamList from './Team-List';
import TeamStats from './Team-Stats';
import Player from './Player';
import AccountsWrapper from './AccountsWrapper';
import Edit from './EditPlayer';

// Insert the new players into the database
const tempPlayer = {
  name: "Temp Player",
  position: "PF",
  ins: 60,
  mid: 40,
  threept: 20,
  insd: 40,
  perd: 40,
  notes: "This player is only temporary"
};

class App extends Component {

  // Use a constructor to set up state
  constructor(props){
    super(props);

    // Setting up the state
    this.state = {
      currentPlayer: tempPlayer,
      showEditPlayer: false
    };

    // Binding "this" creates new function with explicitly defined "this"
    // Now these functions have the defined instance as "this" no matter how the method/function is called.

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);
  }

  // Get players and map them to the component

  renderPlayers(){
    // Passing players as props instead of state now (from the container)
    return this.props.players.map((player) => (
      <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  showEditForm() {
    this.setState({
      showEditPlayer: true,
    });
  }

  showTeamStats() {
    this.setState({
      showEditPlayer: false,
    });
  }

  showForm(){
    if(this.state.showEditPlayer === true) {
      return ( <Edit currentPlayer={this.state.currentPlayer}
      showTeamStats={this.showTeamStats}/>);
    } else {
      return ( <TeamStats players={this.props.players} />);
    }
  }

  //List === ul's
  //ListItem == ui's

  render(){
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="NBA Player App"
            style={{backgroundColor: grey900}}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false} >
              <AccountsWrapper />
          </AppBar>
          <br />
          <div className="row">
            <div className="col s12 m7">
              <Player
                player={this.state.currentPlayer}
                showEditForm={this.showEditForm}
              />
            </div>
            <div className="col s12 m5">
              <h2>Team List</h2><Link to="/new" className="btn waves-effect" style={ {backgroundColor: grey900} }>
              Add Player</Link>
              <List>
                { this.renderPlayers() }
              </List>
            </div>
            <div className="col s12 m5 l5">
              <br />
              <Divider />
              { this.showForm() }
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

// Check what proptypes are being passed to the db, ensure it's an array
App.propTypes = {
  players: PropTypes.array.isRequired
};

// Create a container of data
export default createContainer(() => {

  // Subscribe to the collection published from the server, this is how we get data from Meteor with React
  Meteor.subscribe('players');

  const user = Meteor.userId();

  return {
    players: Players.find({ owner: user }, { sort: { name: 1 }}).fetch()
  };

}, App);
