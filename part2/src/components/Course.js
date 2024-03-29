import React from "react";

const Header = ({ name }) => {
    return <h2>{name}</h2>;
  };
  

const Course = (props) => {
  return (
    <div>
      {props.course.map((acourse) => (
        <div key={acourse.id}>
          <Header name={acourse.name} />
          <Content courselist={acourse.parts} />
        </div>
      ))}
    </div>
  );
};

const Content = ({ courselist }) => {
  const total = courselist.reduce((s, t) => s + t.exercises, 0);
  return (
    <div>
      {courselist.map((part) => (
        <p key={part.id}>
          <Part oneCourse={part} />
        </p>
      ))}
      <p>
        <b>Total of {total} excercises</b>
      </p>
    </div>
  );
};

const Part = ({ oneCourse }) => {
  return (
    <>
      {oneCourse.name} {oneCourse.exercises}
    </>
  );
};

export default Course;