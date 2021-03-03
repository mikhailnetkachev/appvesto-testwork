import { Validation } from "../../../services";

const validate = (value, rules = []) => {
  if (!rules.length) return [];

  const validation = new Validation({ value });

  rules.forEach(({ name, options }) => {
    validation[name](options);
  });

  return validation.errors;
};

export default validate;
