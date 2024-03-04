function Toolbar({onPlayMovie, onUploadImage}){
    return (
    <div>
        <Button onclick={onPlayMovie} > Play </Button>
        <Button onclick={onUploadImage} > Movie </Button>
    </div>
    );
}

function Button({onclick,children}){
    return (
        <button onClick={onclick}>{children}</button>
    );
}


const RespondingToEvent = () => {
  return (
    <Toolbar 
    onPlayMovie={() => alert('Playing!')}
    onUploadImage={() => alert('Uploading!')}
     />
  );
}
export default RespondingToEvent



