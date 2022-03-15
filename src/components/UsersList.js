import React from 'react';
import User from './User';

export default function UsersList(props) {
  let results = props.data;
  if (results.length) {
    let users = props.data.map(user => <User name={user.login} url={user.html_url} key={user.id} />);
    return <ul>{users}</ul>
  } else {
    return <p>Sorry, this user name does not match within github</p>
  }
}