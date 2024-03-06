
const PreventingDefaultBehaviour = () => {
  return (
      <form onSubmit={e => {
        e.preventDefault();
        alert('Submitting');
      }} >
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
  )
}

export default PreventingDefaultBehaviour
