import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import Categories from "../header/Categories";
import Gear from "../Gear";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="product-page">
        <Link to="/" className="back">
          Go Back
        </Link>
        <Product />
      </div>
      <Categories />
      <Gear />
    </Fragment>
  );
};

export default ProductPage;
