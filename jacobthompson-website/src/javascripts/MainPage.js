import {useState, useEffect} from "react";
import Galaxy from "./Galaxy";
import Stars from "./Stars";
import Header from "./Header";
import Planets from "./Planet";
import Modal from "./Modal";
import '../stylesheets/mainpage.css';

const srcs = [
    ['Daily Dominos', 'assets/planets/planet-Domino.png', 'A mexican train dominos inspired Web Daily Game. Connect all 16 dominos as quickly as possible. Intuitive user interactions, satisfying gameplay, clean UI/UX, and a comprehensive placement validation algorithm make this my best work. Programmed in React and Javascript.', '2026', 'https://dailydominos.com/', 'external'],
    ['Balloons and Burgers', 'assets/planets/planet-BK.png', 'A web project that links the live location of WindBorne Solution weather balloons with the geolocations of Burger Kings around the world. Programmed in Node.js, MapLibre GL, JSON, Python, and the WindBorne API.', '2025', 'https://balloons-and-burgers.vercel.app/', 'external'],
    ['Sunset Media Wave', 'assets/planets/planet-SMW.png', 'Desc', '2021-', 'https://www.sunsetmediawave.org/', 'external'],
    ['PASC', 'assets/planets/planet-PASC.png', 'The Progress Assessment Scheduling Calendar is a proprietary application developed during my Capstone Internship, with the U.S Department of State Diplomacy Lab, as Project Manager, Frontend Developer, and UI/UX Designer. Programmed in React.JS, Flask Python, and PostgreSQL.', '2024', 'https://www.youtube.com/embed/2DXrCV1i6EI', 'internal'],
    [null, 'assets/planets/planetX.png', null, null, null, null],
    ['UC Merced', 'assets/planets/planet-UCM.png', 'My portfolio of promotional assets I made as the Team Lead and Graphic Designer for the UC Merced Marketing Communications Social Media Team. Designs include fliers, logos, thumbnails, and social media posts. Made in Adobe Illustrator.', '2023-2025', null, 'internal'],
    ['A Digital Duck', 'assets/planets/planet-Duck.png', 'My final project for my freshman year Creative Coding class. An interactive simulator of a AI duck that eats, swims, walks, and quacks. Pick up the ducks or feed them breadcrumbs. Programmed in Processing Java and P5.JS. Featured at the 2021 GAMWS Winter Showcase.', '2021', "https://editor.p5js.org/jacobsthompson/full/KRplqbcFJ", 'internal'],
    ['River Cleanup', 'assets/planets/planet-River.png', 'My final project for my sophomore year Biological Conservation class. A high-score game about the real life goal of filtering trash, oil, and diseases out of water while leaving fish and plant life alone. Programmed in Processing Java and P5.JS.', '2022', "https://editor.p5js.org/jacobsthompson/full/eJ2FqNfXT", 'internal'],
    ['Graphic Design', 'assets/planets/planet-Ai.png', 'My portfolio of freelance Graphic Design work made over the years for a wide variety of clients, including: Sunset Media Wave, Uncivilized, Swell Foop, Ellis Tom, etc. Made in Adobe Illustrator and Adobe Photoshop.', '2019-', null, 'internal'],
    [null, 'assets/planets/planetX-1.png', null, null, null, null]
];

const starRandomizedValue = new Date().toString();

export default function MainPage() {
    const [toggleModal, setToggleModal] = useState(false);
    const [modalSrc, setModalSrc] = useState(null);

    const calculatePageScale = (maxWidth = 1512, maxHeight = 860, minWidth = 320, minHeight = 320, minScale = 0.325) => {
        const [scale, setScale] = useState(1);

        useEffect(() => {
            const calculateScale = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;

                const progressWidth = (width - minWidth) / (maxWidth - minWidth);
                const progressHeight = (height - minHeight) / (maxHeight - minHeight);
                const rawScaleWidth = minScale + (1 - minScale) * progressWidth;
                const rawScaleHeight = minScale + (1 - minScale) * progressHeight;
                setScale(Math.min(1, Math.max(minScale, Math.min(rawScaleWidth, rawScaleHeight))));
            };

            calculateScale(); // run on mount
            window.addEventListener('resize', calculateScale);
            return () => window.removeEventListener('resize', calculateScale);
        }, [maxWidth, minWidth, minScale]);

        return scale;
    }

    const scale = calculatePageScale();

    const handleToggleModal = (src) => {
        setToggleModal(!toggleModal);
        setModalSrc(src);
    }

    return (
        <div className="main-page">
            <Header title={"jacob thompson"} subtitle={"web developer"}/>
            <div className="center-content-container">
                <Galaxy scale={scale}/>
                <Planets srcPlanets={srcs} toggleModal={handleToggleModal} isPaused={toggleModal} scale={scale}/>
            </div>
            <Modal src={modalSrc} toggleModal={handleToggleModal} toggled={toggleModal}/>
            <Stars count={500} randomizer={starRandomizedValue}/>
        </div>
    );
}