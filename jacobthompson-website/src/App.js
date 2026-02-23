import './App.css';
import Galaxy from "./javascripts/Galaxy";
import Stars from "./javascripts/Stars";
import Header from "./javascripts/Header";
import SidePanel from "./javascripts/SidePanel";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="center-content-container">
                <SidePanel side={'left'} text={'hello'}/>
                <Galaxy/>
                <SidePanel side={'right'} text={'welcome'}/>
            </div>
            <Stars count={150}/>
        </div>
    );
}

export default App;
