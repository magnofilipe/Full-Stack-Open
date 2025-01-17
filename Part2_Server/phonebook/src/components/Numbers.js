const Numbers = ({ persons, handleDelete }) => {
    
    return (
        <>
            {persons.map(person => 
                <div
                key={person.name}>{person.name} {person.phone}
                <button onClick={() => handleDelete(person.id)}>delete</button>
                </div>
            )}
        </>
    )
}

export default Numbers