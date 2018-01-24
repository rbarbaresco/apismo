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

  render () {
      var apis = [];
      if (this.state.apis) {
      	for (var index in this.state.apis) {
      		var api = this.state.apis[index];
      		console.log('look!api', api);
	      	var paths = api.api.paths
	      	for (var path in paths) {
	      		var methods = paths[path];
	      		for (var method in methods) {
	          	apis.push(<Request key={method+path} host={api.host} paths={paths} method={method} path={path}></Request>);
	      		}
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