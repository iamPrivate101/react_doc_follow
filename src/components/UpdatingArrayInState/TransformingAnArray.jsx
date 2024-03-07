import { useState } from "react";

let initialShapes = [
    {id: 0, type: 'circle', x:50, y: 100},
    {id: 1, type: 'square', x:100, y: 100 },
    {id: 2, type: 'circle', x:150, y:100 },
];


const TransformingAnArray = () => {
    const [shapes, setShapes] = useState(initialShapes);
    console.log(shapes);

    function handleClick(){
        const nextShapes = shapes.map(shape => {
            if(shape.type === 'square') {
                //nochange
                return shape;
            }else{
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });

        //RE-REnder
        setShapes(nextShapes);
    }
    

  return (
    <>
    <button onClick={handleClick} >Move Circle Down</button>
    {shapes.map(shape => (
        <div key={shape.id} style={{
            background:'purple',
            position:'absolute',
            left: shape.x,
            top:shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width:20,
            height:20
        }} >
        </div>
    ))}
    </>
  )
}

export default TransformingAnArray
