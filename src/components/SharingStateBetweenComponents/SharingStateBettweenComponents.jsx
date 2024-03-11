import { useState } from "react";


function Panel({title, children, isActive, onShow}){
    // const [isActive, setActive] = useState(false);

    return (
        <section>
            <h3>{title}</h3>
            {isActive && <p>{children} </p> }
            {/* <button onClick={() => setActive(!isActive)} > {isActive ? 'Hide' : 'Show'}  </button>    */}
            {/* {isActive ? ( <p>{children}</p> ) : (<button onClick={() => setActive(true)}> Show </button>)} */}
            <button onClick={onShow}>
          Show
        </button>
        </section>
    );
}

export default function SharingStateBettweenComponents() {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <h3>test1</h3>
    <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)} >Lorem ipsum dolor sit amet consectetur adipisicing elit. </Panel>
    <h3>test2</h3>
    <Panel title="Contact" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} >Delectus quos ex ea exercitationem odit? Nulla delectus eveniet ullam necessitatibus debitis eligendi pariatur cum ducimus nostrum? Iusto magni beatae fugit numquam.</Panel>

    </>
  )
}
