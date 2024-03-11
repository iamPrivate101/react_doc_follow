import { useState } from "react"

export default function AvoidContradicationInState() {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleOnSubmit(e){
        e.preventDefault();
        setIsSending(true);
        await sendMessage(text);
        setIsSending(fasle);
        setIsSent(true);
    }

    if(isSent){
        return (<h1>Thanks</h1> );
    }

  return (
    <>
    <form  onSubmit={handleOnSubmit}>
        <p>How was your day</p>
        <input type="text" value={text} onChange={e => { setText(e.target.value) }}  />
        <button disabled={isSending} type="submit">Submit</button>
    </form>
    
    </>
  )
}

//prtend to send message
function sendMessage(text){
    return new Promise(resolve => {setTimeout(resolve, 2000);});
}
