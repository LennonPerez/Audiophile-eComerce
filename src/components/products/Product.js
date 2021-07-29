import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectProductAction,
  addProductToCartAction,
} from "../../actions/ProductsAction";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [errormessage, setErrorMessage] = useState(false);
  const [succesmessage, setSuccesMessage] = useState(false);
  const product = useSelector((state) => state.selectedproduct[0]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const { image, gallery } = product;

  const { mobile, tablet, desktop } = image;
  const { first, second, third } = gallery;

  const selectProduct = (e) => {
    setSuccesMessage(false);
    setErrorMessage(false);
    setQuantity(1);
    dispatch(selectProductAction(e));
    history.push("/Products/Product");
    window.scrollTo(0, 0);
  };

  const addProduct = () => {
    product.quantity = quantity;
    product.total = quantity * product.price;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          setErrorMessage(true);
          setSuccesMessage(false);
          return null;
        }
      }
    }
    setQuantity(1);
    setSuccesMessage(true);
    dispatch(addProductToCartAction(product));
  };

  if (errormessage || succesmessage) {
    setTimeout(() => {
      setSuccesMessage(false);
      setErrorMessage(false);
    }, 3000);
  }
  return (
    <div className="product">
      <div className="principalinfo">
        <img
          className="imgproduct"
          src={
            innerWidth >= 768 ? (innerWidth >= 1440 ? desktop : tablet) : mobile
          }
        />
        <div className="info">
          {product.new && <h4>new product</h4>}
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h5>${product.price}</h5>
          <div className="quantity-check">
            <div className="quantity">
              <button
                type="button"
                onClick={() => setQuantity(quantity <= 0 ? 0 : quantity - 1)}
              >
                -
              </button>
              <div className="number">{quantity}</div>
              <button type="button" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button type="button" className="addcart" onClick={addProduct}>
              add to cart
            </button>
            {succesmessage && (
              <p className="msg succes">
                {window.innerWidth > 420
                  ? "The item has been succesfully added to the cart"
                  : "The item was succesfully added"}
              </p>
            )}
            {errormessage && (
              <p className="msg error">This item has been already added</p>
            )}
          </div>
        </div>
      </div>
      <div className="descriptionbox">
        <div className="description features">
          <h3 className="title">Features</h3>
          <p>{product.features}</p>
        </div>
        <div className="description boxstuff">
          <h3 className="title">In the box</h3>
          <ul>
            {product.includes.map((prod) => (
              <li key={prod.item}>
                <span>{prod.quantity}x</span>
                {prod.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="description gallery">
        <div className="twoimages">
          <img
            className="image img1"
            src={
              innerWidth >= 768
                ? innerWidth >= 1440
                  ? first.desktop
                  : first.tablet
                : first.mobile
            }
          />
          <img
            className="image img2"
            src={
              innerWidth >= 768
                ? innerWidth >= 1440
                  ? second.desktop
                  : second.tablet
                : second.mobile
            }
          />
        </div>
        <img
          className="image img3"
          src={
            innerWidth >= 768
              ? innerWidth >= 1440
                ? third.desktop
                : third.tablet
              : third.mobile
          }
        />
      </div>
      <div className="description others">
        <h3 className="title">you may also like</h3>
        <div className="otherproducts">
          {product.others.map((prod) => (
            <div className="otherproduct" key={prod.slug}>
              <div className="img-container">
                <img
                  className="img"
                  src={
                    innerWidth >= 768
                      ? innerWidth >= 1440
                        ? prod.image.desktop
                        : prod.image.tablet
                      : prod.image.mobile
                  }
                />
              </div>
              <h4>{prod.name}</h4>
              <button type="button" onClick={() => selectProduct(prod.slug)}>
                see product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
