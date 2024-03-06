//Event Propagation

// const EventProopagation = () => {
//   return (
//     <div className="toolbar" onClick={() => 
//     {alert('main div');} } >
//       <button onClick={() => alert('Movie')} >Play Movie</button>
//       <button onClick={() => alert('Music')} >Play Music</button>
//     </div>
//   )
// }

// export default EventProopagation


//stopping Event Propagation

function Button({onClick,children}){
    return(
        <button onClick={e => {
            e.stopPropagation();
            onClick();  
        }} >{children}</button>
    );
}

const EventProopagation = () => {
    return (
      <div className="toolbar" style={{color:'red', height:'200px', width:'500px'}} onClick={() => 
      {alert('main div');} } >
        <Button onClick={() => alert('movie')} >Movie</Button>
        <Button onClick={() => alert('music')} >Music</Button>
      </div>
    )
  }
  
  export default EventProopagation
  
  