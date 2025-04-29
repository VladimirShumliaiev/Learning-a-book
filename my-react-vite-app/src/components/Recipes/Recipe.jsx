const Recipe = (props) => {
  const { name, steps, ingredients } = props;
  return (
    <div>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <section>
        <h1>{name}</h1>
        <ul>
          {ingredients.map((ingredients, i) => (
            <li key={i}>{ingredients.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Cooking Instructions</h2>
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section>
    </div>
  );
};

export default Recipe;
