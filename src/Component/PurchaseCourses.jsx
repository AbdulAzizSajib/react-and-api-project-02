import PurchaseCourse from "./PurchaseCourse";
import propTypes from "prop-types";
import { TbCurrencyTaka } from "react-icons/tb";

const PurchaseCourses = ({
  selectCourses,
  coursesHour,
  coursesPrice,
  remainingCredit,
}) => {
  return (
    <div className="w-5/6 space-y-2 mt-2">
      <h2 className="bg-sky-600 p-4 text-white font-bold rounded-md">
        Remaining Credit Hour : {remainingCredit}
      </h2>
      <hr />
      <h1 className="text-base font-bold mb-1">
        Number of Courses:{selectCourses.length}
      </h1>
      <hr />
      <h2 className="text-base font-bold mb-1">Course Name</h2>
      {selectCourses.map((selectCourse, idx) => (
        <PurchaseCourse key={idx} selectCourse={selectCourse}></PurchaseCourse>
      ))}
      <hr />
      <h2 className="text-base font-bold mb-1">
        Total Credit Hour: {coursesHour}
      </h2>
      <hr />
      <h2 className="flex items-center bg-sky-600 p-4 text-white font-bold rounded-md">
        Total Price: {coursesPrice}{" "}
        <TbCurrencyTaka className="text-2xl"></TbCurrencyTaka>
      </h2>
    </div>
  );
};

PurchaseCourses.propTypes = {
  selectCourses: propTypes.arrayOf(propTypes.object).isRequired,
  coursesHour: propTypes.number.isRequired,
  coursesPrice: propTypes.number.isRequired,
  remainingCredit: propTypes.number.isRequired,
};
export default PurchaseCourses;
