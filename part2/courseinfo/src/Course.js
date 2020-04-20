import React from 'react';
import ReactDOM from 'react-dom';

export const Course = ({ course }) => {

    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )

}
const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {
    const sum = course.parts.reduce((agg, current) => {
        return agg += current.exercises
    }, 0);
    return (
        <p>Number of exercises {sum}</p>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return course.parts.map((course) => {
        return (
            <Part key={course.id} part={course}></Part>
        )
    })
}
