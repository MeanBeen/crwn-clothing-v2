import "./categories.menu.styles.scss";
import CategoryItem from "../category-item/category-item.component.jsx";

const CategorysMenu = ({ categories }) => (
  <div className="categories-container">
    {categories.map(({ imageUrl, title, id, route }) => (
      <CategoryItem key={id} imageUrl={imageUrl} title={title} route={route} />
    ))}
  </div>
);
export default CategorysMenu;
