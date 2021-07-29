import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  getAllProductsInvoice,
  selectCategoryAction,
} from "../actions/ProductsAction";

const Footer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsInvoice());
  }, []);

  const selectCategory = (e) => {
    dispatch(selectCategoryAction(e.target.textContent));
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="border" />
      <div className="logo" onClick={() => history.push("/")} />
      <div className="links">
        <Link to="/" className="link">
          home
        </Link>
        <Link
          to="/Categories/Category"
          onClick={selectCategory}
          className="link"
        >
          headphones
        </Link>
        <Link
          to="/Categories/Category"
          onClick={selectCategory}
          className="link"
        >
          speakers
        </Link>
        <Link
          to="/Categories/Category"
          onClick={selectCategory}
          className="link"
        >
          earphones
        </Link>
      </div>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="copy">Copyright 2021. All Rights Reserved</p>
      <div className="socialmedia">
        <a href="https://www.facebook.com/" target="_blank">
          f
        </a>
        <a href="https://twitter.com/" target="_blank">
          t
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          i
        </a>
      </div>
    </footer>
  );
};

export default Footer;
