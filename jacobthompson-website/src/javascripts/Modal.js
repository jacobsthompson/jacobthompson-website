import '../stylesheets/modal.css';

export default function Modal({src, toggleModal}){
    if(src){
        const srcTitle = src[0];
        const srcImage = src[1];
        const srcDesc = src[2];
        const srcYear = src[3];
        const srcLink = src[4];

        switch (srcTitle){
            case 'A Digital Duck':
                return (
                    <div className="modal-background" onClick={toggleModal}>
                        <div className="modal-wrapper">
                            <div className="modal">
                                <iframe className="digital-duck" title="digital-duck" src={srcLink}/>
                            </div>
                        </div>
                    </div>
                );
            case 'UC Merced':
                break;
            case 'Graphic Design':
                break;
            case 'PASC':
                return (
                    <div className="modal-background" onClick={toggleModal}>
                        <div className="modal-wrapper">
                            <div className="modal">
                                <iframe className="youtube-video" title="youtube-video" src={srcLink}/>
                            </div>
                        </div>
                    </div>
                );
            case 'River Cleanup':
                return (
                    <div className="modal-background" onClick={toggleModal}>
                        <div className="modal-wrapper">
                            <div className="modal">
                                <iframe className="river-cleanup" title="river-cleanup" src={srcLink}/>
                            </div>
                        </div>
                    </div>
                );
        }
    }
}