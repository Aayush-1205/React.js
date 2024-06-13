import React, { useState } from 'react'

const Counter = () => {
    const [score, setScore] = useState(1);
    const change = () => setScore(score +1);

    return (
        <div className='p-4'>
            <h1>{score}</h1>
            <button onClick={change} className='bg-slate-600 py-1 px-2 text-white'>change</button>
        </div>
    )
}

export default Counter
