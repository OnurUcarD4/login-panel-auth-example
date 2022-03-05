import { SET_IS_DARK } from "redux/constants/dark-mode";

export const setDarkMode = (dark) => ({
  type: SET_IS_DARK,
  dark,
});
