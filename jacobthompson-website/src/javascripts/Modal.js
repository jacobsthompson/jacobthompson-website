import '../stylesheets/modal.css';

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

export default function Modal({src, toggleModal}){
    switch (src){
        case 'A Digital Duck':
            return (
                <div className="modal-background" onClick={toggleModal}>
                    <div className="modal-wrapper">
                        <div className="modal">
                            <iframe className="digital-duck" title="digital-duck" src="https://editor.p5js.org/jacobsthompson/full/KRplqbcFJ"/>
                        </div>
                    </div>
                </div>
            );
        case 'UC Merced':
            break;
        case 'Graphic Design':
            break;
    }
}