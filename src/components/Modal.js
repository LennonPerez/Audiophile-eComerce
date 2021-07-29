import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cleanCartAction } from "../actions/ProductsAction";

const Modal = ({ open, setIsOpen, grandtotal }) => {
  const cart = useSelector((state) => state.cart);
  const [showall, setShowAll] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(cleanCartAction());
    history.push("/");
    setIsOpen(false);
  };

  if (!open) return null;

  return (
    <Fragment>
      <div className="modal">
        <div className="circle">
          <div className="check" />
        </div>
        <h2>thank you for your order</h2>
        <p className="prg">You will recieve an email confirmation shortly</p>
        <div className="details">
          <ul>
            {showall ? (
              cart.map((car) => (
                <li className="item" key={car.id}>
                  <div>
                    <img className="img" src={car.image} />
                    <div className="item-info">
                      <h4>{car.name}</h4>
                      <p>${car.price}</p>
                    </div>
                    <div className="quantity">
                      <p>x{car.quantity}</p>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <Fragment>
                <li className="item">
                  <div>
                    <img className="img" src={cart[0].image} />
                    <div className="item-info">
                      <h4>{cart[0].name}</h4>
                      <p>${cart[0].price}</p>
                    </div>
                    <div className="quantity">
                      <p>x{cart[0].quantity}</p>
                    </div>
                  </div>
                </li>
                {cart.length > 1 && (
                  <li className="otheritems" onClick={() => setShowAll(true)}>
                    <p>and {cart.length - 1} other item(s)</p>
                  </li>
                )}
              </Fragment>
            )}
            {cart.length > 1 && showall ? (
              <li className="otheritems" onClick={() => setShowAll(false)}>
                <p>View less</p>
              </li>
            ) : null}
          </ul>
          <div className="grandtotalbox">
            <p>Grand total</p>
            <p>$ {grandtotal}</p>
          </div>
        </div>
        <button type="button" onClick={closeModal}>
          back to home
        </button>
      </div>
      <div className="transparentbg modalbg show" />
    </Fragment>
  );
};

export default Modal;
