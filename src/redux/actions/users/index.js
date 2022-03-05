import { SET_USER_LIST } from "redux/constants/users";

export const register = (userinfo) => {
  return {
    type: SET_USER_LIST,
    userinfo,
  };
};
