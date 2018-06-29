import React, { Component } from 'react';

export default class New extends Component {
  render(){
    return(
      <div className="row">
        <form className="col s12"></form>
        <h3>Add a New Player</h3>
        <div className="row">
          <div className="input-field s6">
            <input placeholder="Name" ref="name" type="text" className="validate" />
          </div>
          <div className="input-field s6">
            <input placeholder="Overall" ref="team" type="text" className="validate" />
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

      </div>
    )
  }
}
