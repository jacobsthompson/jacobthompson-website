import {useState} from "react";
import './App.css';
import Galaxy from "./javascripts/Galaxy";
import Stars from "./javascripts/Stars";
import Header from "./javascripts/Header";
import Planets from "./javascripts/Planet";
import Modal from "./javascripts/Modal";

export default function App() {
    const [toggleModal, setToggleModal] = useState(true);
    const [modalSrc, setModalSrc] = useState(null);

    const handleToggleModal = (src) => {
        setToggleModal(!toggleModal);
        setModalSrc(src);
    }

    return (
        <div className="App">
            <Header/>
            <div className="center-content-container">
                <Galaxy/>
                <Planets toggleModal={handleToggleModal}/>
            </div>
            <div className="m">
                {toggleModal && (
                    <Modal src={modalSrc} toggleModal={handleToggleModal}/>
                )}
            </div>
            <Stars count={500}/>
        </div>
    );
}