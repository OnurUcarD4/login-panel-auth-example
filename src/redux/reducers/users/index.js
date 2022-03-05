import { SET_USER_LIST } from "redux/constants/users";

const initState = {
  userinfo: [],
};

const users = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_LIST:
      return {
        ...state,
        userinfo: action.userinfo,
      };
    default:
      return state;
  }
};

export default users;
