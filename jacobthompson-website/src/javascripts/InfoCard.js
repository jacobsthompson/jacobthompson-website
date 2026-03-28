import '../stylesheets/infocard.css';

export function MobileInfoCards({srcs, toggleModal}){

    const handleModal = (src) => {
        toggleModal(src);
    }

    return (
        <div className="mobile-info-cards-wrapper">
            {srcs.map((planet, i) => (
                <MobileInfoCard key={i} src={srcs[i]}  handleModal={handleModal}/>
            ))}
        </div>
    );
}

function MobileInfoCard({src, handleModal}){

    const srcTitle = src[0];
    const srcImage = src[1];
    const srcDesc = src[2];
    const srcYear = src[3];
    const srcLink = src[4];
    const srcLinkType = src[5];
    const srcType = src[6];

    const linkText = srcLinkType === 'external' ? "Visit Site" : "View Popup";

    const handleClickEffect = (title, link, linkType) => {
        if(linkType) {
            if(link && linkType === 'external'){
                window.open(link);
            } else if(linkType === 'internal'){
                handleModal(src);
            }
        }
    }

    if(srcTitle) {
        return (
            <div className="mobile-info-wrapper" onClick={() => handleClickEffect(srcTitle, srcLink, srcLinkType)}>
                <div className="info-card">
                    <InfoTabs type={srcType} linkType={srcLinkType}/>
                    <div className="info-header mobile">
                        <img className="info-image" src={srcImage} alt=""/>
                        <div className="info-title-header">
                            <div className="info-title">{srcTitle}</div>
                            <div className="info-year">{srcYear}</div>
                        </div>
                    </div>
                    <div className="info-desc">{srcDesc}</div>
                </div>
            </div>
        );
    }
}

export default function InfoCard({title, year, description, type, linkType}) {
    if (title) {
        return (
            <div className="info-wrapper">
                <div className="info-card">
                    <div className="info-header">
                        <div className="info-title">{title}</div>
                        <div className="info-year">{year}</div>
                    </div>
                    <div className="info-desc">{description}</div>
                </div>
                <InfoTabs type={type} linkType={linkType}/>
            </div>
        );
    }
}

function InfoTabs({type, linkType}){
    const linkText = linkType === 'external' ? "External Website" : "Internal Popup";

    return (
        <div className="info-tabs">
            <div className="info-tab">{type}</div>
            <div className="info-tab">{linkText}</div>
        </div>
    );
}