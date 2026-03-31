import '../stylesheets/galaxy.css';
import {AboutMeInfoCard} from "./InfoCard";

export default function Galaxy({scale, toggleModal}){
    return (
        <div className="galaxy-wrapper" style={{scale: scale}} onClick={() => toggleModal(["About Me"])}>
            <AboutMeInfoCard/>
            <div className="galaxy-mask">
                <div className="galaxy-background-counter-rotation">
                    <div className="galaxy-background"/>
                </div>
            </div>
        </div>
    );
}