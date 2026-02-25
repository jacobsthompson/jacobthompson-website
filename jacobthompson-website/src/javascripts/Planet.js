import '../stylesheets/planet.css';
import {useState} from "react";

function getSrcs(){
    return ([
        ['Daily Dominos', 'assets/planets/planet-Domino.png', 'A Web Daily Game Developed in React Javascript. Developed 2026.', 'https://dailydominos.vercel.app/'],
        ['UC Merced', 'assets/planets/planet-UCM.png', 'Desc', null],
        ['Graphic Design', 'assets/planets/planet-Ai.png', 'Desc', null],
        ['', 'assets/planets/planetX.png', '', null],
        ['Sunset Media Wave', 'assets/planets/planet-SMW.png', 'Desc', 'https://www.sunsetmediawave.org/'],
        ['A Digital Duck', 'assets/planets/planet-Duck.png', 'Desc', null],
        ['Balloons and Burgers', 'assets/planets/planet-BK.png', 'Desc', 'https://balloons-and-burgers.vercel.app/'],
        ['', 'assets/planets/planetX-1.png', '', null],
    ]);
}

function Planet({planetCount, src, orbitRadius, delayIndex, size = 100}){
    const [duration, setDuration] = useState(1);
    const [delay, setDelay] = useState(delayIndex * (duration/planetCount));
    const srcTitle = src[0];
    const srcImage = src[1];
    const srcDesc = src[2];
    const srcLink = src[3];

    setTimeout(() => {
        const newDuration = 240;
        setDuration(newDuration);
        setDelay((planetCount - delayIndex) * -(newDuration/planetCount));
    }, 1000);

    const preventDragHandler = (e) => {
        e.preventDefault();
    }

    const handleClickEffect = (link) => {
        if(link) {
            window.open(link);
        }
    }

    return (
        <div className="planet-container" onDragStart={preventDragHandler} style={{animation: `orbit ${duration}s linear ${delay}s infinite`}}>
            <div className="center-of-gravity" style={{top: -orbitRadius, left: -size/2}}>
                <div className="planet-wrapper" onClick={() => handleClickEffect(srcLink)}>
                    <div className="planet" style={{ animation: `orbit-counter ${duration}s linear ${delay}s infinite` }}>
                        <img className="planet-image" src={srcImage} alt={''}/>
                        <div className="planet-label">{srcTitle}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Planets() {
    const srcPlanets = getSrcs();
    console.log(srcPlanets);
    return(
        <div className="planets-container">
            {srcPlanets.map((planet, i) => (
                <Planet key={i} planetCount={srcPlanets.length} orbitRadius={500} delayIndex={i} src={srcPlanets[i]}/>
            ))}
        </div>
    );
}