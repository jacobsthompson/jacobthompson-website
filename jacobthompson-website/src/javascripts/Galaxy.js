import '../stylesheets/galaxy.css';

export default function Galaxy({scale, toggleModal}){
    return (
        <div className="galaxy-wrapper" style={{scale: scale}} onClick={() => toggleModal(["About Me"])}>
            <div className="galaxy-label">Greetings.</div>
            <div className="galaxy-mask">
                <div className="galaxy-background-counter-rotation">
                    <div className="galaxy-background"/>
                </div>
            </div>
        </div>
    );
}