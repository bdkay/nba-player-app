import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default class TeamList extends Component {

  updateCurrentPlayer(player){
    this.setState({
      currentPlayer: player
    });
  }
  
  render(){
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="player.jpg" />}
        onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
      />
    )
  }
}
