import {Image} from "./Showcase";
import {Headshot} from "./Images";
import "../stylesheets/aboutme.css"
import "../stylesheets/infocard.css"
import {Links} from "./Header";

export function AboutMeModal({turnOffClick = false}) {
    return (
        <div className="about-me-container">
            <div className="profile-container">
                <div className="photo-container">
                    <div className="photo-wrapper">
                        <Image srcImage={Headshot} type={"about-me"} turnOffClick={turnOffClick}/>
                        <Links type={"about-me"}/>
                    </div>
                </div>
                <div className="about-wrapper">
                    <div className="about-header">
                        <div className="about-title">Jacob Thompson</div>
                        <div className="about-subtitle">He/Him</div>
                    </div>
                    <div className="about-text">
                        I am a Web Developer and Designer specializing in React Javascript.
                        I live in San Francisco, and graduated from UC Merced with a degree in Computer Science and
                        Engineering.
                    </div>
                    <div className="about-text">
                        I was the Team Lead of the UC Merced Marketing team, the Media Cats, for three years.
                        I was the Project Manager for an internship with the U.S. Department of State Diplomacy Lab,
                        and our app won 2nd place at Innovate 2 Grow.
                        I have been the Web Designer and Design Consultant for the non-profit Sunset Media Wave for
                        5 years.
                    </div>
                    <div className="about-text">
                        Since graduating college, I have been honing my development skills and working on personal
                        projects.
                        I am open to work in Web Development, Frontend Engineering, and UI/UX Design.
                    </div>
                    <div className="about-text">
                        Thanks for viewing my website, and please take a look at my projects!
                    </div>
                </div>
            </div>
            <Skills/>
        </div>
    );
}

function Skills() {
    return (
        <div className="skills-wrapper">
            <div className="about-title skills" style={{textAlign: "center"}}>Skills</div>
            <div className="skills-grid-wrapper">
                <div className="skills-grid">
                    {skillsList.slice(0, skillsList.length / 2).map((skill, i) => (
                        <Skill key={i} title={skill[0]} image={skill[1]} link={skill[2]}/>
                    ))}
                </div>
                <div className="skills-grid">
                    {skillsList.slice(skillsList.length / 2, skillsList.length).map((skill, i) => (
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
            if(window.innerWidth <= 500){
                window.open(link, "_self");
            } else {
                window.open(link);
            }
        }
    }

    return (
        <div className="skill" onClick={() => handleClick(link)}>
            <div className="skill-icon-wrapper">
                <img className="skill-icon" src={image} alt=""/>
                <img className="blank-planet" src={blankPlanet} alt=""/>
            </div>
            <div className="skill-label">{title}</div>
        </div>
    );
}

const blankPlanet = 'assets/planets/planet-Blank.png';

const skillsList = [
    ["React", 'assets/icons/react.svg', "https://react.dev/"],
    ["Javascript", 'assets/icons/javascript.svg', "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
    ["HTML", 'assets/icons/html.svg', "https://html.spec.whatwg.org/multipage/"],
    ["CSS", 'assets/icons/css.svg', "https://html.spec.whatwg.org/multipage/"],
    ["Python", 'assets/icons/python.svg', "https://www.python.org/doc/"],
    ["Figma", 'assets/icons/figma.svg', "https://www.figma.com/"],
    ["Adobe", 'assets/icons/adobe.svg', "https://www.adobe.com/creativecloud/design.html"],
    ["WordPress", 'assets/icons/wordpress.svg', "https://wordpress.com/"],
    ["Flask", 'assets/icons/flask.svg', "https://flask.palletsprojects.com/en/stable/"],
    ["PostgreSQL", 'assets/icons/postgresql.svg', "https://www.postgresql.org/"],
]