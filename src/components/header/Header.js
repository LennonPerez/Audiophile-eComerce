import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Categories from "./Categories";
import Cart from "./Cart";
import { selectCategoryAction } from "../../actions/ProductsAction";

const Header = () => {
  const [opencategories, setOpenCategories] = useState(false);
  const [opencart, setOpenCart] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const showCategoriesMenu = () => {
    setOpenCart(false);
    if (opencategories) {
      setOpenCategories(false);
    } else {
      setOpenCategories(true);
    }
  };

  const showCartMenu = () => {
    setOpenCategories(false);
    if (opencart) {
      setOpenCart(false);
    } else {
      setOpenCart(true);
    }
  };

  const goToHome = () => {
    setOpenCategories(false);
    setOpenCart(false);
    history.push("/");
  };

  const selectCategory = (e) => {
    dispatch(selectCategoryAction(e.target.textContent));
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <header className="header">
        <div>
          <span className="hidden burgermenu" onClick={showCategoriesMenu} />
          <span className="logo" onClick={goToHome} />
          <div className="links">
            <Link to="/" className="link">
              home
            </Link>
            <Link
              to="/Categories/Headphones"
              onClick={selectCategory}
              className="link"
            >
              headphones
            </Link>
            <Link
              to="/Categories/Speakers"
              onClick={selectCategory}
              className="link"
            >
              speakers
            </Link>
            <Link
              to="/Categories/Earphones"
              onClick={selectCategory}
              className="link"
            >
              earphones
            </Link>
          </div>
          <span className="hidden shoppingcar" onClick={showCartMenu} />
        </div>
      </header>
      <Categories
        hidden={true}
        opencategories={opencategories}
        setOpenCategories={setOpenCategories}
      />
      <Cart opencart={opencart} setOpenCart={setOpenCart} />
    </Fragment>
  );
};

export default Header;
