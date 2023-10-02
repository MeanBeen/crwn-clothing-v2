import {
  BackgroundImage,
  Body,
  CategoryContainer,
} from "./category-item.styles";

import { useNavigate } from "react-router-dom";

const CategoryItem = ({ imageUrl, title, route }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
