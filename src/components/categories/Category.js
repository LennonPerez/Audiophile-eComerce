import { useHistory } from "react-router-dom";

const Category = ({ cat }) => {
  const history = useHistory();

  const { image, slug } = cat;

  const goToProduct = () => {
    history.push(`/Products/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="category">
      <div className="img-container">
        <img
          className="img"
          src={innerWidth >= 768 ? image.desktop : image.mobile}
        />
      </div>
      <div className="infocategory">
        {cat.new && <h4>New Product</h4>}
        <h3>{cat.name}</h3>
        <p>{cat.description}</p>
        <button type="button" onClick={goToProduct}>
          see product
        </button>
      </div>
    </div>
  );
};

export default Category;
