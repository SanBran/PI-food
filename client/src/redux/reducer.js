import {
  GET_RECIPES,
  GET_DETAIL,
  GET_DIETS,
  ORDER_NAME,
  ORDER_HEALTHSCORE,
  FILTER_SOURCE,
  FILTER_DIET,
  GET_RECIPES_BY_NAME,
  POST_RECIPE,
  CLEAN_DETAIL,
} from "./actions";

let initialState = {
  recipes: [],
  recipesCopy: [],
  recipeDetail: {},
  diets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, recipesCopy: action.payload };

    case GET_RECIPES_BY_NAME:
      return { ...state, recipes: action.payload };

    case GET_DETAIL:
      return { ...state, recipeDetail: action.payload };

    case GET_DIETS:
      return { ...state, diets: action.payload };

    case POST_RECIPE:
      return { ...state };

    case ORDER_NAME:
      const allRecipes = state.recipes;
      let recipesOrderbyName = [];

      switch (action.payload) {
        case "Sort by Name":
          return {
            ...state,
            recipes: allRecipes,
          };
        case "A-Z":
          recipesOrderbyName = state.recipes.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });

          return {
            ...state,
            recipes: recipesOrderbyName,
          };
        case "Z-A":
          recipesOrderbyName = state.recipes.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
          return {
            ...state,
            recipes: recipesOrderbyName,
          };
        default:
          break;
      }
    case ORDER_HEALTHSCORE:
      return {
        ...state,
        recipes:
          action.payload === "Ascending"
            ? state.recipes.sort((a, b) => a.healthScore - b.healthScore)
            : state.recipes.sort((a, b) => b.healthScore - a.healthScore),
      };

    case FILTER_SOURCE:
      const filteredRecipesBySource =
        action.payload === "Data Base"
          ? state.recipesCopy.filter((recipe) => recipe.created)
          : state.recipesCopy.filter((recipe) => !recipe.created);
      return {
        ...state,
        recipes:
          action.payload === "Filter by Source"
            ? state.recipesCopy
            : filteredRecipesBySource,
      };

    case FILTER_DIET:
      const filteredRecipesByDiet =
        action.payload === "Filter by Diet Type"
          ? state.recipes
          : state.recipesCopy.filter((recipe) =>
              recipe.diets.includes(action.payload)
            );
      return {
        ...state,
        recipes: filteredRecipesByDiet,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        recipeDetail: {},
      };

    default:
      return { ...state };
  }
};

export default reducer;
