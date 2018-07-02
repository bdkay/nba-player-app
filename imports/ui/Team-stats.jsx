import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Divider from 'material-ui/Divider';

const styles = {
  totalNumber: {
    fontWeight: "bold"
  }
}

export default class TeamStats extends Component {
  render(){

    const players = this.props.players;
    const numPlayers = players.length

    // Get a total number for team's skill
    // Divide it by potential score

    const ins = Math.round((players.reduce((ins, player) => {
      return ins + player.ins;
    }, 0) / ( 100 * numPlayers )) * 100);

    const mid = Math.round((players.reduce((mid, player) => {
      return mid + player.mid;
    }, 0) / ( 100 * numPlayers )) * 100);

    const threept = Math.round((players.reduce((threept, player) => {
      return threept + player.threept;
    }, 0) / ( 100 * numPlayers )) * 100);

    const insd = Math.round((players.reduce((insd, player) => {
      return insd + player.insd;
    }, 0) / ( 100 * numPlayers )) * 100);

    const perd = Math.round((players.reduce((perd, player) => {
      return perd + player.perd;
    }, 0) / ( 100 * numPlayers )) * 100);

    const defense = Math.round((insd + perd) / 2 );
    const offense = Math.round((ins + mid + threept + insd + perd) / 5 );
    const total = Math.round((ins + mid + threept + insd + perd + insd + perd) / 7);

    const data = {
      labels: ['Inside Offense', 'Mid-Range Offense', '3PT', 'Inside D', 'Perimeter D'],
      datasets: [
        {
          label: 'Out of a possible 100',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [ins, mid, threept, insd, perd]
        }
      ]
    };

    return (
      <div>
        <h2>Team Stats</h2>
        <br />
        <Divider />
        <br />
        <div className="col s12 m12 l12">
          <Radar
            data={data}
            width={500}
            height={500}
            option={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <div className="col s12 m12 l12">
          <h5>Rating Out of 100</h5>
          <br />
          <Divider />
          <br />
          <h6>Team's Offense:</h6> <h5> {offense} </h5>
          <h6>Team's Defense:</h6> <h5> {defense} </h5>
          <h6>Team's Total:</h6> <h5> {total} </h5>
          <br />
          <Divider />
          <br />
          <h6>Number of Players:</h6> <h5>{numPlayers}</h5>
        </div>
      </div>
    )
  }
}
