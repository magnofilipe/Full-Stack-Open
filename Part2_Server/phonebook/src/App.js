import { useState, useEffect } from 'react'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import Notification from './components/Notification'

import personsService from './services/persons'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("")
  const [filtered, setFiltered] = useState("")
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (!persons.find(person => person.name === newName)) {
      const personObject = {
        name: newName,
        phone: newPhone,
      }

      personsService
      .create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName("")
        setNewPhone("")
        setSuccessMessage(`Added ${personObject.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
      
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.deletePerson(id).then(() => {
        setPersons(persons.filter(p => p.id !== id));
      });
    }
  };


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
      <h2 className="phonebook">Phonebook</h2>
      <Notification message={successMessage}></Notification>
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
      <Numbers persons={filterPerson} handleDelete={deletePerson}></Numbers>
    </div>
  )
}

export default App