import React, { useEffect, useState } from 'react'
import { createConnection } from './Chat';

function ChatRoom({roomId}){
    const [serverUrl, setServerUrl] = useState('http://localhost:5173/');
    
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () =>{
            connection.disconnect();
        };
    },[roomId, serverUrl]);

    // useEffect(() => {
    //     console.log("open");
    //     return () => {
    //         console.log("close");
    //     }
    // })

    return (
        <>
        <label htmlFor="">
            Server Url: 
            <input type="text" value={serverUrl} onChange={e => setServerUrl(e.target.value)} />

        </label>
        <h2>Welcome to {roomId}</h2>
        </>
    );
}

export default function ConnectingToChatServer() {
    const [roomId, setRoomID] = useState('general');
    const [show, setShow] = useState(false);
  return (
    <>
    <label htmlFor="">choose teh room</label>
    <select name="" id="" value={roomId} onChange={e => setRoomID(e.target.value)}>
        <option value="general">general</option>
        <option value="travel">travel</option>
        <option value="music">music</option>
    </select>
    <button onClick={() => setShow(!show)} > {show ? 'close' : 'open'} </button>
    {show && <hr/> }
    {show && <ChatRoom roomId= {roomId} /> }
    </>
  )
}
