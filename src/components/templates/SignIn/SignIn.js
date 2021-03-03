import { useDispatch, useSelector } from "react-redux";

import Input from "../../atoms/Input";
import { useInput } from "../../../hooks";
import { authorizationEmitters } from "../../../store";

const SignIn = () => {
  const dispatch = useDispatch();
  const authorization = useSelector(store => store.authorization);

  console.log(authorization);

  const {
    errors: usernameErrors, touched: usernameTouched, value: username, onChange: onChangeUsername
  } = useInput({ validators: [{ name: "required" }] });
  const {
    errors: passwordErrors, touched: passwordTouched, value: password, onChange: onChangePassword
  } = useInput({ validators: [{ name: "required" }] });
  const isValid = !(usernameErrors.length || passwordErrors.length);

  const onSubmit = (event) => {
    event.preventDefault();

    if (isValid) {
      dispatch(authorizationEmitters.signIn({ username, password }));
    }
  };

  return (
    <div className="wrapper">
      <h3 className="m-0px">SignIn</h3>
      <form>
        <div className="d-flex ai-center">
          <Input type="text" value={username} onChange={onChangeUsername} />
          {usernameTouched && (
            <span className="ml-16px">{usernameErrors}</span>
          )}
        </div>
        <div className="d-flex ai-center">
          <Input type="text" value={password} onChange={onChangePassword} />
          {passwordTouched && (
            <span className="ml-16px">
              {passwordErrors}
            </span>
          )}
        </div>
        <br />
        <button disabled={!isValid} onClick={onSubmit}>SIGN IN</button>
      </form>
    </div>
  );
};

export default SignIn;
