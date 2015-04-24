'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import firebaseUtils from '../utils/firebaseUtils';
import {
    ADD_NOTE,
    CHANGE_USER,
  } from '../constants';

let noteAction = {
  addNote(obj) {
    firebaseUtils.addNote(obj);

    AppDispatcher.handleAction({
      actionType: ADD_NOTE,
      data: obj.note,
    });
  },

  changeUser(username) {
    firebaseUtils.homeInstance().child(username).on('value', (snapshot) => {
      AppDispatcher.handleAction({
        actionType: CHANGE_USER,
        data: username
      });
    });
  },
};

export default noteAction;
