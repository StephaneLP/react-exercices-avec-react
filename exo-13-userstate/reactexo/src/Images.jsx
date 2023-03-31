import React, { useEffect, useState } from "react"

const Images = () => {
    const[isClicked,setIsClicked] = useState(false)
    
    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div className="d-flex flex-column">
            {isClicked && <img src="http://jolstatic.fr/www/captures/1993/0/94350.jpg"></img>}
            <button onClick={handleClick}>Cliquer</button>
        </div>
    )
}

export default Images