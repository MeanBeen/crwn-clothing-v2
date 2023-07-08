import "./categories.menu.styles.scss";
import CategoryItem from "../category-item/category-item.component.jsx";

const CategorysMenu = ({ categories }) => (
  <div className="categories-container">
    {categories.map(({ imageUrl, title, id }) => (
      <CategoryItem key={id} imageUrl={imageUrl} title={title} />
    ))}
  </div>
);
export default CategorysMenu;
