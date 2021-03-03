import { useState } from "react";

import { getInitialErrors, initial, validate } from "./utilities";

const useInput = ({
  touched = initial.touched,
  validators = initial.validators,
  value = initial.value
}) => {
  const [state, setState] = useState({
    errors: getInitialErrors(String(value), validators),
    touched: Boolean(touched),
    value: String(value)
  });

  const onChange = ({ target: { value } }) => {
    const errors = validate(value, validators);

    setState((state) => ({
      ...state,
      errors,
      touched: true,
      value
    }));
  };

  return {
    errors: state.errors,
    touched: state.touched,
    value: state.value,
    onChange
  };
};

export default useInput;
