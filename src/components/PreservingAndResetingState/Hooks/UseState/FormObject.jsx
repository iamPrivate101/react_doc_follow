import { useState } from "react";

let initialdata = [
    {
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
      }
    
];
export default function FormObject() {
    const [form, setForm] = useState(initialdata[0]);

    function handleLastName(e){
        setForm({
            ...form, lastName:e.target.value
        });
    }

      
  return (
    <>
    <label htmlFor="">
        First Name
        <input type="text" value={form.firstName} onChange={e => {setForm({...form, firstName:e.target.value})}}/>
    </label>

    <label htmlFor="">
        Last Name
        <input type="text" value={form.lastName} onChange={handleLastName}/>
    </label>

    <label htmlFor="">
        Email
        <input type="email" value={form.email} onChange={e => {setForm({...form,email:e.target.value})}}/>
    </label>

    <p>{form.firstName} {form.lastName} {form.email}</p>
    
    </>
  )
}
