import { useState } from "react";

export default function FormNestedObject() {
    //nested object in useState
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleTitle(e){
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                title:e.target.value
            },
        });

    }

    function handleCity(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value,
            },

        });
    }


  return (
    <>
    <label htmlFor="">
        Name
        <input type="text" value={person.name} onChange={e => {setPerson({...person, name:e.target.value})}} />
    </label>

    <label htmlFor="">
        Title
        <input type="text" value={person.artwork.title} onChange={handleTitle} />
    </label>

    <label htmlFor="">
        City
        <input type="text" value={person.artwork.city} onChange={handleCity} />
    </label>


    <p>
        {person.artwork.title} by {person.name} located in  {person.artwork.city}
        <img src={person.artwork.image} alt={person.name} />

    </p>
    </>
  );
}
