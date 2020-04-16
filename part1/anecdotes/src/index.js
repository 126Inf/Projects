import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Anecdote = (props) => {
  return (
    <p>
      {props.anecdote}
    </p>
  )
};
const Votes = (props) => {
  return (
    <div>
      has {props.votes} votes
    </div>
  )
};
const TopA = (props) => {
  const { votes, anecdotes } = props;
  let i = votes.indexOf(Math.max(...votes));
  return (
    <>
      <Anecdote anecdote={anecdotes[i]} />
      <Votes votes={votes[i]} />
    </>
  )
}
const Button = (props) => {
  return (<button onClick={props.handleClick}>{props.text}</button>)
}
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0));
  const handleClick = () => {
    setSelected(Math.round(Math.random() * 5));
  }
  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;

    setVotes(copy);
  }
  return (
    <>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdote={props.anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button handleClick={handleVoteClick} text="Vote" />
      <Button handleClick={handleClick} text="Next Anecdote" />
      <h2>Anecdote with the most votes</h2>
      <TopA anecdotes={props.anecdotes} votes={votes} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)