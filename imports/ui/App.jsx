import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

// Our components
import TeamList from './Team-List';
import TeamStats from './Team-Stats';
import Player from './Player';

export default class App extends Component {

  // Use a constructor to set up state
  constructor(props){
    super(props);
    // First set a state where players is empty,
    this.state = { players: [] };
  }

   // ...and then set the new state with the following array of players

  componentWillMount(){
    this.setState({ players: [
      {
        _id: 1,
        name: "Kris Dunn",
        overall: 72,
        per: 7.8,
        ts: 43,
        ast: 21,
        usg: 15
      },
      {
        _id: 2,
        name: "Justin Holiday",
        overall: 74,
        per: 12.7,
        ts: 55,
        ast: 9,
        usg: 17
      },
      {
        _id: 3,
        name: "Robin Lopez",
        overall: 76,
        per: 14.8,
        ts: 51,
        ast: 5,
        usg: 16
      },
      {
        _id: 4,
        name: "Nikola Mirotic",
        overall: 76,
        per: 12,
        ts: 51,
        ast: 6,
        usg: 19
      },
      {
        _id: 5,
        name: "Denzel Valentine",
        overall: 68,
        per: 6.2,
        ts: 45,
        ast: 8,
        usg: 16
      }
    ]});
  }

  // Get players and map them to the component
  // Pass the entire player object so team-list has access to all its props

  renderPlayers(){
    return this.state.players.map((player) => (
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
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
          />
          <br />
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
              <h2>Team List</h2>
              <Divider />
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
