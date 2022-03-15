import React from 'react';

export default function User(props) {
  return <div><a href={props.url} target="_BLANK" rel="noreferrer">{props.name}</a></div>
};
