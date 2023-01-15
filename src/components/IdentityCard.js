import { useState } from "react";

const IdentityCard = ({ person, onDelete }) => {

    const [showDetail, setShowDetail] = useState(0);

    return (
        <div className="card">
            <img src={person.picture.large} alt={person.picture.large} />
            <p>{person.name.first}</p>
            <p>{person.name.last}</p>
            <div className="buttons">
                <button onClick={() => {onDelete(person.login.uuid)}}>Supprimer</button>
                <button onClick={() => { showDetail ? setShowDetail(0) : setShowDetail(1) }}>...</button>
            </div>
            <div className="detail" style={showDetail ? { display: 'block' } : { display: 'none'}}>
                <p>Nom : </p>
                <p>{person.name.last}</p>
                <p>Genre : </p>
                <p>{person.gender === 'fermale' ? 'Femme' : 'Homme'}</p>
                <p>Date : </p>
                <p>{new Date(person.dob.date).toLocaleDateString()}</p>
            </div>
        </div>
    );
}

export default IdentityCard;