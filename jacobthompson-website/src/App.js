import './App.css';
import Galaxy from "./javascripts/Galaxy";
import Stars from "./javascripts/Stars";
import Header from "./javascripts/Header";
import SidePanel from "./javascripts/SidePanel";
import Planets from "./javascripts/Planet";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="center-content-container">
                <Galaxy/>
                <Planets/>
            </div>
            <Stars count={500}/>
        </div>
    );
}

export default App;
