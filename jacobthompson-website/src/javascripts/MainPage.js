import {useState} from "react";
import Galaxy from "./Galaxy";
import Stars from "./Stars";
import Header from "./Header";
import Planets from "./Planet";
import Modal from "./Modal";
import '../stylesheets/mainpage.css';

export default function MainPage() {
    const [toggleModal, setToggleModal] = useState(false);
    const [modalSrc, setModalSrc] = useState(null);

    const handleToggleModal = (src) => {
        setToggleModal(!toggleModal);
        setModalSrc(src);
    }

    return (
        <div className="main-page">
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