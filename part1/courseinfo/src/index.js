import React from 'react'
import ReactDOM from 'react-dom'

function renderContent(content) {
  const keys = Array.from(content.keys());
  let allContent = Array.from(content.values()).map((value, index) => {
    return (
      <Content keyValue={keys[index]} value={value} key={index} />
    )
  })
  return allContent;
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.keyValue} {props.value}</p>
  )
}
const Content = (props) => {
  return (
    <Part keyValue={props.keyValue} value={props.value} />
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.totals}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content = new Map();
  content.set(part1, exercises1)
    .set(part2, exercises2)
    .set(part3, exercises3);

  return (
    <div>
      <Header course={course} />
      {renderContent(content)}
      <Total totals={exercises1 + exercises2 + exercises3} />
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))