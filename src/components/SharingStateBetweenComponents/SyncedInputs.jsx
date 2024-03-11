import { useState } from "react";

export default function SyncedInputs() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

  return (
    <>
        <Input label="First Input" onChange={handleChange}  value={text}/>
        <Input label="Second Input" onChange={handleChange} value={text}/>
    </>
  )
}



function Input({label, onChange, value}){

   

    return (
        <>
        <label htmlFor="">{label}</label>
        <input type="text" value={value}  onChange={onChange} />
        </>
    );
}
