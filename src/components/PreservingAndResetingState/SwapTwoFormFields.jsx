import { lazy, useState } from "react"

export default function SwapTwoFormFields() {
    const [reverse, setReverse] = useState(false);
    let checkbox = (
        <label htmlFor="">
            <input type="checkbox" checked={reverse} onChange={e => setReverse(e.target.checked)} />
            Reverse order
        </label>
    );
  if(reverse){
    return(
        <>
            <Field key="firstname" label="First Name" />
            <Field key="lastname" label="Last Name" />
            {checkbox}
        </>
    );
  }else{
    return(
        <>
            <Field key="lastname" label="Last Name" />
            <Field key="firstname" label="First Name" />
            {checkbox}
        </>
    );
  }
}

function Field({label}){
    const [text, setText] = useState('');

    return (
        <>
        <label htmlFor=""> {label}
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder={label} />
        </label>
        
        </>
    );
}
