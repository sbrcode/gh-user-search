import React, { Component } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <GiMagnifyingGlass size={25} color={'darkgrey'} style={{ marginInline: 10 }} />
        <label htmlFor="search"/>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Search"
         />
      </form>      
    );
  }
}