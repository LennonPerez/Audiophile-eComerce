import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Product from "./Product";
import Categories from "../header/Categories";
import Gear from "../Gear";
import { selectProductAction } from "../../actions/ProductsAction";

const ProductPage = () => {
  const product = useSelector((state) => state.selectedproduct);
  const history = useHistory();
  const dispatch = useDispatch();
  const { name } = useParams();

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(selectProductAction(name));
    scrollUp();
  }, [name]);

  const goBack = () => {
    scrollUp();
    history.goBack();
  };

  if (!product) return null;

  return (
    <Fragment>
      <div className="product-page">
        <button type="button" onClick={goBack} className="back">
          Go Back
        </button>
        <Product product={product} />
      </div>
      <Categories />
      <Gear />
    </Fragment>
  );
};

export default ProductPage;
