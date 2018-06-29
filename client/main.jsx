import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App';
import Example from '../imports/ui/Example';
import Lost from '../imports/ui/Lost';

injectTapEventPlugin();

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
