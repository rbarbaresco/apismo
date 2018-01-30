// App.jsx
import React from "react";

var axios = require('axios');

export default class Request extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          method: props.method,
          host: props.host,
          path: props.path,
          specification: props.specification
        };
    }

  makeRequest () {
    axios({
      method: 'post',
      url: '/makerequest',
      headers: {'Content-Type': 'application/json'},
      data: {
        'host': this.state.host,
        'path': this.state.path,
        'method': this.state.method,
        'payload': 'Need to build some beaultiful payload to show to the server',
        'headers': [{'some': 'value'}],
        'parameters': this.state.specification['parameters']
      }
    }).then( (data) => {
        console.log('incoming data', data);
    });
  }  	

  render () {
      var request = <button onClick={ () => this.makeRequest() }>{this.state.method}{this.state.path}</button>
      return (<div>{request}</div>);
  }	
}