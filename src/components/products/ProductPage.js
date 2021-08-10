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

  useEffect(() => {
    dispatch(selectProductAction(name));
    window.scrollTo(0, 0);
  }, [name]);

  const goBack = () => {
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
