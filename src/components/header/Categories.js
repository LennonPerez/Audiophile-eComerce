import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectCategoryAction } from "../../actions/ProductsAction";

const Burgermenu = ({ hidden, opencategories, setOpenCategories }) => {
  const dispatch = useDispatch();

  const selectCategory = () => {
    opencategories && setOpenCategories(false);
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <div
        className={`categories ${
          hidden && `hiddenmenu ${opencategories && "show"}`
        }`}
      >
        <div className="container">
          <div className="image" />
          <div>
            <h3>headphones</h3>
            <Link
              to="/Categories/Headphones"
              onClick={selectCategory}
              className="link"
            >
              shop <span />
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="image" />
          <div>
            <h3>speakers</h3>
            <Link
              to="/Categories/Speakers"
              onClick={selectCategory}
              className="link"
            >
              shop <span />
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="image" />
          <div>
            <h3>earphones</h3>
            <Link
              to="/Categories/Earphones"
              onClick={selectCategory}
              className="link"
            >
              shop <span />
            </Link>
          </div>
        </div>
      </div>
      {hidden && (
        <div
          className={`transparentbg ${opencategories && "show"}`}
          onClick={() => setOpenCategories(false)}
        />
      )}
    </Fragment>
  );
};

export default Burgermenu;
