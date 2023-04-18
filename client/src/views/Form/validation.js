const validate = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Please write a name.";
  }

  if (input.name.length > 255) {
    errors.name = `The name of the recipe can't exceed 255 characters.`;
  }

  if (!input.summary) {
    errors.summary = "Please write a summary.";
  }

  if (!input.healthScore) {
    errors.healthScore = "Please enter a number.";
  }

  if (input.healthScore < 0 || input.healthScore > 100) {
    errors.healthScore = "Health Score must be a number between 0 and 100.";
  }

  if (!/^\d+$/.test(input.healthScore)) {
    errors.healthScore = "Health Score must be a number between 0 and 100.";
  }

  if (!input.steps) {
    errors.steps = "Please enter the steps.";
  }

  if (!/(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i.test(input.image)) {
    errors.image =
      "Image should be an url with a valid extension( png, jpg, gif, svg, jpeg).";
  }

  if (input.diets.length === 0) {
    errors.diets = "Please choose at least one diet.";
  }

  return errors;
};

export default validate;
