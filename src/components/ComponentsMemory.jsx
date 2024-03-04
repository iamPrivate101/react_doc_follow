import { useState } from 'react';
import {sculptureList} from './data';
const ComponentsMemory = () => {

    console.log(sculptureList);
    const [index, setIndex] = useState(3);
    const [showMore, setShowMore] = useState(false)
    const hasNext = index < sculptureList.length - 1;
    const hasPrevious = index > 0;

    // console.log(index);

    let sculpture = sculptureList[index];
    // console.log(sculpture)

    function handleNextClick(){
      if (hasNext){
        setIndex (index + 1);
      }else{
        setIndex(0);
      }
    }

    function handlePreviousClick(){
      if(hasPrevious){
        setIndex(index -1);
      }else{
        setIndex(sculptureList.length - 1);
      }
      
    }

    function handleMoreClick(){
      setShowMore(!showMore);
      // alert(showMore);
    }
    
  return (
    <>
    <button onClick={handlePreviousClick} >Previous</button>
    <button onClick={handleNextClick} >Next</button>
    <h2>
      <i>{sculpture.name}</i>
      by {sculpture.artist}
    </h2>

    <h3>
      ({index + 1} of {sculptureList.length})
    </h3>

    <button onClick={handleMoreClick} >{showMore ? 'Hide' : 'Show'}</button>
    { showMore && <p>{sculpture.description}</p>}
    <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )
}

export default ComponentsMemory
