import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';

function renderStatistics(stats) {
  const { good, bad, nuetral } = stats;
  const all = good + bad + nuetral;
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <td><Statistics text="Good" value={good} /></td>
        </tr>
        <tr>
          <td><Statistics text="Nuetral" value={nuetral} /></td>
        </tr>
        <tr>
          <td><Statistics text="Bad" value={bad} /></td>
        </tr>
        <tr>
          <td><Statistics text="All" value={all} /></td>
        </tr>
        <tr>
          <td><Statistics text="Average" value={calculateAverage(stats, all)} /></td>
        </tr>
        <tr>
          <td><Statistics text="Positive" value={good / all} /></td>
        </tr>
      </tbody>
    </table >
  )
};
function calculateAverage(stats, all) {
  if (stats.good > 0 || stats.bad > 0 || stats.nuetral > 0) {
    const convertedStats = stats.good * 1 + stats.nuetral * 0 + stats.bad * -1;
    return convertedStats / all;
  }

  return 0;
}
const Statistics = (props) => {
  return (<p>{props.text}: {props.text === "Positive" ? props.value + " %" : props.value}</p>)
}
const Title = (props) => {
  return (
    <h2>{props.text}</h2>
  )
};

const Button = (props) => {
  return (<button onClick={props.handleClick}>{props.text}</button>)
}
const App = () => {
  const [good, setGood] = useState(0);
  const [nuetral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGood = () => {
    setGood(good + 1);
  }
  const countNuetral = () => {
    setNeutral(nuetral + 1);
  }
  const countBad = () => {
    setBad(bad + 1);
  }
  const stats = {
    good,
    bad,
    nuetral
  }
  return (
    <div>
      <Title text="Give Feedback" />
      <Button handleClick={countGood} text="Good" />
      <Button handleClick={countNuetral} text="Nuetral" />
      <Button handleClick={countBad} text="Bad" />
      <Title text="Statistics" />
      {renderStatistics(stats)}
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'));
