import React, { useEffect, useState } from "react"

const Citation = () => {
    const[isCliked,setIsCliked] = useState(false)

    const displayCitation = () => {
        setIsCliked(true)
    }

    return (
        <article>
            {isCliked && <p>“Ceux qui aiment marcher en rangs sur une musique : ce ne peut être que par erreur qu’ils ont reçu un cerveau, une moelle épinière leur suffirait amplement.”</p>}
            <button onClick={displayCitation}>Afficher la citation</button>
        </article>
    )
}

export default Citation