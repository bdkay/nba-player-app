import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Our components
import TeamList from './Team-List';
import TeamStats from './Team-Stats';
import Player from './Player';

export default class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <div className="container">
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
