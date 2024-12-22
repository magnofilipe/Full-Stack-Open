const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14
  // Cuidado com <Content></Content>, o conteúdo precisa estar antes do primeiro ">".
  return (
    <>
      <Header course={course}></Header>
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      ></Content>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total>
    </>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1}></Part>
      <Part part={props.part2} exercises={props.exercises2}></Part>
      <Part part={props.part3} exercises={props.exercises3}></Part>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        Content: <b>{props.part}</b>.
        Number of exercises: <b>{props.exercises}</b>.
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        <b>Number of exercises: </b> {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )
}

export default App