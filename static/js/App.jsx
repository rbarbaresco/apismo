// App.jsx
import React from "react";
import Request from "./Request";

var axios = require('axios');

export default class App extends React.Component {
  constructor() {
        super();

        this.state = {
          apis: null,
        };

        axios({
        	method: 'get',
        	url: '/apis',
        }).then( (data) => {
            this.setState({
                apis: data.data
            });
        });
  }

  render () {
      var apis = [];
      if (this.state.apis) {
      	for (var index in this.state.apis) {
      		var api = this.state.apis[index];
	      	var paths = api.api.paths
	      	for (var path in paths) {
	      		var methods = paths[path];
	      		for (var method in methods) {
	          	apis.push(
	          		<Request
		          		key={method+path}
		          		method={method}
		          		host={api.host}
		          		path={path}
		          		specification={methods[method]}>
	          		</Request>
	          	);
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