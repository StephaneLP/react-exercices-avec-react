import React, { useEffect, useState } from "react"

const Counter = () => {
    const[count,setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className="divexo">
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default Counter