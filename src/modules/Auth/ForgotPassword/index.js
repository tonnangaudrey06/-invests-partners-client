import React from "react";

import { AiOutlineMail } from "react-icons/ai";

import authService from '../../../core/services/AuthService'

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import logo from '../../../assets/img/logo.png'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class ForgotPassword extends React.Component {

  dispatch = null;

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      role: 3,
      loading: false,
      message: null,
      error: false,
    };

    this.handleForgot = this.handleForgot.bind(this);
    this.onChangeForm = this.onChangeForm.bind(this);
    this.handleErrorAlertOpen = this.handleErrorAlertOpen.bind(this);
    this.handleErrorAlertClose = this.handleErrorAlertClose.bind(this);
    this.validation = this.validation.bind(this);
  }

  onChangeForm(key, value) {
    this.setState({
      [key]: value
    });
  }

  handleErrorAlertOpen() {
    this.setState({ error: true });
  };

  handleErrorAlertClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ error: false });
  };

  validation() {
    if (this.state.email.length === 0) {
      return false;
    }

    return true;
  }

  handleForgot(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    const user = {
      email: this.state.email,
      role: this.state.role
    }

    authService.forgot(user).then(
      (rs) => {
        this.setState({
          loading: false
        });
        this.props.switchPage("login")
        this.props.sendMessage('Un courrier contenant le lien de réinitialisation du mot de passe vous a été envoyé');
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });

        this.handleErrorAlertOpen();
      }
    );
  }

  render() {
    return (
      <form className="login-form px-0 px-md-5" onSubmit={this.handleForgot}>
        <div className="d-lg-none d-flex justify-content-xl-center align-items-center">
          <img src={logo} width="150" alt="I&P" />
        </div>
        <div className="d-flex flex-column justify-content-lg-center align-items-center h-100 py-4 py-lg-0">
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                <div className="d-flex flex-column align-items-center">
                  <h6 className="fw-bolder">Qui êtes-vous ?</h6>
                  <RadioGroup
                   className="d-flex justify-content-center flex-column flex-lg-row align-items-center"
                    row
                    value={this.state.role || 3}
                    onChange={(e, value) => this.setState({ role: value })}
                  >
                    <FormControlLabel value={3} control={<Radio />} label="Un porteur de projet" />
                    <FormControlLabel value={4} control={<Radio />} label="Un investisseur" />
                  </RadioGroup>
                </div>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                <TextField
                  fullWidth
                  required
                  size="small"
                  error={this.state.error}
                  type="email"
                  variant="filled"
                  label="Email"
                  placeholder="example@domaine.com"
                  value={this.state.email}
                  onChange={(e) => this.onChangeForm('email', e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AiOutlineMail />
                      </InputAdornment>
                    ),
                  }} />
              </FormControl>
            </Grid>
          </Grid>
          <div className="form-end d-flex justify-content-center w-100">
            <div className="text-primary cursor-pointer fs-6" onClick={() => this.props.switchPage("login")}>Je me souviens de mon mot de passe</div>
          </div>
          <LoadingButton
            className="btn-default btn-rounded flex flex-align-center flex-justify-center w-75"
            loading={this.state.loading}
            disabled={!this.validation}
            type={'submit'}
            variant="contained"
          >
            Récupérer mon mot de passe
          </LoadingButton>
        </div>

        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={this.state.error} autoHideDuration={10000} onClose={this.handleErrorAlertClose}>
          <Alert onClose={this.handleErrorAlertClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
            {this.state.message}
          </Alert>
        </Snackbar>
      </form>
    )
  }
}

export default ForgotPassword;