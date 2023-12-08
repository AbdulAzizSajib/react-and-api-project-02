import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import propTypes from "prop-types";

const Courses = ({ handleCourses, handleDelete }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {courses.map((courses) => (
          <Course
            key={courses.id}
            courses={courses}
            handleCourses={handleCourses}
            handleDelete={handleDelete}
          ></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleCourses: propTypes.func,
  handleDelete: propTypes.func,
};
export default Courses;
