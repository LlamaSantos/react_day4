import axios from 'axios';
import {
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
  } from '../constants';

let param = `?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`;

let githubUtils = {
  getBio: function(username){
    let url = `https://api.github.com/users/${username}${param}`;
    return axios.get(url);
  },
  getRepos: function(username){
    let url = `https://api.github.com/users/${username}/repos${param}`;
    return axios.get(url);
  }
};

export default githubUtils;
