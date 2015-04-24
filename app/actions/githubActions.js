'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import githubUtils from '../utils/githubUtils';
import {
    GITHUB_USER_BIO,
    GITHUB_USER_REPOS,
    GITHUB_CHANGE_USER,
  } from '../constants';

let githubActions = {

  getUserBio(username) {
    githubUtils.getBio(username)
      .then((response) => {
        AppDispatcher.handleAction({
          actionType: GITHUB_USER_BIO,
          data: response.data
        });
      });
  },

  getUserRepos(username) {
    githubUtils.getRepos(username)
      .then((response) => {
        AppDispatcher.handleAction({
          actionType: GITHUB_USER_REPOS,
          data: response.data
        });
      });
  },

  changeUser(username) {
    AppDispatcher.handleAction({
      actionType: GITHUB_CHANGE_USER,
      data: username
    });
  },

};

export default githubActions;
