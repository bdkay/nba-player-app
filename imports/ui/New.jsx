import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Players } from '../api/players';

class New extends Component {
  submitPlayer(event){
    event.preventDefault();

    // Insert the new players into the database
    let player = {
      name: this.refs.name.value,
      position: this.refs.name.position,
      ins: this.refs.ins.value,
      mid: this.refs.mid.value,
      threept: this.refs.threept.value,
      insd: this.refs.insd.value,
      perd: this.refs.perd.value,
      notes: this.perd.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId()
    };

    // Contacting client from server
    Meteor.call('insertPlayer', player, (error) => {
      if (error){
        alert("Oops! Something went wrong: " + error.reason);
      } else {
        alert("Player added!");
        // Push the result to the main page
        this.props.history.push('/');
      }
    })

  }
  render(){
    return(
      <div className="row">
        <form className="col s12" onSubmit={ this.submitPlayer.bind(this)} >
          <h3>Add a New Player</h3>
          <div className="row">
            <div className="input-field s6">
              <input placeholder="Name" ref="name" type="text" className="validate" />
            </div>
            <div className="input-field s6">
              <input placeholder="Position" ref="position" type="text" className="validate" />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <h5>INS</h5>
              <select className="browser-default" ref="per">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill aquired</option>
                <option value="3">3 - Great skills/mastery</option>
              </select>
            </div>
            <div className="col s6">
              <h5>MID</h5>
              <select className="browser-default" ref="ts">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill aquired</option>
                <option value="3">3 - Great skills/mastery</option>
              </select>
            </div>
            <div className="col s6">
              <h5>3PT</h5>
              <select className="browser-default" ref="ast">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill aquired</option>
                <option value="3">3 - Great skills/mastery</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <h5>INS D</h5>
              <select className="browser-default" ref="usg">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill aquired</option>
                <option value="3">3 - Great skills/mastery</option>
              </select>
            </div>
            <div className="col s6">
              <h5>PER D</h5>
              <select className="browser-default" ref="usg">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill aquired</option>
                <option value="3">3 - Great skills/mastery</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <textarea placeholder="Notes" ref="notes" type="text" className="materialize-text-area" />
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

// Wrap with withRouter to push the new content to the main page
export default withRouter(New);
