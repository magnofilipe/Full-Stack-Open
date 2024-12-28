import { useState } from 'react'

const Title = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({text, value}) => (
  <p>{text} {value}</p>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>
  }
  return (
  <>
    <StatisticLine text="good" value={props.good}></StatisticLine>
    <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
    <StatisticLine text="bad" value={props.bad}></StatisticLine>
    <StatisticLine text="all" value={props.all}></StatisticLine>
    <StatisticLine text="average" value={props.average}></StatisticLine>
    <StatisticLine text="positive" value={props.positive}></StatisticLine>
  </>
  )
}

const App = () => {
  const [button, setButton] = useState({
    good: 0, neutral: 0, bad: 0, scoreboard: 0
  })

  const handleGoodButton = () => 
    setButton({...button, good: button.good + 1, scoreboard: button.scoreboard + 1})

  const handleNeutralButton = () => 
    setButton({...button, neutral: button.neutral + 1})

  const handleBadButton = () => 
    setButton({...button, bad: button.bad + 1, scoreboard: button.scoreboard - 1})

  // Causes NaN
  const total = button.bad + button.neutral + button.good
  const average = button.scoreboard / total
  const positive = (button.good / total * 100) + "%"

  return (
    <div>
      <Title text="Give Button"></Title>
      <Button handleClick={handleGoodButton} text={"good"}></Button>
      <Button handleClick={handleNeutralButton} text={"neutral"}></Button>
      <Button handleClick={handleBadButton} text={"bad"}></Button>

      <Title text="Statistics"></Title>
      <Statistics 
        good={button.good}
        neutral={button.neutral}
        bad={button.bad}
        all={total}
        average={average}
        positive={positive}
        >
      </Statistics>
    </div>
  )
}

export default App