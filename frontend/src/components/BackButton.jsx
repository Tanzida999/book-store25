import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import PropTypes from "prop-types";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link to={destination} className="bg-sky-800 px-4 py-1 rounded-lg w-fit">
        <BsArrowLeft classNametext-2xl></BsArrowLeft>
      </Link>
    </div>
  );
};
BackButton.propTypes = {
  destination: PropTypes.string, // `destination` should be a string
};
export default BackButton;
