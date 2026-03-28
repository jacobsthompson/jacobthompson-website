import '../stylesheets/header.css'

export function Links({type = null}){
    const links = ['https://www.linkedin.com/in/jacob-thompson-346b422ab/', 'https://github.com/jacobsthompson']

    const handleClick = (link) => {
        if(link) {
            window.open(link);
        }
    }

    const handleMail = () => {
        window.location.href = "mailto:jacob.s.thompson@icloud.com?subject=I Saw Your Website";
    }

    return (
        <div className="icons-wrapper">
            <div className={`icon-wrapper ${type}`}>
                <img className="icon" src={'/assets/icons/linkedin.png'} onClick={() => handleClick(links[0])} alt=""/>
                <div className={`icon-label ${type}`}>LinkedIn</div>
            </div>

            <div className={`icon-wrapper ${type}`}>
                <img className="icon" src={'/assets/icons/mail.svg'} onClick={handleMail} alt=""/>
                <div className={`icon-label ${type}`}>Email</div>
            </div>

            <div className={`icon-wrapper ${type}`}>
                <img className="icon" src={'/assets/icons/github.svg'} onClick={() => handleClick(links[1])} alt=""/>
                <div className={`icon-label ${type}`}>GitHub</div>
            </div>
        </div>
    );
}

export default function Header({title, subtitle}) {


    return (
        <div className="header-container">
            <div className="header">
                <div className="section center">
                    <div className="header-text title">{title}</div>
                    <div className="header-subtext">{subtitle}</div>
                </div>
            </div>
            <Links/>
        </div>
    );
}