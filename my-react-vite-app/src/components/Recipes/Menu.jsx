import Recipe from "./Recipe";
import recipeObject from "./recipeObject";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.item}>
      {recipeObject.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  );
};

export default Menu;
