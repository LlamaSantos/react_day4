'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import assign from 'react/lib/Object.assign';
import { EventEmitter } from 'events';
import {
    CHANGE_EVENT,
    GITHUB_USER_BIO,
    GITHUB_USER_REPOS,
    GITHUB_CHANGE_USER,
  } from '../constants';

var _state = {
  user: '',
  bio: {},
  repos: [],
  setBio(_bio) { this.bio = _bio; },
  setRepos(_repos) { this.repos = _repos; },
  newUser(_user) {
    this.user = _user;
    this.bio = {};
    this.repos = [];
  },
};

var githubStore = assign({}, EventEmitter.prototype, {

  addChangeListener(cb) { this.on(CHANGE_EVENT, cb); },
  removeChangeListener(cb) { this.removeChangeListener(CHANGE_EVENT, cb); },

  getUser() { return _state.user; },
  getBio() { return _state.bio; },
  getRepos() { return _state.repos; },
});

AppDispatcher.register((payload) => {
  let action = payload.action;
  switch(action.actionType) {

    case GITHUB_USER_BIO:
      _state.setBio(action.data);
      githubStore.emit(CHANGE_EVENT);
      break;

    case GITHUB_USER_REPOS:
      _state.setRepos(action.data);
      githubStore.emit(CHANGE_EVENT);
      break;

    case GITHUB_CHANGE_USER:
      _state.newUser(action.data);
      githubStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

export default githubStore;
