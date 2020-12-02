import React from 'react';

const Navigation = () => {
  return (
    <div id="navigation" className="Navigation">
      <nav>
        <ul style={{ listStyleType: 'none' }}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular </li>
          <li>My List</li>
        </ul>
      </nav>
    </div>
  )
};

export default Navigation;