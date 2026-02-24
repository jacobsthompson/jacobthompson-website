import '../stylesheets/planet.css';

function Planet({planetCount, src, orbitRadius, duration = 240, delayIndex, size = 100}){
    const delay = delayIndex * -(duration/planetCount)

    return (
        <div className="planet-container" style={{animation: `orbit ${duration}s linear ${delay}s infinite`}}>
            <div className="center-of-gravity" style={{top: -orbitRadius, left: -size/2}}>
                <div className="planet">
                    <img className="planet-image" src={src} alt={'O'} style={{
                    animation: `orbit-counter ${duration}s linear ${delay}s infinite`
                }}/>
                </div>
            </div>
        </div>
    )
}

export default function Planets() {
    const srcPlanets = Array.from({length: 8}, (_, i) => `assets/planets/planet-${i}.png`);
    return(
        <div className="planets-container">
            {srcPlanets.map((planet, i) => (
                <Planet key={i} planetCount={srcPlanets.length} orbitRadius={500} delayIndex={i} src={srcPlanets[i]}/>
            ))}
        </div>
    );
}