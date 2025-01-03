const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ parts }) => (
  <p>
    {parts.name} {parts.exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} parts={part} />
    ))}
  </>
)

const Total = ({ parts }) => {
  var total = parts.reduce((currentValue, part) => currentValue + part.exercises, 0);

  return <b>total of {total} exercises</b>
}

const Course = ({ course }) => (
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

export default Course