import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Category from "./Category";
import Categories from "../header/Categories";
import Gear from "../Gear";
import {
  clearStateAction,
  selectCategoryAction,
} from "../../actions/ProductsAction";

const CategoryPage = () => {
  const category = useSelector((state) => state.selectedcategory);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clearStateAction());
    dispatch(selectCategoryAction(name.toLowerCase()));
  }, [name]);

  if (!category) return null;

  return (
    <div className="category-page">
      <div className="category-name">
        <h2>{category[0].category}</h2>
      </div>
      {category.map((cat) => (
        <Category cat={cat} key={cat.id} />
      ))}
      <Categories />
      <Gear />
    </div>
  );
};

export default CategoryPage;
