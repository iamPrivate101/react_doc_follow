
function PlayButton({movieName}){
    function handlePayClick(){
        alert('handle Click');
    }
    return (
        <Button onClick={handlePayClick} > Play {movieName} </Button>
    );

}

function UploadButton(){
    return (
        <Button onClick={() => alert('Uploading')} > Upload </Button>
    );
}

function Button({onClick, children}){
    return (
        <button onClick={onClick} >{children}</button>
    );
}

const PassingEventHandlerAsPrpos = () => {




  return (
    <>
    <PlayButton movieName='Test Movie' />
    <UploadButton />
    </>
  )
}

export default PassingEventHandlerAsPrpos
