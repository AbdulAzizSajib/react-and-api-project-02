import { IoMdPricetag } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";

import propTypes from "prop-types";
const PurchaseCourse = ({ courses, handleCourses, handleDelete }) => {
  const { cover, title, content, price, credit } = courses;
  return (
    <div className="">
      <div className="bg-white p-2 m-2 rounded-xl">
        <img className="w-full" src={cover} alt="" />
        <h1 className="text-md font-bold mt-2">{title}</h1>
        <p className="mt-5">{content}</p>
        <div className="flex items-center justify-evenly mt-3">
          <p className="flex items-center gap-2 font-bold">
            <IoMdPricetag />
            Price:{price} <TbCurrencyTaka className="text-lg"></TbCurrencyTaka>
          </p>
          <p>Credit:{credit} hour</p>
        </div>
        <div className="flex justify-evenly mt-4">
          <button
            onClick={() => handleCourses(courses, credit, price)}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary "
          >
            Select
          </button>
          <button
            onClick={() => handleDelete(courses)}
            className="btn btn-xs btn-d sm:btn-sm md:btn-md lg:btn-lgbtn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

PurchaseCourse.propTypes = {
  courses: propTypes.object,
  handleCourses: propTypes.func,
  handleDelete: propTypes.func,
};
export default PurchaseCourse;
