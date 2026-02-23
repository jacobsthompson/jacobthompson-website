import '../stylesheets/sidepanel.css';

export default function SidePanel({side, text}){
    return(
        <div className="side-panel-container" style={{justifyContent: side}}>
            {text}
        </div>
    );
}