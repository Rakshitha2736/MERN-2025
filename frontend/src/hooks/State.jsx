import React from 'react'
import { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>

        <h1>Like:{like}</h1>
       <button onClick={()=> setLike(like+1)}>Like👍</button>
       
        <h1>Dislike:{dislike}</h1>
        <button onClick={()=> setDislike(dislike+1)}>Dislike👎</button>
        
    </div>
  )
}

export default State