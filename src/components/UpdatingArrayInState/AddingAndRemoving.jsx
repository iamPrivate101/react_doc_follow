import { useState } from "react"
let nextId = 0;

const AddingAndRemoving = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    console.log(artists);

  return (
    <>
   <h2>Title</h2>
   <input type="text" value={name} onChange={e => setName(e.target.value)} />
   <button onClick={() => { 
    setArtists([...artists,{id:nextId++,name:name}] );
    }} >ADD</button>


    <ul>
        {artists.map(artist => (
            <li key={artist.key} >
                {artist.name}
                <button onClick={() => {
                    setArtists(artists.filter(a =>
                        a.id !== artist.id
                        )
                    );
                }}>
                    del
                </button>
            </li>
        ))}
    </ul>
    </>

  )
}

export default AddingAndRemoving
