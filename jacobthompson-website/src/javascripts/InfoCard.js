import '../stylesheets/infocard.css';

export default function InfoCard({title, year, description}){
    if(title){
        return (
            <div className="info-wrapper">
                <div className="info-card">
                    <div className="info-header">
                        <div className="info-title">{title}</div>
                        <div className="info-year">{year}</div>
                    </div>
                    <div className="info-desc">{description}</div>
                </div>
            </div>
        );
    }
}