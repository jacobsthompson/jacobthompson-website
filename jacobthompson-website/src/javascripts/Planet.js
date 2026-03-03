import '../stylesheets/planet.css';
import InfoCard from "./InfoCard";
import {useState} from "react";

function Planet({planetCount, src, orbitRadius, delayIndex, size = 100, isPaused, handlePause, handleModal}){
    const [duration, setDuration] = useState(1);
    const [delay, setDelay] = useState(delayIndex * (duration/planetCount));
    const [showInfo, setShowInfo] = useState(false);
    const srcTitle = src[0];
    const srcImage = src[1];
    const srcDesc = src[2];
    const srcYear = src[3];
    const srcLink = src[4];

    setTimeout(() => {
        const newDuration = 240;
        setDuration(newDuration);
        setDelay((planetCount - delayIndex) * -(newDuration/planetCount));
    }, 1000);

    const preventDragHandler = (e) => {
        e.preventDefault();
    }

    const handleClickEffect = (title, link) => {
        if(link) {
            if(typeof link === 'string' && link.startsWith("https")){
                window.open(link);
            } else {
                handleModal(false);
            }
        }
    }

    const handleMouseEnter = () => {
        setShowInfo(true);
        handlePause(true);
    }

    const handleMouseOut = () => {
        setShowInfo(false);
        handlePause(false);
    }

    return (
        <div>
            <div className="planet-container"
                 onDragStart={preventDragHandler}
                 style={{
                     animationName: 'orbit',
                     animationDuration: `${duration}s`,
                     animationTimingFunction: 'linear',
                     animationDelay: `${delay}s`,
                     animationIterationCount: 'infinite',
                     animationPlayState: isPaused ? 'paused' : 'running'
            }}>
                <div className="center-of-gravity" style={{top: -orbitRadius, left: -size / 2}}>
                    <div className="planet-wrapper">
                        <div className="planet"
                             onClick={() => handleClickEffect(srcTitle, srcLink)}
                             onMouseEnter={() => handleMouseEnter()}
                             onMouseOut={() => handleMouseOut()}
                             style={{
                                 animationName: 'orbit-counter',
                                 animationDuration: `${duration}s`,
                                 animationTimingFunction: 'linear',
                                 animationDelay: `${delay}s`,
                                 animationIterationCount: 'infinite',
                                 animationPlayState: isPaused ? 'paused' : 'running'
                            }}>
                            <img className="planet-image" src={srcImage} alt={''}/>
                        </div>
                    </div>
                </div>
            </div>
            {showInfo &&(
                <div className="planet-card-wrapper">
                    <InfoCard title={srcTitle} year={srcYear} description={srcDesc}/>
                </div>
            )}
        </div>
    );
}

function getSrcs(){
    return ([
        ['Daily Dominos', 'assets/planets/planet-Domino.png', 'A Web Daily Game Developed in React Javascript.', '2026', 'https://dailydominos.vercel.app/'],
        ['UC Merced', 'assets/planets/planet-UCM.png', 'My portfolio of promotional assets I made as the Team Lead and Graphic Designer for the UC Merced Marketing Communications Social Media Team. Designs include fliers, logos, thumbnails, and social media posts. Made in Adobe Illustrator.', '2023-2025', null],
        ['Graphic Design', 'assets/planets/planet-Ai.png', 'My portfolio of freelance Graphic Design made over the years from a wide variety of clients. Made in Adobe Illustrator and Adobe Photoshop.', '2019-', null],
        ['', 'assets/planets/planetX.png', '', null],
        ['Sunset Media Wave', 'assets/planets/planet-SMW.png', 'Desc', '2021-', 'https://www.sunsetmediawave.org/'],
        ['A Digital Duck', 'assets/planets/planet-Duck.png', 'A project developed during my freshman year Creative Coding class. An interactive simulator of a AI duck that eats, swims, walks, and quacks. Pick up the ducks or feed them breadcrumbs. Programmed with Processing Java and P5.JS.', '2021', <iframe src="https://editor.p5js.org/jacobsthompson/full/KRplqbcFJ"></iframe>],
        ['Balloons and Burgers', 'assets/planets/planet-BK.png', 'A web project that links the live location of WindBorne Solution weather balloons with the geolocations of Burger Kings around the world. Programmed with Node.js, MapLibre GL, JSON, Python, and the WindBorne API.', '2025', 'https://balloons-and-burgers.vercel.app/'],
        ['', 'assets/planets/planetX-1.png', '', null],
    ]);
}

export default function Planets({toggleModal}) {
    const srcPlanets = getSrcs();
    const [paused, setPaused] = useState(false);

    const handlePause = (isPaused) => {
        setPaused(isPaused);
    }

    const handleModal = (src) => {
        toggleModal(src);
    }

    return (
        <div className="projects-container">
            <div className="planets-wrapper">
                {srcPlanets.map((planet, i) => (
                    <Planet key={i} planetCount={srcPlanets.length} orbitRadius={500} delayIndex={i} src={srcPlanets[i]} isPaused={paused} handlePause={handlePause} handleModal={handleModal}/>
                ))}
            </div>
        </div>
    );
}