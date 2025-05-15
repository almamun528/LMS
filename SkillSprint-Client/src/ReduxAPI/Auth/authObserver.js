import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from "./authSlice";
import { app } from "../../Firebase/firebase.config";
const auth = getAuth(app);

export const authObserver = (dispatch) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        })
      );
    } else {
      dispatch(setUser(null));
    }
  });
  return unsubscribe;
};
