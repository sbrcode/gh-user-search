import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchText);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} >
    <label htmlFor="search"/>
    <input type="search" 
           onChange={(e) => setSearchText(e.target.value)}
           name="search" 
           placeholder="Search..."
     />
  </form>   
  )
}
