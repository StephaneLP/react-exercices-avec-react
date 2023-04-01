import './Home.css'
import Button from './Button'
import React, { useEffect, useState } from "react"

const colors = ["darkgrey","orange","DarkGoldenRod","darkgreen","yellow","darkblue","darkred"]
    
const Home = () => {
    const[count,setCount] = useState(0)
    const [index,setIndex] = useState(0)

    const newIndex = (index, l) => {
        if(index === l-1) {
            return (0)
        } else {
            return(index + 1)
        }            
    }
    
    const changeColor = () => {
        setIndex(newIndex(index,colors.length))
        setCount(count + 1)
    }

    ////////////////////////////////////////////////////////////////////////////

    // const[objIndex, setObjIndex] = useState({count: 0, index: 0})

    // const newObjIndex = () => {
    //     let newObj = {count: 0, index: 0}

    //     newObj.count = objIndex.count + 1
    //     if(objIndex.index == colors.length-1) {
    //         newObj.index = 0
    //     } else {
    //         newObj.index = objIndex.index + 1
    //     }       
    //     return newObj
    // }
    
    // const changeColor = () => {
    //     setObjIndex(newObjIndex())
    // }

    ////////////////////////////////////////////////////////////////////////////

    // const[arrayIndex, setArrayIndex] = useState([0,0])

    // const newArrayIndex = () => {
    //     let newArray = [...arrayIndex]

    //     newArray[0] = arrayIndex[0] + 1
    //     if(arrayIndex[1] == colors.length-1) {
    //         newArray[1] = 0
    //     } else {
    //         newArray[1] = arrayIndex[1] + 1
    //     }       

    //     return newArray
    // }
    
    // const changeColor = () => {
    //     setArrayIndex(newArrayIndex())
    // }

    ////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Page 1</li>
                        <li>Page 2</li>
                        <li>Page 3</li>
                    </ul>
                </nav>
            </header>
            <main className="d-flex align-items-center">
                <section className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[index]}}></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[index]}}></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[index]}}></div></div>
                        <div className='col-12 text-center'><Button changeColor={changeColor} count={count}/></div>

                        {/* <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[objIndex.index]}}></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[objIndex.index]}}></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[objIndex.index]}}></div></div>
                        <div className='col-12 text-center'><Button colors={colors} index={objIndex.index} changeColor={changeColor} count={objIndex.count}/></div> */}

                        {/* <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[arrayIndex[1]]}}></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[arrayIndex[1]]}}></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[arrayIndex[1]]}}></div></div>
                        <div className='col-12 text-center'><Button colors={colors} index={arrayIndex[1]} changeColor={changeColor} count={arrayIndex[0]}/></div> */}
                    </div>
                </section>
            </main>
            <footer>
            </footer>
        </>
    )
}
export default Home