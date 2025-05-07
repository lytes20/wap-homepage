(function getRecipes() {
  fetch("https://dummyjson.com/recipes")
    .then((response) => response.json())
    .then((response) => {
      response.recipes.forEach((recipe) => {
        console.log(recipe.name);
      });
    });
})();
