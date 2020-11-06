// React related imports
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";

// Third party
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

// Views and Components
import LandingPage from "./views/LandingPage";
import Dashboard from "./views/Dashboard";
import FlashMessages from "./components/FlashMessages";
import "./App.css";

Axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("scrapper-pro-token")),
    flashMessages: [],
    user: {
      _id: localStorage.getItem("scrapper-pro-id"),
      username: localStorage.getItem("scrapper-pro-username"),
      token: localStorage.getItem("scrapper-pro-token"),
    },
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        console.log("logging in");
        draft.loggedIn = true;
        console.log("action data", action.value);
        draft.user = action.value;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("scrapper-pro-id", state.user._id);
      localStorage.setItem("scrapper-pro-username", state.user.username);
      localStorage.setItem("scrapper-pro-token", state.user.token);
    } else {
      localStorage.removeItem("scrapper-pro-id");
      localStorage.removeItem("scrapper-pro-username");
      localStorage.removeItem("scrapper-pro-token");
    }
  }, [state.loggedIn]);

  useEffect(() => {
    if (!state.loggedIn) {
      const ourRequest = Axios.CancelToken.source();

      async function fetchSessionState() {
        try {
          const response = await Axios.get("/api/checkToken", {
            headers: {
              Authorization: `Bearer ${state.user.token}`,
            },
          });
          if (response.status === 400) {
            dispatch({ type: "logout" });
            dispatch({
              type: "flashMessage",
              value: "Your session has expired, please login again!",
            });
          }
        } catch (e) {
          dispatch({
            type: "flashMessage",
            value: "Unable to verify session state, please login again.",
          });
        }
      }
      fetchSessionState();
      return () => ourRequest.cancel();
    }
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {state.loggedIn ? <Dashboard /> : <LandingPage />}
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
