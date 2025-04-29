import { data } from "./data";
import Recipe from "./Recipe";

const RecipeList = () => {
  return (
    <div>
      {data.map((recipe, i) => {
        <Recipe key={i} {...recipe} />;
      })}
    </div>
  );
};

export default RecipeList;
