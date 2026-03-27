import {Image} from "./Showcase";
import {Headshot} from "./Images";
import "../stylesheets/aboutme.css"
import {Links} from "./Header";

export function AboutMeModal(){
    return(
        <div className="about-me-container">
            <div className="about-container">
                <div className="about-wrapper">
                    <div className="about-header">
                        <div className="about-title">Jacob Thompson</div>
                        <div className="about-subtitle">He/Him</div>
                    </div>
                    <div className="about-text">
                        <li>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                    </div>
                </div>
                <div className="photo-wrapper">
                    <Image srcImage={Headshot} type={"about-me"}/>
                    <Links/>
                </div>
            </div>
            <Skills/>
        </div>
    );
}

function Skills(){
    return (
        <div className="skills-container">
            <div className="about-title" style={{textAlign: "center"}}>Skills</div>
            <div className="skills-grid-wrapper">
                <div className="skills-grid">
                    {skillsList.map((skill, i) => (
                        <Skill key={i} title={skill[0]} image={skill[1]} link={skill[2]}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Skill({title, image, link}) {

    const handleClick = (link) => {
        if (link) {
            window.open(link);
        }
    }

    return (
        <div className="skill" onClick={() => handleClick(link)}>
            <img className="skill-icon" src={image} alt=""/>
            <div className="skill-label">{title}</div>
        </div>
    );
}

const skillsList = [
    ["React", 'assets/planets/planetX.png', "https://react.dev/"],
    ["Javascript", 'assets/planets/planetX.png', "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
    ["Python", 'assets/planets/planetX.png', "https://www.python.org/doc/"],
    ["HTML", 'assets/planets/planetX.png', "https://html.spec.whatwg.org/multipage/"],
    ["CSS", 'assets/planets/planetX.png', "https://developer.mozilla.org/en-US/docs/Web/CSS"],
    ["Figma", 'assets/planets/planetX.png', "https://www.figma.com/"],
    ["Adobe", 'assets/planets/planetX.png', "https://www.adobe.com/creativecloud/design.html"],
    ["WordPress", 'assets/planets/planetX.png', "https://wordpress.com/"],
    ["Flask", 'assets/planets/planetX.png', "https://flask.palletsprojects.com/en/stable/"],
    ["PostgreSQL", 'assets/planets/planetX.png', "https://www.postgresql.org/"],
]