import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { modifyCartProductAction } from "../../actions/ProductsAction";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [itemtotal, setItemtotal] = useState({
    id: item.id,
    name: item.name,
    image: item.image.mobile ? item.image.mobile : item.image,
    quantity: item.quantity,
    price: item.price,
    total: item.total,
  });

  const { name, image, quantity, price, total } = itemtotal;

  useEffect(() => {
    setItemtotal({
      ...itemtotal,
      total: quantity * price,
    });
    dispatch(modifyCartProductAction(itemtotal));
  }, [price, quantity, total]);

  return (
    <div className="product">
      <img className="imgproduct" src={image} />
      <div className="productinfo">
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
      <div className="btns">
        <div>
          <button
            type="button"
            onClick={() =>
              setItemtotal({
                ...itemtotal,
                quantity: quantity <= 0 ? 0 : quantity - 1,
              })
            }
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            type="button"
            onClick={() =>
              setItemtotal({ ...itemtotal, quantity: quantity + 1 })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
