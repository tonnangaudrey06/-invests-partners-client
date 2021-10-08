import AppNavigator from './navigation'
import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import frLocale from 'date-fns/locale/fr';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import theme from './theme'

import { login } from './core/reducers/auth/actions'
import authService from './core/services/AuthService'

import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (payload) => dispatch(login(payload))
  }
};

const App = (props) => {

  React.useEffect(() => {
    const loadProfile = async () => {
      await authService.profile().then(
        (rs) => {
          props.setUser(rs.data);
        },
        error => { }
      );
    }
    loadProfile();
  }, [props]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
        <AppNavigator />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default connect(null, mapDispatchToProps)(App);
