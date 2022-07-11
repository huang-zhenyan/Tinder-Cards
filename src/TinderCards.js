import { Person } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';



const TinderCards = () => {
    // declare a array in react (useState)
    // people is variable, setPeople is the modifier
    const [people, setPeople] = useState([]);

    // Piece of code which runs based on a condition
    useEffect(() => {
        // this is where code runs...

        // attaching function to variable unsubscribe
        // database.collection... is a listener, meaning every time database changes it will tell us about the change
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))

        return () => {
            // this is the clean up...
            // clean up needed so everytime people changes, we don't have additional listeners
            unsubscribe();
        }
        
        // this will run ONCE when the component loads, and never again
    }, [])

    // BAD 
    // const people = [];
    // people.push('Sonny', 'Qazi')

    // GOOD (PUSH TO ARRAY IN REACT)
    // setPeople([...people, 'Sonny', 'Qazi'])
    // ...people is a spread operator (keeps list of people the same and append to it)

    return (
        <div>
            <div className='tinderCards_cardContainer'>
            {people.map(person => (
            <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
            >
                <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className='card'
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>))}
            </div>
        </div>
    );
    // people.map loops through the people, and returns a tinder card
    // Always give a key in REACT, allows REACT to efficiently re-render a LIST (makes app faster)
}

export default TinderCards;