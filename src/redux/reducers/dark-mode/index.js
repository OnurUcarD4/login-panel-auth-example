import { SET_IS_DARK } from "redux/constants/dark-mode";

const initState = {
  dark: true,
};

const DarkMode = (state = initState, action) => {
  switch (action.type) {
    case SET_IS_DARK:
      return {
        ...state,
        dark: action.dark,
      };

    default:
      return state;
  }
};

export default DarkMode;
