// Sometimes, you may want to insert an item at a particular position that’s neither at the beginning nor at the end. To do this, you can use the ... array spread syntax together with the slice() method. The slice() method lets you cut a “slice” of the array. To insert an item, you will create an array that spreads the slice before the insertion point, then the new item, and then the rest of the original array.

import { useState } from "react"

let initialArtists = [
    {id:0, name:'Thor'},
    {id:1, name:'IronMan'},
    {id:2, name:'SpiderMan'}
]

let nextId = 3;

const InsertingIntoAnArray = () => {
    const [artists, setArtists] = useState(initialArtists);
    const [name, setName] = useState('');
   
    function handleNormalAdd() {
        name.trim() !== "" ? setArtists([...artists, {id:nextId++, name:name}]) : alert('Enter Text'); 
        // setArtists([...artists, {id:nextId++, name:name}]);
    }

    function handleAddFirst(){
        name.trim() !== "" ? setArtists([{id:nextId++, name:name}, ...artists]) : alert("Enter Text");
        // setArtists([{id:nextId++, name:name}, ...artists]);
    }

    function handleInsert(){
        if( name.trim() !== "" ) {
            const insertAt = 2;

            const nextArtists = [
                //Item before the insertion Point
                ...artists.slice(0, insertAt),
                //new Item
                {id:nextId++,name:name},
                //items after insertion point
                ...artists.slice(insertAt)
            ];
    
            console.log(nextArtists);
            setArtists(nextArtists);
            setName('');
        } else {
            alert("Enter Text");
        }
        
    }

  return (
    <>
    <h2>Marvel</h2>
    <input type="text" value={name} onChange={e => setName(e.target.value)}  />
    <button onClick={handleNormalAdd}>Normal ADD To Last</button>
    <button onClick={handleAddFirst}>Add To First</button>
    <button onClick={handleInsert}>Insert</button>

    <ul>
        {artists.map(artist => (
            <li key={artist.id}>{artist.name}</li>
        ))}
    </ul>
    
    
    </>
  )
}

export default InsertingIntoAnArray
