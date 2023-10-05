import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { RiLock2Line } from "react-icons/ri";

import authService from '../../../core/services/AuthService'

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import * as Redux from 'react-redux'

import { login } from '../../../core/reducers/auth/actions'

import logo from '../../../assets/img/logo.png'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (payload) => dispatch(login(payload))
  }
};

const mapStateToProps = (state) => ({ auth: state.auth })

class Login extends React.Component {

  dispatch = null;

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      role: 3,
      password: '',
      remenber: true,
      loading: false,
      message: null,
      showPassword: false,
      error: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleErrorAlertOpen = this.handleErrorAlertOpen.bind(this);
    this.handleErrorAlertClose = this.handleErrorAlertClose.bind(this);
    this.validation = this.validation.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleMouseDownPassword(e) {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
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

    if (this.state.password.length === 0) {
      return false;
    }

    return true;
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    const user = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      remember: this.state.remenber,
    }

    authService.login(user).then(
      (rs) => {
        this.setState({
          loading: false
        });
        this.props.setUser(rs.data.data.user);
        if (rs.data.data.user.role === 3) {
          this.props.history.push(this.props?.location?.state?.from?.pathname || "/dashboard");
        } else {
          this.props.history.push(this.props?.location?.state?.from?.pathname || "/projets");
        }
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
    const { translate: t } = this.props;
    return (
      <form className="login-form px-0 px-md-5" onSubmit={this.handleLogin}>
        <div className="d-flex flex-column justify-content-lg-center align-items-center h-100 py-4 py-lg-0">
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                <div className="d-flex flex-column align-items-center">
                  <h6 className="fw-bolder">{t('auth.connexion.form._1.title')}</h6>
                  <RadioGroup
                   className="d-flex justify-content-center flex-column flex-lg-row align-items-center"
                    row
                    value={this.state.role || 3}
                    onChange={(e, value) => this.setState({ role: value })}
                  >
                    <FormControlLabel value={3} control={<Radio />} label={t('auth.connexion.form._1.value._1')} />
                    <FormControlLabel value={4} control={<Radio />} label={t('auth.connexion.form._1.value._2')} />
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
                  label={t('auth.connexion.form._2.title')}
                  placeholder="example@domaine.com"
                  value={this.state.email}
                  onChange={this.onChangeUsername}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AiOutlineMail />
                      </InputAdornment>
                    ),
                  }} />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12}>
              <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                <TextField
                  fullWidth
                  size="small"
                  error={this.state.error}
                  required
                  variant="filled"
                  label={t('auth.connexion.form._3.title')}
                  placeholder="*******"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <RiLock2Line />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                          edge="end"
                        >
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }} />
              </FormControl>
            </Grid>
          </Grid>

          <div className="form-end d-flex justify-content-center justify-content-lg-between flex-column flex-lg-row w-100">
            <div className="d-flex justify-content-start align-items-center">
              <FormControlLabel control={<Checkbox checked={this.state.remenber} value={this.state.remenber} onChange={() => this.setState({ remenber: !this.state.remenber })} />} label={t('auth.connexion.remenber')} />
            </div>
            <div className="text-primary cursor-pointer fs-6" onClick={() => this.props.switchPage("forgot")}>{t('auth.connexion.text')}</div>
          </div>
          
          <LoadingButton
            className="btn-default btn-rounded flex flex-align-center flex-justify-center w-75"
            loading={this.state.loading}
            disabled={!this.validation}
            type={'submit'}
            variant="contained"
          >
            {t('auth.connexion.btn')}
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

export default Redux.connect(mapStateToProps, mapDispatchToProps)(Login)