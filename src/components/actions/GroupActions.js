

import {FETCH_GROUPS} from "./types";
import {LOCAL_DOMAIN} from "./globals";
import { Actions } from 'react-native-router-flux';

export const fetchGroups = (auth_header) => {
  return (dispatch) => {
    console.log('Auth HEADER', auth_header);
    fetch('http://127.0.0.1:8000/api/groups/klass/', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth_header
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({type: FETCH_GROUPS, payload: data})
      });
  }
};

export const joinGroup = (auth_header) => {
  return (dispatch) => {

  }
};

export const leaveGroup = (auth_header) => {
  return (dispatch) => {

  }
};

export const fetchDetailGroup = ({auth_header, url}) => {
  return (dispatch) => {
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth_header
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        Actions.classes_detail({klass: data});
      })
      .catch(error => console.log(error));
  }
};

export const fetchPossibleGroups = (auth_header) => {
  return (dispatch) => {

  }
};

export const getGroupQuestions = (auth_header) => {
  return (dispatch) => {

  }
};

export const postGroupQuestionAnswer = ({auth_header, question}) => {
  return (dispatch) => {

  }
};

export const postSwipeAnswer = ({auth_header, username}) => {
  return (dispatch) => {

  }
};


