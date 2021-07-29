import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [carttotal, setTotal] = useState(0);
  const [grandtotal, SetGrandTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [emoneyinputs, showEmoneyInputs] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zcode: "",
    city: "",
    country: "",
    payment: "",
    emoneynumber: "",
    emoneypin: "",
  });

  const readInputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].total;
    }
    setTotal(total);
    setVat((total * 20) / 100);
    SetGrandTotal(carttotal + 50 + vat);
  };

  const setPaymentMethod = () => {
    if (form.payment === "cash") {
      showEmoneyInputs(false);
    } else {
      showEmoneyInputs(true);
    }
  };

  useEffect(() => {
    setPaymentMethod();
  }, [form.payment]);

  useEffect(() => {
    calcTotal();
  }, [cart, vat, carttotal]);

  const inputErrorForm = () => {
    const input = document.querySelectorAll(".inputform");
    input.forEach((i) => {
      if (i.value === "") {
        i.classList.add("inputerror");
        i.previousElementSibling.classList.add("labelerror");
      } else {
        i.classList.remove("inputerror");
        i.previousElementSibling.classList.remove("labelerror");
      }
    });
  };

  const continueAndPay = () => {
    inputErrorForm();
    if (
      form.name &&
      form.email &&
      form.phone &&
      form.address &&
      form.zcode &&
      form.city &&
      form.country &&
      form.payment === "cash"
    ) {
      setIsOpen(true);
    } else if (
      form.name &&
      form.email &&
      form.phone &&
      form.address &&
      form.zcode &&
      form.city &&
      form.country &&
      form.payment === "emoney" &&
      form.emoneynumber &&
      form.emoneypin
    ) {
      setIsOpen(true);
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <div className="checkout">
        <Link to="/" className="back check">
          Go Back
        </Link>
        <form className="checkout-form">
          <h2>CHECKOUT</h2>
          <h3>billing details</h3>
          <div className="part part1">
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="inputform"
                id="name"
                name="name"
                onChange={readInputs}
              />
            </div>
            <div className="input-box right">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="inputform "
                id="email"
                name="email"
                onChange={readInputs}
              />
            </div>
            <div className="input-box">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="inputform"
                id="phone"
                name="phone"
                onChange={readInputs}
              />
            </div>
          </div>
          <h3>shipping info</h3>
          <div className="input-box">
            <label htmlFor="address">Your Address</label>
            <input
              type="text"
              className="inputform"
              id="address"
              name="address"
              onChange={readInputs}
            />
          </div>
          <div className="part part2">
            <div className="input-box">
              <label htmlFor="zcode">Zip Code</label>
              <input
                type="number"
                className="inputform"
                id="zcode"
                name="zcode"
                onChange={readInputs}
              />
            </div>
            <div className="input-box right">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="inputform"
                id="city"
                name="city"
                onChange={readInputs}
              />
            </div>
            <div className="input-box">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="inputform"
                id="country"
                name="country"
                onChange={readInputs}
              />
            </div>
          </div>
          <h3>payment details</h3>
          <div className="paymentbox">
            <label>Payment method</label>
            <div className="inputs">
              <div className="input-box">
                <div className="radio-box">
                  <input
                    type="radio"
                    name="payment"
                    id="emoney"
                    value="emoney"
                    checked="checked"
                    onChange={readInputs}
                  />
                  <label htmlFor="emoney">e-Money</label>
                </div>
              </div>
              <div className="input-box">
                <div className="radio-box">
                  <input
                    type="radio"
                    name="payment"
                    id="cash"
                    value="cash"
                    onChange={readInputs}
                  />
                  <label htmlFor="cash">Cash on Delivery</label>
                </div>
              </div>
            </div>
          </div>
          {!emoneyinputs && (
            <p className="cashdeliverymsg">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          )}
          {emoneyinputs && (
            <div className="emoneyinputs">
              <div className="input-box">
                <label htmlFor="emoneynumber">e-Money Number</label>
                <input
                  type="number"
                  className="inputform "
                  id="emoneynumber"
                  name="emoneynumber"
                  onChange={readInputs}
                />
              </div>
              <div className="input-box">
                <label htmlFor="emoneypin">e-Money Pin</label>
                <input
                  type="number"
                  className="inputform "
                  id="emoneypin"
                  name="emoneypin"
                  onChange={readInputs}
                />
              </div>
            </div>
          )}
        </form>
        <div className="sumary-box">
          <h3>Summary</h3>
          <ul>
            {cart.map((car) => (
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
            ))}
          </ul>
          <div className="allinfo">
            <div className="box totalbox">
              <p>total</p>
              <p>$ {carttotal}</p>
            </div>
            <div className="box shippingbox">
              <p>shipping</p>
              <p>$ 50</p>
            </div>
            <div className="box vatbox">
              <p>vat (included)</p>
              <p>$ {vat}</p>
            </div>
            <div className="box grandtotalbox">
              <p>grand total</p>
              <p>$ {grandtotal}</p>
            </div>
          </div>
          <button type="button" onClick={continueAndPay}>
            continue & pay
          </button>
        </div>
        <Modal open={isOpen} setIsOpen={setIsOpen} grandtotal={grandtotal} />
      </div>
    </Fragment>
  );
};

export default Checkout;
