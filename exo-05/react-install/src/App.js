import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {

    /////////////////////////////////////////////////////////////////////////////////////
    // REACT EXO 3
    /////////////////////////////////////////////////////////////////////////////////////

    return(
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    )

  /////////////////////////////////////////////////////////////////////////////////////
  // REACT EXO 2
  /////////////////////////////////////////////////////////////////////////////////////

  // const isUserConnected = true
  // const user = "Steph"
  // return (
  //   <div className="App">
  //     <p>
  //       {isUserConnected ? "Bienvenue " + user : "Veuillez vous connecter S.V.P."}
  //     </p>
  //   </div>
  // )

  /////////////////////////////////////////////////////////////////////////////////////
  // REACT EXO 1
  /////////////////////////////////////////////////////////////////////////////////////

  // const presentation = {
  //   titre: "World Of Warcraft",
  //   sousTitre: "Quelques personnages...",
  //   image: "https://cdn.arkdev.fr/wp-content/uploads/2013/11/world-of-warcraft-warlords-of-draenor-banniere.jpg"
  // }

  // const persos = [
  //   {
  //     nom: "Telmanor",
  //     faction: "Alliance",
  //     race: "Humain",
  //     classe: "Mage",
  //   },
  //   {
  //     nom: "Kalenor",
  //     faction: "Alliance",
  //     race: "Elfe",
  //     classe: "Druide",
  //   },
  //   {
  //     nom: "Trollbelle",
  //     faction: "Horde",
  //     race: "Troll",
  //     classe: "Shaman",
  //   },
  // ]

  // return (
  //   <div className="App">
  //     <h1>{presentation.titre}</h1>
  //     <h2>{presentation.sousTitre}</h2>
  //     <img src={presentation.image}></img>

  //     {persos.map((el) => {
  //       return(
  //         <p>
  //           Nom : {el.nom}<br></br>
  //           Faction : {el.faction}<br></br>
  //           Race : {el.race}<br></br>
  //           classe : {el.classe}
  //         </p>
  //       )
  //     })}
  //   </div>
}

export default App;
