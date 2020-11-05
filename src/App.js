// React related imports
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";

// Third party
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

// Views and Components
import LandingPage from "./views/LandingPage";
import Dashboard from "./views/Dashboard";
import FlashMessages from "./components/FlashMessages";
import "./App.css";

Axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem('scrapper-pro-token')),
    flashMessages: [],
    user: {
      id: '1234myid',
      username: 'khanr',
      token: 'token3214'
    },
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("scrapper-pro-id", state.user.id);
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
          console.log(response)
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
              <LandingPage />
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
