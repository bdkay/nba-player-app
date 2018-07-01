import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Divider from 'material-ui/Divider';

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
      labels: ['INS', 'MID', '3PT', 'INS D', 'PER D'],
      datasets: [
        {
          label: 'In % of max possible',
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
          <div className="col s12 m6">
            <Radar
              data={data}
              width={500}
              height={500}
              option={{
                maintainAspectRatio: false
              }}
            />
          </div>
          <div className="col s12 m6">
            <h5>Rating Out of 100</h5>
            <Divider />
            <h6>Team's Offense: {offense}</h6>
            <h6>Team's Defense: {defense}</h6>
            <h6>Team's Total: {total}</h6>
            <Divider />
            <h6>Number of Players: {numPlayers}</h6>
          </div>
      </div>
    )
  }
}
