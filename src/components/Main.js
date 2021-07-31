import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Categories from "./header/Categories";
import Gear from "./Gear";
import {
  selectProductAction,
  clearStateAction,
} from "../actions/ProductsAction";

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectProduct = (e) => {
    dispatch(selectProductAction(e.target.parentElement.classList[0]));
    history.push(`/Products/${e.target.parentElement.classList[0]}`);
  };

  useEffect(() => {
    dispatch(clearStateAction());
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-container">
      <div className="xx99-mark-two-headphones hero">
        <p>New product</p>
        <h1>XX99 Mark II Headphones</h1>
        <p className="desc">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button type="button" onClick={selectProduct}>
          See product
        </button>
      </div>
      <Categories />
      <div className="zx9-speaker-container">
        <div className="img" />
        <div className="zx9-speaker containerinfo">
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button type="button" onClick={selectProduct}>
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div className="zx7-speaker">
        <h2>ZX7 SPEAKER</h2>
        <button type="button" onClick={selectProduct}>
          SEE PRODUCT
        </button>
      </div>
      <div className="yx1">
        <div className="img" />
        <div className="yx1-earphones">
          <h2>YX1 EARPHONES</h2>
          <button type="button" onClick={selectProduct}>
            SEE PRODUCT
          </button>
        </div>
      </div>
      <Gear />
    </main>
  );
};

export default Main;
