// Methods for updating the database

import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

//Insert players into database

Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  },
  updatePlayer(player) {
    Players.update(player._id,
    { $set: player});
  },

  deletePlayer(playerId) {
    Players.remove(playerId);
  }
});
