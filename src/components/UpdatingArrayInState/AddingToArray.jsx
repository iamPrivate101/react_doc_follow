//push() will mutate an array. which we dont want

import { useState } from "react"

let nextId = 0;

const AddingToArray = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    console.log(artists);
  return (
   <>
   <h1>Inspiring Text</h1>
   <input value={name} onChange={e => setName(e.target.value)} type="text"  />
   <button onClick={() => {
    artists.push({
        id : nextId + 1,
        name : name,
    })
   }} >Add</button>
   
   <ul>
    {artists.map(artist => (
        <li key={artist.id}>{artist.name}</li>
    ))}
   </ul>
   </>
  )
}

export default AddingToArray
