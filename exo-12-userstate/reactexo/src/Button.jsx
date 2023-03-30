const Button = (props) => {
    return (
        <button onClick={props.changeColor} style={{backgroundColor : props.colors[props.index]}}>Changer la couleur (nb clicks : {props.count})</button>
    )
}

// import React, { useEffect, useState } from "react"
// const Button = (props) => {
//     const[count,setCount] = useState(0)
//     let[index,setIndex] = useState(0)

//     const changeColor = () => {
//         const articles = document.querySelectorAll(props.classe)
//         for(let i=0; i<articles.length; i++) {
//             articles[i].style.backgroundColor = props.colors[index]
//         }
//         if(index == props.colors.length-1) index = -1

//         setIndex(index + 1)
//         setCount(count + 1)
//     }

//     return (
//         <button onClick={changeColor}>Changer la couleur (nb clicks : {count})</button>
//     )
// }

// const Button = (props) => {
//     let count = 0
//     let index = 0

//     const changeColor = (event) => {
//         const articles = document.querySelectorAll(props.classe)
//         for(let i=0; i<articles.length; i++) {
//             articles[i].style.backgroundColor = props.colors[index]
//         }
//         if(index == props.colors.length-1) index = 0

//         count += 1
//         event.target.textContent = "Changer la couleur (nb clicks : " + count + ")"

//         index += 1
//     }

//     return (
//         <button onClick={changeColor}>Changer la couleur (nb clicks : {count})</button>
//     )
// }

export default Button