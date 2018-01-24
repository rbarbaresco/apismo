// App.jsx
import React from "react";
import Request from "./Request";

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

  request (paths, path, method) {
  	console.log('paths', paths);
  	console.log('path', path);
  	console.log('method', method);
  }  	

  render () {
      var apis = [];
      console.log('look!', this.state);
      if (this.state.apis) {
      	var paths = this.state.apis.paths
      	for (var path in paths) {
      		var methods = paths[path];
      		for (var method in methods) {
          	apis.push(<Request key={method+path} paths={paths} method={method} path={path}></Request>);
      		}
      	}
      }

      return (
          <div className='header-contents'>
              <div className='content-title'>apismo</div>
              {apis}
          </div>
      );
  }	
}