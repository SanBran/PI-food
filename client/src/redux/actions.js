import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const ORDER_NAME = " ORDER_NAME";
export const POST_RECIPE = "POST_RECIPE";
export const ORDER_HEALTHSCORE = "ORDER_HEALTHSCORE";
export const FILTER_SOURCE = "FILTER_SOURCE";
export const FILTER_DIET = "FILTER_DIET";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getRecipes = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/recipes");
    const data = response.data;
    return dispatch({
      type: GET_RECIPES,
      payload: data,
    });
  };
};

export const getRecipesByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/recipes?name=${name}`
      );
      const data = response.data;
      return dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: error.response.data,
      });
    }
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/recipes/${id}`);
    const data = response.data;
    return dispatch({
      type: GET_DETAIL,
      payload: data,
    });
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/diets");
    const data = response.data;
    return dispatch({
      type: GET_DIETS,
      payload: data,
    });
  };
};

export const postRecipe = (recipe) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/recipes", recipe);
    const data = response.data;
    return dispatch({
      type: POST_RECIPE,
      payload: data,
    });
  };
};

export const orderByName = (value) => {
  return {
    type: ORDER_NAME,
    payload: value,
  };
};

export const orderHealthScore = (value) => {
  return {
    type: ORDER_HEALTHSCORE,
    payload: value,
  };
};

export const filterBySource = (value) => {
  return {
    type: FILTER_SOURCE,
    payload: value,
  };
};

export const filterByDiet = (diet) => {
  return {
    type: FILTER_DIET,
    payload: diet,
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};
