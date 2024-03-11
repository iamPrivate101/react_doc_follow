import { useState } from "react";

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
];

export default function AvoidDuplicationState() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);
    const selectedItem = items.find(item => item.id === selectedId) ; 
    // const [selectedItem, setSelectedItem] = useState(items[0]);

    function handleItemChange(id,e){
        console.log("asda");
        setItems(items.map(item => {
            if(item.id === id){
                return {
                    ...item, title:e.target.value,
                };
            }else{
                return item;
            }
        }));

    }

  return (
    <>
    <p>Whats your fav?</p>
    <ul>
        {items.map((item, index) => (
            <li key={item.id}><input type="text" value={item.title} onChange={e => {handleItemChange(item.id,e)}} /> 
            <button onClick={() => {setSelectedId(item.id) }}> Choose </button>
             </li>
        ))}
    </ul>
    <p>you picked {selectedItem.title}</p>
    </>
  )
}
