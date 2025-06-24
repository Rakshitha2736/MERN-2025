import React from 'react'
import { useEffect } from 'react';

const Effect = () => {
    const [count, setCount] = React.useState(0);
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/get')
            .then((res) => res.json())
            .then((data) => setUsers(data))
    },[])
    console.log(users);
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <ul>
            {users.map((user)=>(
                <li key={user._id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}
export default Effect;