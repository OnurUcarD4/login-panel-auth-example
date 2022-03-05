import {
  all,
  delay,
  fork,
  put,
  race,
  select,
  takeEvery,
} from "redux-saga/effects";
import {
  authenticated,
  showAuthMessage,
  showLoading,
} from "redux/actions/Auth";
import { setNotificationOptions } from "redux/actions/notification";
import { SIGNIN } from "redux/constants/Auth";

const option5 = {
  isVisible: true,
  message: "Wrong mail or password.",
  icon: "fa-solid fa-triangle-exclamation",
  error: true,
};

export function* Login() {
  yield takeEvery(SIGNIN, function* ({ email, password }) {
    try {
      yield put(showLoading(true));
      const state = yield select();
      let userList = state.user.userinfo;

      let user = userList.find((x) => x.mail === email);
      if (user === undefined) {
        yield put(setNotificationOptions(option5));
        const { timeout } = yield race({
          timeout: delay(3000),
        });
        console.log(timeout);
        if (timeout) yield put(setNotificationOptions({ isVisible: false }));
        // setTimeout(() => {
        //   yield put(setNotificationOptions({isVisible:false}))
        // }, 3000);
      }
      if (user.pass === password) {
        // token
        return yield put(
          authenticated(Math.floor(Math.random() * 900000000000000))
        );
      }
    } catch (err) {
      yield put(showAuthMessage("Wrong mail or password."));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(Login)]);
}
