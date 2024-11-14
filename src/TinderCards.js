
import React, { useEffect, useState,useRef } from 'react';
import TinderCard from 'react-tinder-card';
import { collection, onSnapshot } from "firebase/firestore";
import database from './firebase';
import "./TinderCards.css";

import ButtonBase from '@mui/material/ButtonBase';

import { useNavigate } from 'react-router-dom';

function TinderCards() {
  const [people, setPeople] = useState([]);
  const  [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const timeRef = useRef(null);// A ref to store the timer ID


  /*
  // Piece of code which runs based on conditions
  useEffect(() => {
    // This will run once when the component loads and never again
    const unsubscribe = onSnapshot(collection(database, 'people'), (snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    // Cleanup function to unsubscribe from the Firestore listener
    //return () => unsubscribe();


    return() => {
      unsubscribe();
    };

    
  }, [/*people]); */

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'people'), (snapshot) => {
      const fetchedPeople = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched people:", fetchedPeople); // Log fetched data
      setPeople(fetchedPeople);
    }, (error) => {
      console.error("Error fetching people:", error);
    });
  
    return () => unsubscribe();
  }, []);
  


  /*const handleCardClick = (person) => {
    navigate(`/profile/${person.name}`, { state: {person} });
    setSelectedCard(person.name);
  };*/

  const handleCardClick = (person) => {
    timeRef.current = setTimeout(() => {
      setSelectedCard(person.name);
      navigate(`/profile/${person.name}`, { state: { person } });
    }, 500); // 500ms delay for swiping
  };

  // Cancel the navigation if a swipe happens
  const handleCardLeftScreen = () => {
    clearTimeout(timeRef.current);
    setSelectedCard(null); // Reset selected card when swiped
  };

  return (
    <div>
      <div className="tinderCards__cardsContainer">
        {people.map((person, index) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={handleCardLeftScreen} // Reset selected card when swiped {() => setSelectedCard(null)}
          >

            <ButtonBase
            //onClick={() => handleCardClick(person)} // Pass index to the click handler
            onMouseDown={() => handleCardClick(person)} // Trigger the delay on mouse down
            onMouseUp={() => clearTimeout(timeRef.current)} // Cancel if mouse is released quickly (i.e., a swipe)


            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              borderRadius: '10px', // optional styling to round corners
            }}
            >


            <div
            //onClick={() => handleCardClick(index)} // Card click/touch
              style={{
                  backgroundImage: `url(${person.url})`,
                  border: selectedCard === person.name ? '3px solid lightgray' : 'none', // Light gray border if selected
                  
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px',
                }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>

            </ButtonBase>

          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;