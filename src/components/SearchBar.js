import React, { useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchText);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} >
    <GiMagnifyingGlass size={25} color={'darkgrey'} style={{ marginInline: 10 }} />
    <label htmlFor="search"/>
    <input type="search" 
           onChange={(e) => setSearchText(e.target.value)}
           name="search" 
          //  ref={(input) => query = input}
           placeholder="Search"
     />
  </form>   
  )
}
