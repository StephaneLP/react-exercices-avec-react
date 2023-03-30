import './Home.css'
import Button from './Button'
import React, { useEffect, useState } from "react"

const colors = ["darkgrey","orange","DarkGoldenRod","darkgreen","yellow","darkblue","darkred"]

const Home = () => {


    const[count,setCount] = useState(0)
    let[index,setIndex] = useState(0)

    // const afficheBgColor = () => {
    //     const articles = document.querySelectorAll(".articles")
    //     console.log(articles.length)
    //     for(let i=0; i<articles.length; i++) {
    //         articles[i].style.backgroundColor = colors[index]
    //         console.log(index)
    //     }
    // }    
    console.log("Ok")

    const changeColor = () => {
        if(index == colors.length-1) index = -1
        setIndex(index + 1)
        setCount(count + 1)

        // afficheBgColor()
    }

    useEffect(() => {
        const articles = document.querySelectorAll(".article")
        console.log(articles.length)
        for(let i=0; i<articles.length; i++) {
            articles[i].style.backgroundColor = colors[index]
        }
    },[])

    console.log('render jsx')
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
                    {/* <div className="row">
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[index]}}></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[index]}}></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article" style={{backgroundColor : colors[index]}}></div></div>
                        <div className='col-12 text-center'><Button colors={colors} index={index} changeColor={changeColor} count={count}/></div>
                    </div> */}

                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                        <div className='col-12 text-center'><Button colors={colors} index={index} changeColor={changeColor} count={count}/></div>
                    </div>
                </section>
            </main>
            <footer>
            </footer>
        </>
    )
}
export default Home