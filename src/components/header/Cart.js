import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import CartItem from "./CartItem";
import { cleanCartAction } from "../../actions/ProductsAction";

const Cart = ({ opencart, setOpenCart }) => {
  const [GrandTotal, setGrandTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const goToCheckout = () => {
    setOpenCart(false);
    history.push("/Checkout");
  };

  const calcGrandTotal = () => {
    let grandtotal = 0;
    for (let i = 0; i < cart.length; i++) {
      grandtotal += cart[i].total;
    }
    setGrandTotal(grandtotal);
  };

  useEffect(() => {
    calcGrandTotal();
  }, [cart]);

  const clearCart = () => {
    dispatch(cleanCartAction());
  };

  return (
    <Fragment>
      <div className={`cart ${opencart && "show"}`}>
        <div className="top">
          <h3>Cart ({cart.length})</h3>
          {cart.length > 0 ? (
            window.location.href.includes("Checkout") ? null : (
              <p onClick={clearCart}>Remove all</p>
            )
          ) : null}
        </div>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              calcGrandTotal={calcGrandTotal}
            />
          ))
        ) : (
          <p className="empty">The cart is empty</p>
        )}
        {cart.length > 0 && (
          <Fragment>
            <div className="bottom">
              <h4>TOTAL</h4>
              <p>$ {GrandTotal}</p>
            </div>
            {window.location.href.includes("Checkout") ||
            GrandTotal === 0 ? null : (
              <button
                type="button"
                className="checkoutbtn"
                onClick={goToCheckout}
              >
                CHECKOUT
              </button>
            )}
          </Fragment>
        )}
      </div>
      <div
        className={`transparentbg ${opencart && "show"}`}
        onClick={() => setOpenCart(false)}
      />
    </Fragment>
  );
};

export default Cart;
