import { useState } from "react"

export default function CountLabel({count}) {
    const [prevCount, setPrevCount] = useState(count);
    const [trend, setTrend] = useState(null);
    
    console.log('pre'+prevCount);
    console.log('new'+count);
    if(prevCount !== count){
        setPrevCount(count);
        setTrend(prevCount < count ? 'increasing' : 'decreasing');
    }
  return (
    <div>
      <h3>{count}</h3>
      {trend && <p>This trend is {trend}</p>}
    </div>
  )
}
