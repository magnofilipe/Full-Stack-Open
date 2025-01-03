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

const Course = ({ course }) => (
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </>
)

export default Course