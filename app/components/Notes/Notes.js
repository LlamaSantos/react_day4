'use strict';

import React from 'react';
import AddNote from './AddNote';
import NotesList from './NotesList';
import notesStore from '../../stores/notesStore';
import noteActions from '../../actions/noteActions';

export default React.createClass({

  getInitialState(){
    return {
      notes: notesStore.getState().notes
    }
  },

  _onChange() {
    this.setState({
      notes: notesStore.getState().notes
    });
  },

  componentWillReceiveProps(obj) {
    noteActions.changeUser(obj.username);
  },

  componentDidMount() {
    notesStore.addChangeListener(this._onChange);
    noteActions.changeUser(this.props.username);
  },

  componentDidUnmount() {
    notesStore.removeChangeListener(this._onChange);
  },

  render () {
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <AddNote username={this.props.username} />
        <NotesList notes={this.state.notes}/>
      </div>
    );
  }

});
