import React from 'react';
import Router from 'react-router';
import notesStore from '../stores/notesStore';

import Left from '../components/Github/Left';
import Middle from '../components/Github/Middle';
import Notes from '../components/Notes/Notes';

export default React.createClass({
  mixins: [ Router.State ],

  render() {
    let username = this.getParams().username;

    return (
      <div className="row">
        <div className="col-md-4">
          <Left username={username}/>
        </div>
        <div className="col-md-4">
          <Middle username={username}/>
        </div>
        <div className="col-md-4">
          <Notes username={username}/>
        </div>
      </div>
    );
  }
});
