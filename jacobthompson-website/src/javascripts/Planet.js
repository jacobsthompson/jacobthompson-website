import '../stylesheets/planet.css';
import InfoCard from "./InfoCard";
import {useState} from "react";

function Planet({planetCount, src, orbitRadius, delayIndex, size = 100, isPaused, handlePause, handleModal}){
    const [duration, setDuration] = useState(1);
    const [delay, setDelay] = useState(delayIndex * (duration/planetCount));
    const [showInfo, setShowInfo] = useState(false);

    const [interactable, setInteractable] = useState(false);

    const srcTitle = src[0];
    const srcImage = src[1];
    const srcDesc = src[2];
    const srcYear = src[3];
    const srcLink = src[4];
    const srcLinkType = src[5];
    const srcType = src[6];

    setTimeout(() => {
        const newDuration = 240;
        setDuration(newDuration);
        setDelay((planetCount - delayIndex) * -(newDuration/planetCount));
        setInteractable(true);
    }, 1000);

    const preventDragHandler = (e) => {
        e.preventDefault();
    }

    const handleClickEffect = (title, link, linkType) => {
        if(linkType && interactable) {
            if(link && linkType === 'external'){
                window.open(link);
            } else if(linkType === 'internal'){
                handleModal(src);
            }
        }
    }

    const handleMouseEnter = () => {
        if(interactable){
            setShowInfo(true);
            handlePause(true);
        }
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
                             onClick={() => handleClickEffect(srcTitle, srcLink, srcLinkType)}
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
                            <img className={`planet-image ${interactable}`} src={srcImage} style={{boxShadow: srcTitle === 'Daily Dominos' ? '0 0 1rem black inset, 0 0 1.5rem black' : 'none', borderRadius: '50%'}} alt={''}/>
                        </div>
                    </div>
                </div>
            </div>
            {showInfo &&(
                <div className="planet-card-wrapper">
                    <InfoCard title={srcTitle} year={srcYear} description={srcDesc} type={srcType} linkType={srcLinkType}/>
                </div>
            )}
        </div>
    );
}

export default function Planets({srcPlanets, toggleModal, isPaused, scale}) {
    const [paused, setPaused] = useState(false);

    const handlePause = (isPaused) => {
        setPaused(isPaused);
    }

    const handleModal = (src) => {
        toggleModal(src);
    }

    return (
        <div className="projects-container" style={{scale: scale}}>
            <div className="planets-wrapper">
                {srcPlanets.map((planet, i) => (
                    <Planet key={i} planetCount={srcPlanets.length} orbitRadius={500} delayIndex={i} src={srcPlanets[i]} isPaused={isPaused ? isPaused : paused} handlePause={handlePause} handleModal={handleModal}/>
                ))}
            </div>
        </div>
    );
}