import { useEffect, useState } from "react"

export default function UseEffect() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    // console.log("outside effect");
    // useEffect(() => {
    //     console.log("inside Effect");
    // },[resourceType])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    },[resourceType]);
  return (
    <>
    <div>
      <button onClick={() => setResourceType('posts')}>posts</button>
      <button onClick={() => setResourceType('users')}>users</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
    })}
    </>
  )
}
