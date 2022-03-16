import React from 'react';

export default function UsersList({ users }) {

  const usersList = users.map(user =>
    <div key={user.id} style={{ backgroundColor: 'lightsteelblue' }}>
      <a href={user.html_url} target="_BLANK" rel="noreferrer">{user.login} </a>
    </div>
  )

  return (users.length)
    ? <ul>{usersList}</ul>
    : <p><i>no match or empty search</i></p>
}