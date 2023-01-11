const IdentityCard = ({ person, onDelete }) => {
    console.log(person);

    return (
        <div className="card">
            <img src={person.picture.large} alt={person.picture.large} />
            <p>{person.name.first}</p>
            <p>{person.name.last}</p>
            <button onClick={() => {onDelete(person.login.uuid)}}>Supprimer</button>
            {/* <div className="detail" >
                <p>Nom : </p>
                <p>{person.name.last}</p>
                <p>Genre : </p>
                <p>{person.gender === 'fermale' ? 'Femme' : 'Homme'}</p>
                <p>Date : </p>
                <p>{new Date(person.dob.date).toLocaleDateString()}</p>
            </div> */}
        </div>
    );
}

export default IdentityCard;