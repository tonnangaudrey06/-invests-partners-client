import '../../styles/login.scss';

import Login from './Login';
import Register from './Register';
import { Container } from '../../components';

import image1 from "../../assets/img/ban.png";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import React from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default class Auth extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 'login',
      message: null,
      success: false
    };

    this.switchPage = this.switchPage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleSuccessAlertOpen = this.handleSuccessAlertOpen.bind(this);
    this.handleSuccessAlertClose = this.handleSuccessAlertClose.bind(this);
  }

  handleSuccessAlertOpen() {
    this.setState({ success: true });
  };

  handleSuccessAlertClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ success: false });
  };

  switchPage(page) {
    this.setState({ page })
  }

  sendMessage(message) {
    if(message) {
      this.setState({ message });
      this.handleSuccessAlertOpen()
    }
  }

  render() {
    return (
      <Container>
        <div className="auth-container">
          <div className="auth-wrapper">
            <div className="auth-img" style={{ backgroundImage: "url('" + image1 + "')" }} alt=""></div>
            <div className="auth-cover">
              <div className="h-100 justify-content-center d-flex flex-column align-items-center auth-present p-5 text-center">
                <h1>Votre meilleur partenaire</h1>
                <p>INVEST & PARTNERS, l'assurance d'un placement profitable</p>
              </div>
            </div>
          </div>
          <div className="auth-form py-3 px-4">
              <div className="auth-head">
                <div className="auth-nav shadow">
                  <div onClick={() => this.switchPage("register")} className={this.state.page === "register" ? "auth-nav-item active" : "auth-nav-item"} >Inscription</div>
                  <div onClick={() => this.switchPage("login")} className={this.state.page === "login" ? "auth-nav-item active" : "auth-nav-item"}>Connexion</div>
                </div>
              </div>
              {this.state.page === "register" ? (
                <Register switchPage={this.switchPage} sendMessage={this.sendMessage} {...this.props} />
              ) : (
                <Login {...this.props} />
              )}
          </div>
        </div>

        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={this.state.success} autoHideDuration={10000} onClose={this.handleSuccessAlertClose}>
          <Alert onClose={this.handleSuccessAlertClose} severity="success" sx={{ width: '100%', textAlign: 'center' }}>
            {this.state.message}
          </Alert>
        </Snackbar>
      </Container>
    )
  }
}