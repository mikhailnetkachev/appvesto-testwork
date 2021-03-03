import MESSAGES from "./messages";
import REGEX from "./regex";

class Validation {
  constructor({ value }) {
    this.value = value;
    this.errors = [];
  }

  required() {
    return this.pattern({
      message: MESSAGES.REQUIRED,
      regex: REGEX.REQUIRED
    });
  }

  pattern({ message, regex }) {
    const isNotValid = !regex.test(this.value);

    if (isNotValid) this.errors.push(message);

    return this;
  }
}

export { REGEX };
export default Validation;
