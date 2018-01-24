// App.jsx
import React from "react";

var $ = require('jquery');

export default class App extends React.Component {
  constructor() {
        super();

        this.state = {
          apis: null,
        };

        $.get('/apis', (data) => {
            this.setState({
                apis: data
            });
        });
  }

  selectedCity(event, {suggestion}) {
      this.setState({
          forecast: null
      });
      $.get('/forecast/' + suggestion['id'], (data) => {
          this.setState({
              forecast: JSON.parse(data)
          });
      });
  }

  render () {
      var apis = null;
      console.log('look!', this.state);
      if (this.state.apis) {
          apis = <p>{this.state.apis}</p>
      }

      return (
          <div className='header-contents'>
              <div className='content-title'>apismo</div>
              {apis}
          </div>
      );
  }	
}