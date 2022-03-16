import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const performSearch = (query) => {
    setLoading(true)
    axios.get(`https://api.github.com/search/users?q=${query}in:name&per_page=100`)
      .then(response => {
        setUsers(response.data.items)
        setLoading(false)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  return (
    <div style={{ padding: 20, backgroundColor: 'lightslategray', color: 'white' }}>
      <h1>Github User Search Tool</h1>
      <SearchBar onSearch={performSearch} />      
        {loading
          ? <p><i>Loading...</i></p>
          : <UsersList users={users} />
        }
    </div>
    );
}
