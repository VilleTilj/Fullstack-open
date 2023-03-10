
const Header = (props) => {
  console.log(props) 
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  console.log(props) 
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  console.log(props) 
  return (
    <p>
      Number of exercises {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises}
    </p>
  )
  
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course.parts[0]} />
      <Content part={course.parts[1]} />
      <Content part={course.parts[2]} />
      <Total sum={course.parts} />
    </div>
  )
}

export default App
