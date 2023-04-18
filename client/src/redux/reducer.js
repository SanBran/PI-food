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
  recipesDetail: {},
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
    default:
      return { ...state };
  }
};

export default reducer;
