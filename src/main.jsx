import { createContext, StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider, useDispatch } from "react-redux";
import store from "./app/store.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./auth/firebase.config.js";
import { setUser } from "./features/auth/authSlice.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const stateListener = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
    });

    return () => stateListener();
  }, [dispatch]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
