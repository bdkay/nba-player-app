import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { grey900, grey50, red900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12
  }
}

export default class Player extends Component {
  render(){
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Kris Dunn" subtitle="Offense: 79 - Defense: 71" />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={red900}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                7.8
              </Avatar>
              PER
            </Chip>
            <Chip
              backgroundColor={red900}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                7.8
              </Avatar>
              PER
            </Chip>
            <Chip
              backgroundColor={red900}
              color={grey50}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                43
              </Avatar>
              TS%
            </Chip>
            <Chip
              backgroundColor={red900}
              color={grey50}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                21
              </Avatar>
              AST%
            </Chip>
            <Chip
              backgroundColor={red900}
              color={grey50}
              style={styles.chip}
            >
              <Avatar size={32} color={grey50} backgroundColor={grey900}>
                15
              </Avatar>
              USG%
            </Chip>
          </div>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
