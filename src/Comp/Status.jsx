import React, { useState } from 'react'

const Status = () => {
    const [val, setVal] = useState({ name: "Rutuja", isLock: true });
    const handleClick = () => {
        setVal({ ...val, isLock: !val.isLock })  ;
    }

    return (
        <div className='p-4'>
            <h1>Name: {val.name}</h1>
            <h1>Account Status: {val.isLock ? "Unlock" : "Lock"}</h1>
            {/* () => setVal({...val, isLock: !val.isLock}) */}
            <button onClick={handleClick} className={`px-5 py-1 ${!val.isLock ? "bg-blue-400" : "bg-red-400"} text-white rounded-full mt-2`}>{val.isLock ? "Lock" : "Unlock"}</button>
        </div>
    )
}

export default Status
