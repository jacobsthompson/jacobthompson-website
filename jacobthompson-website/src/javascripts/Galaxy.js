import '../stylesheets/galaxy.css';

export default function Galaxy({scale}){
    return (
        <div className="galaxy-wrapper" style={{scale: scale}}>
            <div className="galaxy-mask">
                <div className="galaxy-background-counter-rotation">
                    <div className="galaxy-background"/>
                </div>
            </div>
        </div>
    );
}