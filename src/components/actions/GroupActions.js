

import {FETCH_GROUPS} from "./types";
import {LOCAL_DOMAIN} from "./globals";

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
      }

      );

  }
};
