import React, { useReducer } from 'react'
let initialValue = 0;
let likeInitial = 0;
let dislikeInitial = 0;

const counter=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        case 'RESET':
            return initialValue;
        default:
            return state
    }

}
const counter1 = (state, action) => {
    switch (action.type) {
        case 'LIKE':
            return state + 1;
        default:
            return state;
    }
};

const counter2 = (state, action) => {
    switch (action.type) {
        case 'DISLIKE':
            return state + 1;
        default:
            return state;
    }
};

const Reducer = () => {
    const [count, dispatch] = useReducer(counter, initialValue);
    const [like, dispatchLike] = useReducer(counter1, likeInitial);
    const [dislike, dispatchDislike] = useReducer(counter2, dislikeInitial);

    return (
        <div>
            <h1>Count: {count}</h1><br />
            
            <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
            <button onClick={() => dispatch({ type: "RESET" })}>🔄</button>
            <hr />
            <h1>Like: {like} || Dislike: {dislike}</h1><br />
            
           
            <button onClick={() => dispatchLike({ type: "LIKE" })}>👍❤️</button>
            <button onClick={() => dispatchDislike({ type: "DISLIKE" })}>👎💔</button>
            <hr />
        </div>
    );
};

export default Reducer