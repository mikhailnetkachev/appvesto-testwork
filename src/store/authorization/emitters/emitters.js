import { AuthorizationAPI } from "../../../api";
import actions from "../actions";

const authorizationAPI = new AuthorizationAPI();

const signIn = ({ password, username }) => (dispatch) => {
  authorizationAPI
    .signIn({ password, username })
    .then((response) => {
      if (response.status === 200) return response.json();

      throw new Error(`The server responded with ${response.status} error!`);
    })
    .then((data) => {
      console.log(data); // TODO: work in progress
    })
    .catch((error) => {
      dispatch(actions.error(error.message));
    });
};

const signOut = () => (dispatch) => {
  dispatch(actions.signOut());
};

const emitters = {
  signIn,
  signOut,
};

export default emitters;
