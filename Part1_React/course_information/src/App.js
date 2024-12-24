const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }

  // Cuidado com <Content></Content>, o conteúdo precisa estar antes do primeiro ">".
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}></Content>
      <Total sum={course.parts}></Total>
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
      <Parts part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Parts part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Parts part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )
}

const Parts = (props) => {
  return (
    <>
      <p>
        <b>Content:</b> {props.part}, <b>Exercises:</b> {props.exercises}.
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises: {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises}</p>
    </>
  )
}

export default App