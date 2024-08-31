import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div 
      className="search-bar" 
      
    >
      <input 
        type="text" 
        placeholder="Search for products..." 
        value={query} 
        onChange={handleChange} 
        style={{
          background: 'linear-gradient(135deg, #f1a655, white, #f9d29d, #f1a655)',
          width: '100%', 
          padding: '8px', 
          border: 'none', 
          borderRadius: '5px' // Optional: Matches the border-radius of the div
        }}
      />
    </div>
  );
}

export default SearchBar;