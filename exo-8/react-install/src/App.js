import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    const message = "Hello La piscine";
    return (
        <div>
            <Header messageProp={message}/>
            <Main />
            <Footer messageProp={message}/>
        </div>
    )
}

export default App;

