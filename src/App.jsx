// import "./App.css";
// import PurchaseCourse from "./Component/PurchaseCourses";
// import Courses from "./Component/Courses";
// import { useState } from "react";
// // toast 01 First You install : npm install react-toastify & Add those 2 line below
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [selectCourses, setSelectCourses] = useState([]);
//   // Credit useState
//   const [coursesHour, setCoursesHour] = useState(0);
//   // price useState
//   const [coursesPrice, setCoursesPrice] = useState(0);
//   // remaining Credit
//   const [remainingCredit, setRemainingCredit] = useState(20);

//   const handleCourses = (courses, time, price) => {
//     const newCourses = [...selectCourses, courses];
//     // Condition for Not repeate Courses
//     const courseExists = selectCourses.some(
//       (course) => course.title === courses.title
//     );
//     if (courseExists) {
//       toast.warn("Same course cannot be repeated");
//     } else {
//       setSelectCourses(newCourses);
//       // CONDITION 02
//       const newTime = coursesHour + time;
//       if (newTime > 20) {
//         toast.warn("You can add a maximum of 20 hours credit");
//       } else {
//         setCoursesHour(newTime);
//         const newPrice = coursesPrice + price;
//         setCoursesPrice(newPrice);
//         const newRemaining = remainingCredit - time;
//         if (newRemaining >= 0) {
//           setRemainingCredit(newRemaining);
//         } else {
//           toast.warn("You have exceeded the credit limit");
//         }
//       }
//     }
//   };

//   return (
//     <>
//       <div className="flex items-start justify-between">
//         <Courses handleCourses={handleCourses}></Courses>
//         <PurchaseCourse
//           selectCourses={selectCourses}
//           coursesHour={coursesHour}
//           coursesPrice={coursesPrice}
//           remainingCredit={remainingCredit}
//         ></PurchaseCourse>
//       </div>
//       {/* toast 02 */}
//       <ToastContainer position="bottom-right" autoClose={3000} />
//     </>
//   );
// }

// export default App;

import "./App.css";
import PurchaseCourse from "./Component/PurchaseCourses";
import Courses from "./Component/Courses";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [coursesHour, setCoursesHour] = useState(0);
  const [coursesPrice, setCoursesPrice] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  const handleCourses = (courses, time, price) => {
    const newCourses = [...selectCourses, courses];

    // Check if the course already exists in the selected courses
    const courseExists = selectCourses.some(
      (course) => course.title === courses.title
    );

    if (courseExists) {
      toast.warn("The same course cannot be repeated");
    } else {
      // Calculate the new total credit hours if the course is added
      const newTime = coursesHour + time;

      if (newTime > 20) {
        toast.warn("You can add a maximum of 20 hours credit");
      } else {
        // Update the state with the new course and credit hours
        setSelectCourses(newCourses);
        setCoursesHour(newTime);

        // Update the total price of the selected courses
        const newPrice = coursesPrice + price;
        setCoursesPrice(newPrice);

        // Update the remaining credit after selecting the course
        const newRemaining = remainingCredit - time;

        if (newRemaining >= 0) {
          setRemainingCredit(newRemaining);
        } else {
          toast.warn("You have exceeded the credit limit");
        }
      }
    }
  };

  // ........Help by ChatGPT Delete Button.............
  const handleDelete = (courseToDelete) => {
    const updatedCourses = selectCourses.filter(
      (course) => course !== courseToDelete
    );

    // Calculate the total credit hours of remaining courses
    const updatedHours = updatedCourses.reduce(
      (totalHours, course) => totalHours + course.creditHours,
      0
    );

    // Calculate the total price of remaining courses
    const updatedPrice = updatedCourses.reduce(
      (totalPrice, course) => totalPrice + course.price,
      0
    );

    // Calculate the remaining credit based on the updated total hours
    const updatedRemaining = 20 - updatedHours;

    // Update the state with the modified courses, credit hours, remaining credit, and total price
    setSelectCourses(updatedCourses);
    setCoursesHour(updatedHours);
    setRemainingCredit(updatedRemaining);
    setCoursesPrice(updatedPrice);
  };

  // ..................................... //

  return (
    <>
      <div className="flex items-start justify-between">
        <Courses
          handleCourses={handleCourses}
          handleDelete={handleDelete}
        ></Courses>
        <PurchaseCourse
          selectCourses={selectCourses}
          coursesHour={coursesHour}
          coursesPrice={coursesPrice}
          remainingCredit={remainingCredit}
        ></PurchaseCourse>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
