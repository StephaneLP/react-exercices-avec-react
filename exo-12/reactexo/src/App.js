
import Header from "./composants/Header"
import Footer from "./composants/Footer"
import Profil from "./composants/Profil"
import "./composants/style.css"

function App() {
    const user = {
        name: "John",
        surname: "Doe",
        age: 32,
        city: "Paris",
        isLogged: true,
    }
    
    return (
        <div>
            <Header user={user}/>
            <Profil user={user}/>
            <Footer />
        </div>
    )
}

export default App;
