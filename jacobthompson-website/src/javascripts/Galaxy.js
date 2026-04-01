import '../stylesheets/galaxy.css';
import {AboutMeInfoCard} from "./InfoCard";

export default function Galaxy({scale, toggleModal, doneLoading = false}){
    return (
        <div className="galaxy-wrapper" style={{scale: scale}} onClick={() => toggleModal(["About Me"])}>
            {!doneLoading && (
                <div className="galaxy-label">Loading...</div>
            )}
            <AboutMeInfoCard/>
            <div className="galaxy-mask">
                <div className="galaxy-background-counter-rotation">
                    <div className="galaxy-background"/>
                </div>
            </div>
        </div>
    );
}