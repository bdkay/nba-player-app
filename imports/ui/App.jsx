import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

// Our components
import TeamList from './Team-List';
import TeamStats from './Team-Stats';
import Player from './Player';

export default class App extends Component {
  getPlayers(){
    return [
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
    ]
  }
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
            <div className="col s12 m5"><TeamStats /></div>
            <div className="col s12 m5"><TeamList /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
