// App.jsx
import React from "react";

var $ = require('jquery');

export default class Request extends React.Component {
  constructor(props) {
        super(props);
        this.state = {paths: props.paths, 'path': props.path, 'method': props.method, 'host': props.host};
    }

  makeRequest () {
    console.log('host', this.state.host);
    $[this.state.method](this.state.host + this.state.path, (data) => {
        console.log('incoming data', data);
    });
  }  	

  render () {
      var request = <button onClick={ () => this.makeRequest() }>{this.state.method}{this.state.path}</button>
      return (<div>{request}</div>);
  }	
}