const { Recipe, Diet } = require("../db");

const createRecipe = async (name, image, sumary, healthScore, steps, diets) => {
  let newRecipe = await Recipe.create({
    name,
    image,
    sumary,
    healthScore,
    steps,
  });

  let dietas = await Diet.findAll({
    where: {
      name: diets,
    },
  });

  await newRecipe.addDiet(dietas);

  return "Recipe crated";
};

module.exports = createRecipe;
