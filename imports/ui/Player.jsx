import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { grey900, grey600, grey50, red900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    marginLeft: 10,
    marginBottom: 20,
    border: "1px solid #000",
    borderRadius: 16
  }
}

export default class Player extends Component {

  showEditForm(){
    this.props.showEditForm();
  }

  render(){

    // Calculate player stats
    const player = this.props.player;
    const offense = player.ins + player.mid + player.threept;
    const defense = player.insd + player.mid;
    const total = offense + defense;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={`${player.name} — ${player.position}`} subtitle={`Offense: ${offense} - Defense: ${defense} - Overall: ${total}`} />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText>
          <h5>Offense</h5>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={red900}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                {player.ins}
              </Avatar>
              INS
            </Chip>
            <Chip
              backgroundColor={red900}
              color={grey50}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
              {player.mid}
              </Avatar>
              MID
            </Chip>
            <Chip
              backgroundColor={red900}
              color={grey50}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                {player.threept}
              </Avatar>
              3 PT
            </Chip>
          </div>
          <h5>Defense</h5>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={red900}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                {player.insd}
              </Avatar>
              INS D
            </Chip>
            <Chip
              backgroundColor={red900}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                {player.perd}
              </Avatar>
              PER D
            </Chip>
          </div>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Edit player/stats"
            variant="contained"
            style={styles.button}
            backgroundColor="#f2f2f2"
            className="button waves-effect"
            onClick={this.showEditForm.bind(this) }
          >
          </RaisedButton>
        </CardActions>
      </Card>
    )
  }
}
