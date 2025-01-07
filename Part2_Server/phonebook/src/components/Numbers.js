const Numbers = ({ persons }) => {
    
    return (
        <>
            {persons.map(person => 
                <div key={person.name}>{person.name} {person.phone}</div>
            )}
        </>
    )
}

export default Numbers