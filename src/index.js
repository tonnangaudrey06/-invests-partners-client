import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import './styles/style.scss';

import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './core/reducers'

import { ThemeProvider } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import frLocale from 'date-fns/locale/fr';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import theme from './theme'
import './core/utils/i18n'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

