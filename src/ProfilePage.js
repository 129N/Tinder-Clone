import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import './ProfilePage.css';





function ProfilePage() {
    const { name } = useParams(); // Get the name from the URL
    const location = useLocation(); // Get the passed state (person data)
    const person = location.state?.person; // Extract the person data
  
    return (
        <div class = "ProfileBG">
             <h1>Profile of {name}</h1>
      {person ? (
        <div class = "profile_info">
          <img src={person.url} alt={name} style={{ width: '500px', height: '500px', borderRadius: '10px' }} />
          <h2>{person.name}</h2>
          <p>Name:<br/> Age: <br/>degree:</p>
          <h1>Componets </h1> <br/>
          <button> Apply</button><br/>
          <button> See this person's info</button><br/>
          <button> Communication</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        </div>
    );
}

export default ProfilePage;
