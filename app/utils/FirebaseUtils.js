import Firebase from 'firebase';
import { FIREBASE_URL } from '../constants/';

let firebaseUtils = {
  homeInstance: function(){
    return new Firebase(FIREBASE_URL);
  },
  addNote: function(noteObj){
    this.homeInstance().child(noteObj.user).push(noteObj.note);
  },
  toArray: function(obj){
    var arr = [];
    for(var key in obj){
      arr.push(obj[key]);
    }
    return arr;
  }
};

export default firebaseUtils;
