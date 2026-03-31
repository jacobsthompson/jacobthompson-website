import '../stylesheets/modal.css';
import {useEffect, useState} from "react";
import {Image, Showcase, Carousel} from "./Showcase";
import {PASCImage, DuckImage, Fliers, Thumbnails, Logos, SocialMedia, ThumbnailShowcase, SunsetMediaWave, StoryWorks, EllisTom, MoreClients, Headshot } from "./Images";
import {AboutMeModal} from "./AboutMe";

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

function useResize(id, calculations) {
    const [size, setSize] = useState({width: 0, height: 0});

    useEffect(() => {
        const element = document.getElementById(id);
        if(!element) return;

        const observer = new ResizeObserver(() => {
            const {width, height} = element.getBoundingClientRect();
            setSize(calculations(width, height));
        });

        observer.observe(element);
        return () => observer.disconnect();
    }, [id]);

    return size;
}

function ModalContent({src, toggleModal}) {
    const srcTitle = src[0];
    const srcImage = src[1];
    const srcDesc = src[2];
    const srcYear = src[3];
    const srcLink = src[4];

    const resizeDuck = useResize("duck", (width, height) => {
        if (width > height) return {width: height - 40, height: ((height - 40) / 2) + 42};
        else return {width: width - 40, height: ((width - 40) / 2) + 42};
    });

    const resizeRiver = useResize("river", (width, height) => {
        if(width < height) return {width: width - 40 - 42, height: width - 40};
        else return {width: height - 40 - 46, height: height};
    });

    const resizeVideo = useResize("youtube", (width, height) => {
        return {width: width - 40, height: ((width - 40) / 1.75)};
    });

    const [openShowcase, setOpenShowcase] = useState(false);
    const [showcaseImages, setShowcaseImages] = useState(null);
    const [showcaseTitle, setShowcaseTitle] = useState("");
    const [showcaseHeader, setShowcaseHeader] = useState(null);
    const [showcaseFooter, setShowcaseFooter] = useState(null);

    const handleOpenShowcase = (images, title) => {
        setOpenShowcase(!openShowcase);
        setShowcaseImages(images);
        if(title === 'Thumbnails') setShowcaseImages(ThumbnailShowcase);
        if(title === 'Ellis Tom' || title === 'More Clients' || title === 'Sunset Media Wave'){
            if(title === 'More Clients'){
                setShowcaseFooter(images[images.length-1]);
            }
            setShowcaseHeader(images[0]);
        } else {
            setShowcaseHeader(null);
            setShowcaseFooter(null);
        }
        setShowcaseTitle(title);
    }

    switch (srcTitle){
        case 'About Me':
            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal}/>
                    <div className="modal about-me" id={"about-me"}>
                        <AboutMeModal/>
                    </div>
                </>
            );
        case 'A Digital Duck':
            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal}/>
                    <div className="modal" id={"duck"}>
                        <iframe className="digital-duck" title="digital-duck" src={srcLink} style={{
                            width: resizeDuck.width,
                            height: resizeDuck.height
                        }}/>
                        <Image srcImage={DuckImage} type={'subImage'}/>
                    </div>
                </>
            );
        case 'UC Merced':
            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal} subPage={openShowcase} subPageTitle={showcaseTitle} toggleSubpage={handleOpenShowcase}/>
                    <div className="modal showcase">
                        {!openShowcase && (
                            <>
                                <Carousel images={Fliers} speed={60} title={"Fliers"} openShowcase={handleOpenShowcase}/>
                                <Carousel images={Thumbnails} speed={60} title={"Thumbnails"} openShowcase={handleOpenShowcase}/>
                                <Carousel images={Logos} speed={60} title={"Logos"} openShowcase={handleOpenShowcase}/>
                                <Carousel images={SocialMedia} speed={60} title={"Social Media"} openShowcase={handleOpenShowcase}/>
                            </>
                        )}
                        {openShowcase && (
                            <Showcase images={showcaseImages} toggleShowcase={handleOpenShowcase}/>
                        )}
                    </div>
                </>
            );
        case 'Graphic Design':
            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal} subPage={openShowcase} subPageTitle={showcaseTitle} toggleSubpage={handleOpenShowcase}/>
                    <div className="modal showcase">
                        {!openShowcase && (
                            <>
                                <Carousel images={SunsetMediaWave} speed={60} title={"Sunset Media Wave"}
                                          openShowcase={handleOpenShowcase}/>
                                <Carousel images={StoryWorks} speed={120} title={"Storyworks Theater"}
                                          openShowcase={handleOpenShowcase}/>
                                <Carousel images={EllisTom} speed={60} title={"Ellis Tom"} openShowcase={handleOpenShowcase}/>
                                <Carousel images={MoreClients} speed={60} title={"More Clients"}
                                          openShowcase={handleOpenShowcase}/>
                            </>
                        )}
                        {openShowcase && (
                            <Showcase images={showcaseImages} toggleShowcase={handleOpenShowcase} headerImage={showcaseHeader} footerImage={showcaseFooter}/>
                        )}
                    </div>
                </>
            );
        case 'PASC':
            return (
                <>
                    <ModalHeader title={"Progress Assessment Scheduling Calendar"} image={srcImage}
                                 toggleModal={toggleModal}/>
                    <div className="modal" id="youtube">
                        <Image srcImage={PASCImage}/>
                        <iframe className="youtube-video" title="youtube-video" src={srcLink} style={{
                            width: resizeVideo.width,
                            minHeight: resizeVideo.height
                        }}/>
                    </div>
                </>
            );
        case 'River Cleanup':
            return (
                <>
                    <ModalHeader title={srcTitle} image={srcImage} toggleModal={toggleModal}/>
                    <div className="modal" id={"river"}>
                        <iframe className="river-cleanup" title="river-cleanup" src={srcLink} style={{
                            width: resizeRiver.width,
                            height: resizeRiver.height
                        }}/>
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