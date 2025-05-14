import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from "./authSlice";
import { app } from "../../Firebase/firebase.config";
const auth = getAuth(app);

export const authObserver = (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null));
    }
  });
};
