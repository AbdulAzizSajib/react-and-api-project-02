import propTypes from "prop-types";
const PurchaseCourse = ({ selectCourse }) => {
  const { title } = selectCourse;

  return (
    <div className="flex items-start justify-between gap-2">
      <div>
        <li>{title}</li>
      </div>
      <div>
        {/* <button
          onClick={() => handleDelete(id)}
          className="btn btn-sm btn-error"
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

PurchaseCourse.propTypes = {
  selectCourse: propTypes.object,
};
export default PurchaseCourse;
