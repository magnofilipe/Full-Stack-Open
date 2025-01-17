import { useState, useEffect } from 'react'
import axios from 'axios'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("")
  const [filtered, setFiltered] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (!persons.find(person => person.name === newName)) {
      const personObject = {
        name: newName,
        phone: newPhone,
      }

      axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewPhone("")
      })
      
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
      <Filter filtered={filtered} handleFilterChange={handleFilterChange}></Filter>
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      ></PersonForm>
      <h2>Numbers</h2>
      <Numbers persons={filterPerson}></Numbers>
    </div>
  )
}

export default App