import { SET_NOTIFY_OPTIONS } from "redux/constants/notification";

export const setNotificationOptions = (notificationOptions) => {
  return {
    type: SET_NOTIFY_OPTIONS,
    notificationOptions,
  };
};
