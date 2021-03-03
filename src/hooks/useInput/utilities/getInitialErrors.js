import validate from "./validate";

const getInitialErrors = (value, validators) => {
  const errors = validate(value, validators);

  return errors;
};

export default getInitialErrors;
