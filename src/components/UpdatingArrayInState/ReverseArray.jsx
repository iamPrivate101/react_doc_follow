import { useState } from "react"

const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Mun Landscape' },
    { id: 3, title: 'Terracotta Army' },
]


const ReverseArray = () => {
    const [lists, setLists] = useState(initialList);

    function handleReverse(){
        const nextList = [...lists];
        nextList.reverse();
        console.log(nextList);
        setLists(nextList);
    }
  return (
    <>
    <h2>list</h2>
    <button onClick={handleReverse}>Reverse</button>
    <ul>
        {lists.map(list => (
            <li key={list.id}>{list.title}</li>
        ))}
    </ul>
    </>
  )
}

export default ReverseArray
