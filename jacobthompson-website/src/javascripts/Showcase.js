import {useState} from "react";
import "../stylesheets/showcase.css"

function preloadImages(srcs) {
  return Promise.all(srcs.map(src => new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = resolve;
  })));
}

export function Image({srcImage, type = "", turnOffClick = false}) {
    const [showingFullScreen, setShowingFullscreen] = useState(false);

    const handleFullScreen = () => {
        if(!turnOffClick){
            setShowingFullscreen(!showingFullScreen);
        }
    }

    return (
        <>
            {showingFullScreen && (
                <div className="modal-background fi">
                    <div className="clickable-background fi" onClick={() => handleFullScreen()}/>
                    <img className="full-image" src={srcImage} onClick={() => handleFullScreen()} alt={""}/>
                </div>
            )}
            <img className={`modal-image ${turnOffClick} ${type}`} onClick={() => handleFullScreen()} src={srcImage} alt={""}/>
        </>
    );
}

export function Showcase({headerImage = null, images, footerImage = null}){
    const showcaseSliceStart = headerImage ? 1 : 0;
    const showcaseSliceEnd = footerImage ? images.length - 1 : images.length;

    return (
        <div className="showcase-header">
            {headerImage && (
                <Image key={-1} srcImage={headerImage} type={'showcase'}/>
            )}
            <div className="showcase-wrapper">
                {images.slice(showcaseSliceStart, showcaseSliceEnd).map((image, i) => renderShowcaseImage(image, i))}
            </div>
            {footerImage && (
                <Image key={100} srcImage={footerImage} type={'showcase'}/>
            )}
        </div>
    );
}

export function Carousel({images, title, speed, openShowcase}) {
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

const renderShowcaseImage = (image, i) => {
    if (Array.isArray(image)) {
        return image.map((subImage, j) => (
            <Image key={`${i}-${j}`} srcImage={subImage} type={'showcase'}/>
        ))
    }
    return <Image key={i} srcImage={image} type={'showcase'}/>
}

const renderCarouselImage = (image, i) => {
    if (Array.isArray(image)) {
        return <Image key={i} srcImage={image[0]} type={'carousel'}/>
    }
    return <Image key={i} srcImage={image} type={'carousel'}/>
}