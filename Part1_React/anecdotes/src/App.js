import { useState } from 'react'

function getRandomInteger(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

const Title = ({text}) => (
  <h2>{text}</h2>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const handleClick = () => {
    const updateAnecdote = getRandomInteger(0, 7)
    setSelected(updateAnecdote)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy) 
  }

  // We don't create a copy because we are only reading the values and not modifying them.
  const findMostVotedIndex = () => {
    let mostVotedIndex = 0
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > votes[mostVotedIndex]) {
        mostVotedIndex = i
      }
    }
    return mostVotedIndex
  }

  const mostVotedIndex = findMostVotedIndex()

  return (
    <>
      <Title text="Anecdote of the day"></Title>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text={"vote"}></Button>
      <Button handleClick={handleClick} text={"next anecdote"}></Button>

      <Title text="Anecdote with most votes"></Title>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>has {votes[mostVotedIndex]} votes</p>
    </>
  )
}

export default App