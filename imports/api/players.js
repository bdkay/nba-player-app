import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Players  = new Mongo.Collection('players');

Players.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Players.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

const PlayerSchema = new SimpleSchema({
  name: { type: String },
  overall: { type: Number, defaultValue: 0 },
  per: { type: Number, defaultValue: 0 },
  ts: { type: Number, defaultValue: 0 },
  ast: { type: Number, defaultValue: 0 },
  usg: { type: Number, defaultValue: 0 },
  notes: { type: String, optional: true },
  owner: { type: String, optional: true }
});

// Attach the schema to the Players collection

Players.attachSchema(PlayerSchema);

// MongoDB knows to look at this particular schema and validate the data that we're passing into the db **from** that particular schema
