import React, { Component } from 'react';
import { grey900 } from 'material-ui/styles/colors';

export default class Edit extends Component {

  showTeamStats(){
    this.props.showTeamStats();
  }

  editPlayer(event){
    event.preventDefault();

    // Insert the new players into the database
    let player = {
      _id: this.props.currentPlayer._id,
      name: this.refs.name.value,
      position: this.refs.position.value,
      ins: this.refs.ins.value,
      mid: this.refs.mid.value,
      threept: this.refs.threept.value,
      insd: this.refs.insd.value,
      perd: this.refs.perd.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId()
    };

    // Contacting client from server
    Meteor.call('updatePlayer', player, (error) => {
      if (error){
        alert("Oops! Something went wrong: " + error.reason);
      } else {
        alert("Player updated!");

        this.showTeamStats();
      }
    });
  }
  render(){
    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="row">
        <form className="col s12" onSubmit={ this.editPlayer.bind(this) } >
          <h3>Edit a Player</h3>
          <div className="row">
            <div className="input-field s6">
              <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name} />
            </div>
            <div className="input-field s6">
              <input placeholder="Position" ref="position" type="text" className="validate" defaultValue={currentPlayer.position} />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <h5>INS</h5>
              <select className="browser-default" ref="ins" defaultValue={currentPlayer.ins}>
                <option value="20">20 - F</option>
                <option value="40">40 - D</option>
                <option value="60">60 - C</option>
                <option value="80">80 - B</option>
                <option value="100">100 - A</option>
              </select>
            </div>
            <div className="col s6">
              <h5>MID</h5>
              <select className="browser-default" ref="mid" defaultValue={currentPlayer.mid}>
                <option value="20">20 - F</option>
                <option value="40">40 - D</option>
                <option value="60">60 - C</option>
                <option value="80">80 - B</option>
                <option value="100">100 - A</option>
              </select>
            </div>
            <div className="col s6">
              <h5>3PT</h5>
              <select className="browser-default" ref="threept" defaultValue={currentPlayer.threept}>
                <option value="20">20 - F</option>
                <option value="40">40 - D</option>
                <option value="60">60 - C</option>
                <option value="80">80 - B</option>
                <option value="100">100 - A</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <h5>INS D</h5>
              <select className="browser-default" ref="insd" defaultValue={currentPlayer.insd}>
                <option value="20">20 - F</option>
                <option value="40">40 - D</option>
                <option value="60">60 - C</option>
                <option value="80">80 - B</option>
                <option value="100">100 - A</option>
              </select>
            </div>
            <div className="col s6">
              <h5>PER D</h5>
              <select className="browser-default" ref="perd" defaultValue={currentPlayer.perd}> 
                <option value="20">20 - F</option>
                <option value="40">40 - D</option>
                <option value="60">60 - C</option>
                <option value="80">80 - B</option>
                <option value="100">100 - A</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <textarea placeholder="Notes" ref="notes" type="text" className="materialize-text-area" />
            </div>
            <div className="col s6">
              <button className="btn waves-effect" style={ {backgroundColor: grey900} } type="submit" name="action">Submit
              <i className="material-icons right">send</i></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
