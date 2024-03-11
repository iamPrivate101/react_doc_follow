import { useState } from "react"

export default function ProfileEditor() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('sameer');
    const [lastName, setLastName] = useState('maharjan');
  return (
    <>
    <form onSubmit={e => {
        e.preventDefault();
        setIsEditing(!isEditing);
    }}>
        <label htmlFor="">first Name : 
            {isEditing ? (
                <input type="text" value={firstName} onChange={e => {setFirstName(e.target.value)}} />
            ) : ( <b>{firstName} </b> ) }
        </label>

        <label htmlFor="">
            Last Name: 
            {isEditing ? (
                <input type="text" value={lastName} onChange={e => {setLastName(e.target.value)}} />
            ) : ( <b>{lastName}</b> ) }
        </label>
        <button type="submit"> {isEditing ? 'Save' : 'Edit' } </button>
        <p>Hello {firstName} {lastName}</p>
    </form>
    </>
  )
}
