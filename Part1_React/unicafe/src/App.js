import { useState } from 'react'

const Title = ({text}) => (
  <h1>{text}</h1>
)

const Feedback = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => {
  return (
  <>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.all}</p>
    <p>average {props.average}</p>
    <p>positive {props.positive} %</p>
  </>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0, scoreboard: 0
  })

  const handleGoodFeedback = () => 
    setFeedback({...feedback, good: feedback.good + 1, scoreboard: feedback.scoreboard + 1})

  const handleNeutralFeedback = () => 
    setFeedback({...feedback, neutral: feedback.neutral + 1})

  const handleBadFeedback = () => 
    setFeedback({...feedback, bad: feedback.bad + 1, scoreboard: feedback.scoreboard - 1})

  // Causes NaN
  const total = feedback.bad + feedback.neutral + feedback.good
  const average = feedback.scoreboard / total
  const positive = (feedback.good / total * 100)

  return (
    <div>
      <Title text="Give Feedback"></Title>
      <Feedback handleClick={handleGoodFeedback} text={"good"}></Feedback>
      <Feedback handleClick={handleNeutralFeedback} text={"neutral"}></Feedback>
      <Feedback handleClick={handleBadFeedback} text={"bad"}></Feedback>

      <Title text="Statistics"></Title>
      <Statistics 
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        all={total}
        average={average}
        positive={positive}
        >
      </Statistics>
    </div>
  )
}

export default App