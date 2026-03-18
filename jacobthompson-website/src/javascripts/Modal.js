import '../stylesheets/modal.css';
import {useState} from "react";
import {PASCImage, DuckImage, Fliers, Thumbnails, SocialMedia} from "./images";

function preloadImages(srcs) {
  return Promise.all(srcs.map(src => new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = resolve;
  })));
}

function ModalHeader({title, image, toggleModal, subPage = null, subPageTitle, toggleSubpage}){
    const currTitle = subPage ? subPageTitle : title;

    return(
        <div className="modal-header">
            <div className="modal-header-info">
                <img className="modal-header-image" src={image} alt={''}/>
                <div className="modal-header-text title">{currTitle}</div>
            </div>
            <div className="modal-header-buttons">
                {subPage && (
                    <div className="modal-header-button back" onClick={toggleSubpage}>
                        <div className="modal-header-text back">←</div>
                    </div>
                )}
                <div className="modal-header-button" onClick={toggleModal}>
                    <div className="modal-header-text">×</div>
                </div>
            </div>
        </div>
    );
}

function ModalImage({srcImage, type = ""}) {
    const [showingFullScreen, setShowingFullscreen] = useState(false);

    const handleFullScreen = () => {
        setShowingFullscreen(!showingFullScreen);
    }

    return (
        <>
            {showingFullScreen && (
                <div className="modal-background fi">
                    <div className="clickable-background fi" onClick={() => handleFullScreen()}/>
                    <img className="full-image" src={srcImage} onClick={() => handleFullScreen()} alt={""}/>
                </div>
            )}
            <img className={`modal-image ${type}`} onClick={() => handleFullScreen()} src={srcImage} alt={""}/>
        </>
    );
}

function ModalShowcase({images, toggleShowcase}){
    return(
        <div className="showcase-wrapper">
            {images.map((image, i) => renderShowcaseImage(image, i))}
        </div>
    );
}

const renderShowcaseImage = (image, i) => {
    if (Array.isArray(image)) {
        return image.map((subImage, j) => (
            <ModalImage key={`${i}-${j}`} srcImage={subImage} type={'showcase'}/>
        ))
    }
    return <ModalImage key={i} srcImage={image} type={'showcase'}/>
}

const renderCarouselImage = (image, i) => {
    if (Array.isArray(image)) {
        return <ModalImage key={i} srcImage={image[0]} type={'carousel'}/>
    }
    return <ModalImage key={i} srcImage={image} type={'carousel'}/>
}

function Carousel({images, title, speed, openShowcase}) {
    return (
        <div className="carousel-wrapper" onClick={() => openShowcase(images, title)}>
            <div className="carousel-overlay">
                <div className="modal-title">{title}</div>
            </div>
            <div className="carousel-track" style={{animation: `carousel-scroll ${speed}s linear infinite`}}>
                {images.map((image, i) => renderCarouselImage(image, i))}
                {images.map((image, i) => renderCarouselImage(image, i))}
            </div>
        </div>
    )
}

function ModalContent({src, toggleModal}){
    const srcTitle = src[0];
    const srcImage = src[1];
    const srcDesc = src[2];
    const srcYear = src[3];
    const srcLink = src[4];

    const [openShowcase, setOpenShowcase] = useState(false);
    const [showcaseImages, setShowcaseImages] = useState(null);
    const [showcaseTitle, setShowcaseTitle] = useState("");

    switch (srcTitle){
        case 'A Digital Duck':
            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal}/>
                    <div className="modal">
                        <iframe className="digital-duck" title="digital-duck" src={srcLink}/>
                        <ModalImage srcImage={DuckImage} type={'subImage'}/>
                    </div>
                </>
            );
        case 'UC Merced':
            const handleOpenShowcase = (images, title) => {
                setOpenShowcase(!openShowcase);
                setShowcaseImages(images);
                setShowcaseTitle(title);
            }

            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal} subPage={openShowcase} subPageTitle={showcaseTitle} toggleSubpage={handleOpenShowcase}/>
                    <div className="modal">
                        {!openShowcase && (
                            <>
                                <Carousel images={Fliers} speed={60} title={"Fliers"} openShowcase={handleOpenShowcase}/>
                                <Carousel images={Thumbnails} speed={60} title={"Thumbnails"} openShowcase={handleOpenShowcase}/>
                                <Carousel images={Thumbnails} speed={60} title={"Logos"} openShowcase={handleOpenShowcase}/>
                                <Carousel images={SocialMedia} speed={60} title={"Social Media"} openShowcase={handleOpenShowcase}/>
                            </>
                        )}
                        {openShowcase && (
                            <ModalShowcase images={showcaseImages} toggleShowcase={handleOpenShowcase}/>
                        )}
                    </div>
                </>
            );
        case 'Graphic Design':
            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal}/>
                    <div className="modal">
                    </div>
                </>
            );
        case 'PASC':
            return (
                <>
                    <ModalHeader title={"Progress Assessment Scheduling Calendar"} image={srcImage} toggleModal={toggleModal}/>
                    <div className="modal">
                        <ModalImage srcImage={PASCImage}/>
                        <iframe className="youtube-video" title="youtube-video" src={srcLink}/>
                    </div>
                </>
            );
        case 'River Cleanup':
            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal}/>
                    <div className="modal">
                        <iframe className="river-cleanup" title="river-cleanup" src={srcLink}/>
                    </div>
                </>
            );
    }
}

export default function Modal({src, toggleModal, toggled}) {
    if (toggled) return (
        <div className="modal-background">
            <div className="clickable-background" onClick={toggleModal}/>
            <div className="modal-wrapper">
                <ModalContent src={src} toggleModal={toggleModal}/>
            </div>
        </div>
    );
}