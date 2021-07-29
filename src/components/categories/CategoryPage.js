import { useEffect } from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import Categories from "../header/Categories";
import Gear from "../Gear";

const CategoryPage = () => {
  const category = useSelector((state) => state.selectedcategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
