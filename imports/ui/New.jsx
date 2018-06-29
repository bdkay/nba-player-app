import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Players } from '../api/players';

class New extends Component {
  submitPlayer(event){
    event.preventDefault();

    // Insert the new players into the database
    Players.insert({
      name: this.refs.name.value,
      overall: this.refs.overall.value,
      per: this.refs.per.value,
      ts: this.refs.ts.value,
      ast: this.refs.ast.value,
      usg: this.refs.usg.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
    });

    console.log("Success player submitted!");

    // Push the result to the main page
    this.props.history.push('/');
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
              <input placeholder="Overall" ref="overall" type="text" className="validate" />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <h5>PER</h5>
              <select className="browser-default" ref="per">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill aquired</option>
                <option value="3">3 - Great skills/mastery</option>
              </select>
            </div>
            <div className="col s6">
              <h5>TS%</h5>
              <select className="browser-default" ref="ts">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill aquired</option>
                <option value="3">3 - Great skills/mastery</option>
              </select>
            </div>
            <div className="col s6">
              <h5>AST%</h5>
              <select className="browser-default" ref="ast">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill aquired</option>
                <option value="3">3 - Great skills/mastery</option>
              </select>
            </div>
            <div className="col s6">
              <h5>USG%</h5>
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
