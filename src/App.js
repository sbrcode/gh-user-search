import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query) => {
    axios.get(`https://api.github.com/search/users?q=${query}`)
      .then(response => {
        this.setState({
          query: query,
          users: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  
  render() { 
    return (
      <div>
        <h1>Github User Search</h1>
        <SearchBar onSearch={this.performSearch} />      
        <div>
          {
          (this.state.loading)
           ? <p><i>Loading...</i></p>
           : <div><p>You were looking for [ <b>{this.state.query}</b> ]</p><UsersList data={this.state.users} /></div>
          }
        </div>
      </div>
      );
  }
}