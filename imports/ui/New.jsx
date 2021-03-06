import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Players } from '../api/players';
import { grey900 } from 'material-ui/styles/colors';

class New extends Component {
  submitPlayer(event) {
    event.preventDefault();

    // Insert the new players into the database
    let player = {
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

    Meteor.call('insertPlayer', player, (error) =>{
      if(error) {
        alert("Oops something went wrong: " + error.reason);
      } else {
        alert("Player added");
        this.props.history.push('/');
      }
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
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
              <select className="browser-default" ref="ins">
                <option value="20">20 - F</option>
                <option value="40">40 - D</option>
                <option value="60">60 - C</option>
                <option value="80">80 - B</option>
                <option value="100">100 - A</option>
              </select>
            </div>
            <div className="col s6">
              <h5>MID</h5>
              <select className="browser-default" ref="mid">
                <option value="20">20 - F</option>
                <option value="40">40 - D</option>
                <option value="60">60 - C</option>
                <option value="80">80 - B</option>
                <option value="100">100 - A</option>
              </select>
            </div>
            <div className="col s6">
              <h5>3PT</h5>
              <select className="browser-default" ref="threept">
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
              <select className="browser-default" ref="insd">
                <option value="20">20 - F</option>
                <option value="40">40 - D</option>
                <option value="60">60 - C</option>
                <option value="80">80 - B</option>
                <option value="100">100 - A</option>
              </select>
            </div>
            <div className="col s6">
              <h5>PER D</h5>
              <select className="browser-default" ref="perd">
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

// Wrap with withRouter to push the new content to the main page
export default withRouter(New);
