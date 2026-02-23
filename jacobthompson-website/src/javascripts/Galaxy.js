import '../stylesheets/galaxy.css';

export default function Galaxy(){
    const galaxyFrames = Array.from({ length: 90 }, (_, i) => `assets/galaxy-frames/galaxy-${i}.png`);
    const duration = 10;

    return (
        <div className="galaxy-container">
            <div className="galaxies">
                {galaxyFrames.map((frame, i) => (
                    <img className="galaxy" key={i} src={frame} alt={i} style={{animationDelay: `-${(i / galaxyFrames.length) * duration}s`}}/>
                ))}
            </div>
        </div>

    );
}