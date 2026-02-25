import '../stylesheets/galaxy.css';
import {useEffect} from "react";

function preloadImages(srcs) {
  return Promise.all(srcs.map(src => new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = resolve;
  })));
}

export default function Galaxy(){
    const galaxyFrames = Array.from({ length: 90 }, (_, i) => `assets/galaxy-frames/galaxy-${i}.png`);
    const duration = 10;


    useEffect(() => {
        const init = async () => {
            await preloadImages(galaxyFrames);
        }
        init();
    }, []);

    return (
        <div className="galaxy-container">
            <div className="galaxies">
                {galaxyFrames.map((frame, i) => (
                    <img className="galaxy" key={i} src={frame} alt={''} style={{animationDelay: `-${(i / galaxyFrames.length) * duration}s`}}/>
                ))}
            </div>
        </div>

    );
}