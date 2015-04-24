'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import assign from 'react/lib/Object.assign';
import { EventEmitter } from 'events';
import {
    FIREBASE_URL,
    ADD_NOTE,
    CHANGE_USER,
    CHANGE_EVENT,
  } from '../constants';

let _state = {
  user: '',
  notes: [],
  setUser(_user) { this.user = _user; },
  setNotes(_notes) { this.notes = this.notes.concat(_notes); },
};

let notesStore = assign({}, EventEmitter.prototype, {
  addChangeListener(cb) { this.on(CHANGE_EVENT, cb); },
  removeChangeListener(cb) { this.removeChangeListener(CHANGE_EVENT, cb); },

  getState() { return _state; },

});

AppDispatcher.register((payload) => {
  let action = payload.action;

  switch(action.actionType) {

    case ADD_NOTE:
      _state.setNotes(action.data);
      notesStore.emit(CHANGE_EVENT);
      break;

    case CHANGE_USER:
      _state.setUser(action.data);
      notesStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

export default notesStore;
