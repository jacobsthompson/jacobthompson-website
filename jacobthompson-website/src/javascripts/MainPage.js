import {useState} from "react";
import Galaxy from "./Galaxy";
import Stars from "./Stars";
import Header from "./Header";
import Planets from "./Planet";
import Modal from "./Modal";
import '../stylesheets/mainpage.css';

const srcs = [
    ['Daily Dominos', 'assets/planets/planet-Domino.png', 'A Web Daily Game Developed in React Javascript.', '2026', 'https://dailydominos.vercel.app/', 'external'],
    ['PASC', 'assets/planets/planet-PASC.png', 'Desc', '2024', 'https://www.youtube.com/embed/2DXrCV1i6EI', 'internal'],
    ['Sunset Media Wave', 'assets/planets/planet-SMW.png', 'Desc', '2021-', 'https://www.sunsetmediawave.org/', 'external'],
    ['Balloons and Burgers', 'assets/planets/planet-BK.png', 'A web project that links the live location of WindBorne Solution weather balloons with the geolocations of Burger Kings around the world. Programmed with Node.js, MapLibre GL, JSON, Python, and the WindBorne API.', '2025', 'https://balloons-and-burgers.vercel.app/', 'external'],
    ['', 'assets/planets/planetX.png', '', '', null, null],
    ['UC Merced', 'assets/planets/planet-UCM.png', 'My portfolio of promotional assets I made as the Team Lead and Graphic Designer for the UC Merced Marketing Communications Social Media Team. Designs include fliers, logos, thumbnails, and social media posts. Made in Adobe Illustrator.', '2023-2025', null, 'internal'],
    ['Graphic Design', 'assets/planets/planet-Ai.png', 'My portfolio of freelance Graphic Design made over the years from a wide variety of clients. Made in Adobe Illustrator and Adobe Photoshop.', '2019-', null, 'internal'],
    ['A Digital Duck', 'assets/planets/planet-Duck.png', 'A project developed during my freshman year Creative Coding class. An interactive simulator of a AI duck that eats, swims, walks, and quacks. Pick up the ducks or feed them breadcrumbs. Programmed with Processing Java and P5.JS.', '2021', "https://editor.p5js.org/jacobsthompson/full/KRplqbcFJ", 'internal'],
    ['River Cleanup', 'assets/planets/planet-River.png', 'Desc', '2022', "https://editor.p5js.org/jacobsthompson/full/eJ2FqNfXT", 'internal'],
    ['', 'assets/planets/planetX-1.png', '', '', null, null]
];

const starRandomizedValue = new Date().toString();

export default function MainPage() {
    const [toggleModal, setToggleModal] = useState(false);
    const [modalSrc, setModalSrc] = useState(null);

    const handleToggleModal = (src) => {
        setToggleModal(!toggleModal);
        setModalSrc(src);
        console.log(starRandomizedValue);
    }

    return (
        <div className="main-page">
            <Header/>
            <div className="center-content-container">
                <Galaxy/>
                <Planets srcPlanets={srcs} toggleModal={handleToggleModal}/>
            </div>
            <Modal src={modalSrc} toggleModal={handleToggleModal}/>
            <Stars count={500} randomizer={starRandomizedValue}/>
        </div>
    );
}