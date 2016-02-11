import React from 'react'
import { render } from 'react-dom'

Meteor.startup(function () {

  if (Meteor.isCordova || Meteor.isClient) {

    render(
      <h1>I am your god!</h1>,
      document.getElementById('render-target')
    );
  }
});