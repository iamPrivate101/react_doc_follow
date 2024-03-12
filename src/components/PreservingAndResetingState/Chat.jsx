import React, { useState } from 'react'

export default function Chat({contact}) {
    const [text,setText] = useState('');
  return (
    <section>
        <textarea name="" id="" cols="30" rows="10" value={text} placeholder={'chat to '+ contact.name} onChange={e => setText(e.target.value)}>
        </textarea>
        <button>Send to {contact.email}</button>
    </section>      

  )
}
