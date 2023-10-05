import AppNavigator from "./navigation";
import React from "react";

import { login, logout } from "./core/reducers/auth/actions";
import authService from "./core/services/AuthService";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { BrowserRouter } from "react-router-dom";

import { ScrollToTop } from "./navigation/ScrollToTop";

import { connect, useDispatch } from "react-redux";

import localStorage from "./core/utils/localstorage";

// import LoadingOverlay from 'react-loading-overlay';

import history from "./core/utils/history";
import { setStopAppLoading } from "./core/reducers/app/actions";
import PageLoader from "./components/PageLoader";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = (props) => {
  const { appLoading, setStopAppLoading } = props;

  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    error: false,
    message: "",
  });

  const handleErrorAlertOpen = () => {
    setState({ ...state, error: true });
  };

  const handleErrorAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, error: false });
  };

  const loadProfile = () => {
    if (localStorage.exist("user")) {
      authService.profile().then(
        (rs) => {
          dispatch(login(rs.data));
          setStopAppLoading();
        },
        (error) => {
          dispatch(logout());
          handleErrorAlertOpen();
          setStopAppLoading();
          setState((prevState) => {
            return {
              ...prevState,
              message:
                "Votre session a expiré. Veuillez vous connecter pour continuer ",
            };
          });
        }
      );
    } else {
      setTimeout(() => {
        setStopAppLoading();
      }, 1500);
    }
  };

  React.useEffect(() => {
    loadProfile();
  }, []);

  return (
    // <LoadingOverlay
    //   active={props?.loading}
    //   spinner
    //   text='Veuillez patienter...'
    // >
    <BrowserRouter>
      <PageLoader loading={appLoading} />

      <ScrollToTop />

      <AppNavigator history={history} />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="bottomright"
        open={state.error}
        autoHideDuration={10000}
        onClose={handleErrorAlertClose}
      >
        <Alert
          onClose={handleErrorAlertClose}
          severity="error"
          sx={{ width: "100%", textAlign: "center" }}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </BrowserRouter>
    // </LoadingOverlay>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.app.loading,
    appLoading: state.app.appLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setStopAppLoading: () => dispatch(setStopAppLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
