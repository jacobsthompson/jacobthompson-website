import '../stylesheets/modal.css';

export default function Modal({src, toggleModal}){
    return (
        <div className="modal-background" onClick={toggleModal}>
            <div className="modal-wrapper">
                <div className="modal">
                    <iframe className="digital-duck" title="digital-duck" src="https://editor.p5js.org/jacobsthompson/full/KRplqbcFJ"/>
                </div>
            </div>
        </div>
    );
}