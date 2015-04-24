'use strict';

import React from 'react';
import notesStore from '../../stores/notesStore';
import noteActions from '../../actions/noteActions';

export default React.createClass({

  handleSubmit() {
    noteActions.addNote({
      user: this.props.username,
      note: this.refs.note.getDOMNode().value,
    });

    this.refs.note.getDOMNode().value = '';
  },

  render () {
    return (
      <div className="input-group cushion">
        <input type="text" ref="note" className="form-control" placeholder="Add Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  }

});
