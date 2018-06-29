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

// database
import { Players } from  '../api/players';

// Our components
import TeamList from './Team-List';
import TeamStats from './Team-Stats';
import Player from './Player';
import AccountsWrapper from './AccountsWrapper';

class App extends Component {

  // Use a constructor to set up state
  constructor(props){
    super(props);
    // First set a state where players is empty,
    this.state = { players: [] };
  }

  // Get players and map them to the component
  // Pass the entire player object so team-list has access to all its props

  renderPlayers(){
    // Passing players as props instead of state now (from the container)
    return this.props.players.map((player) => (
      <TeamList key={player._id} player={player} />
    ));
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
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
              <h2>Team List</h2><Link to="/new" className="btn waves-effect waves-light">Add Player</Link>
              <List>
                { this.renderPlayers() }
              </List>
              <Divider />
            </div>
            <div className="col s12 m5"><TeamStats /></div>
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

  return {
    players: Players.find({}, { sort: { name: 1 }}).fetch()
  };

}, App);
