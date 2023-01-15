import { useState } from "react";
import IdentityCard from "./IdentityCard";

const NameGenerator = () => {
    const [persons, setPersons] = useState([]);
    const [dataType, setDataType] = useState(0);

    const addNewPerson = async () => {
        const response = await fetch("https://randomuser.me/api/");
        const result = await response.json();

        const newPerson = result.results[0];
        setPersons([...persons, newPerson]);
    }

    const deletePerson = (id) => {
        setPersons(persons.filter(person => person.login.uuid !== id));
    };

    return <>
        <h1>Génerateur de nom</h1>
        <button onClick={addNewPerson}>Nouvelle ligne</button>
        <select onChange={(e) => setDataType(parseInt(e.target.value))} defaultValue="0">
            <option value="0">card</option>
            <option value="1">csv</option>
            <option value="2">Tableau</option>
        </select>

        {dataType === 0 && (
            <div className="card-container container">
                {persons.map((person) => (
                    <IdentityCard key={person.login.uuid} person={person} onDelete={deletePerson}/>
                ))}
            </div>
        )}

        {dataType === 1 && ( 
            <div className="csv-container container">
                <p>Nom, prenom, date, genre</p>
                {persons.map((person) => (
                    <p key={person.login.uuid}>{person.name.first + ',' + person.name.last + ',' + new Date(person.dob.date).toLocaleDateString() + ',' + (person.gender === 'female' ? 'Femme' : 'Homme')}</p>
                ))}
            </div>
        )}

        {dataType === 2 && ( 
            <div className="tab-container container">
                <table>
                    <thead>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Date</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((person) => {
                        return (
                            <tr key={person.login.uuid}>
                                <td>{person.name.first}</td>
                                <td>{person.name.last}</td>
                                <td>{new Date(person.dob.date).toLocaleDateString()}</td>
                                <td>{person.gender === 'female' ? 'Femme' : 'Homme'}</td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
            </div>
        )}
    </>
}

export default NameGenerator;