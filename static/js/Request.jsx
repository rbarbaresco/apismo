// App.jsx
import React from "react";

var $ = require('jquery');

export default class Request extends React.Component {
  constructor(props) {
        super(props);
        this.state = {paths: props.paths, 'path': props.path, 'method': props.method};
    }

  makeRequest () {
  	console.log('paths', this.state.paths);
  	console.log('path', this.state.path);
  	console.log('method', this.state.method);
  }  	

  render () {
      var request = <button onClick={ () => this.makeRequest() }>{this.state.method}{this.state.path}</button>
      return (<div>{request}</div>);
  }	
}