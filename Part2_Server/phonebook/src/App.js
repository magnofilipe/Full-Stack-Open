import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: "040-1234567" }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("")
  const [filtered, setFiltered] = useState("")

  const addPerson = (event) => {
    event.preventDefault()

    if (!persons.find(person => person.name === newName)) {
      const personObject = {
        name: newName,
        phone: newPhone,
      }
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewPhone("")
      
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const filterPerson = filtered
  ? persons.filter(person => person.name.toLowerCase().includes(filtered.toLowerCase()))
  : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFiltered(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input value={filtered} onChange={handleFilterChange}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {filterPerson.map(person => 
          <div key={person.name}>{person.name} {person.phone}</div>
        )}
      </div>
    </div>
  )
}

export default App