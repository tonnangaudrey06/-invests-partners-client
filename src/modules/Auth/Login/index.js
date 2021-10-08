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
      password: '',
      remenber: false,
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

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    const user = {
      email: this.state.email,
      password: this.state.password,
      remember: this.state.remember
    }

    authService.login(user).then(
      (rs) => {
        this.setState({
          loading: false
        });
        this.props.setUser(rs.data.data.user);
        if(rs.data.data.user.role === 3) {
          this.props.history.push(this.props?.location?.state?.from?.pathname || "/dashboard");
        } else {
          this.props.history.push(this.props?.location?.state?.from?.pathname || "/investor");
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
    console.log(this.props?.location?.state?.from?.pathname);
    return (
      <form className="login-form" onSubmit={this.handleLogin}>
        <div className="d-flex justify-content-xl-center align-items-center">
          <img src={logo} width="150" alt="I&P" />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
              <TextField
                fullWidth
                required
                error={this.state.error}
                type="email"
                variant="filled"
                label="Email"
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
            <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
              <TextField
                fullWidth
                error={this.state.error}
                required
                variant="filled"
                label="Mot de passe"
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
        <div className="form-end">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FormControlLabel control={<Checkbox value={this.state.remenber} onChange={() => this.setState({ remember: !this.state.remember })} />} label="Se souvenir de moi" />
          </div>
          <a href="#" className="text-decoration-none fs-6">Mot de Passe oublié ?</a>
          {/* <a href="dsfdsf">Mot de Passe oublié ?</a> */}
        </div>
        <LoadingButton
          className="btn-default btn-rounded flex flex-align-center flex-justify-center"
          loading={this.state.loading}
          type={'submit'}
          variant="contained"
        >
          Connexion
        </LoadingButton>
        <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right"}} key="bottomright" open={this.state.error} autoHideDuration={10000} onClose={this.handleErrorAlertClose}>
          <Alert onClose={this.handleErrorAlertClose} severity="error" sx={{ width: '100%' }}>
            {this.state.message}
          </Alert>
        </Snackbar>
      </form>
    )
  }
}

export default Redux.connect(mapStateToProps, mapDispatchToProps)(Login)