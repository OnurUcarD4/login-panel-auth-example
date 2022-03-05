import { SET_NOTIFY_OPTIONS } from "redux/constants/notification";

const initState = {
  notificationOptions: {
    isVisible: false,
    message: "Başarıyla giriş yaptınız",
    icon: "fa fa-pen",
    error: false,
  },
};

const notification = (state = initState, action) => {
  switch (action.type) {
    case SET_NOTIFY_OPTIONS:
      return {
        ...state,
        notificationOptions: action.notificationOptions,
      };

    default:
      return state;
  }
};

export default notification;
