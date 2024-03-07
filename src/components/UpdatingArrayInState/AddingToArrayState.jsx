import { useState } from "react"


let nextId = 0;


const AddingToArrayState = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    console.log(nextId);
    console.log(artists);

  return (
    <>
        <h3>test</h3>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => {
            //showing the latest added array to last
            // setArtists([...artists, {id: nextId++, name: name}])  //for concat use ...spread syntax

            //showing the latest added array to first
            setArtists([{id: nextId, name:name}, ...artists]);


        }} >Add</button>

        <ul>
            {artists.map(artist => (
                <li key={artist.id} >{artist.name}</li>
            )) }
        </ul>
    </>
  )
}

export default AddingToArrayState;
