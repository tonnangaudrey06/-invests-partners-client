import '../../../styles/login.scss';

import { Link } from 'react-router-dom';

import authService from '../../../core/services/AuthService'

import { RiLock2Line } from "react-icons/ri";

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import logo from '../../../assets/img/logo.png'
import { Container } from '../../../components';

import image1 from "../../../assets/img/ban.png";

import React from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default class ResetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirm: '',
            message: '',
            loading: false,
            showPassword: false,
            showConfirmPassword: false,
            success: false,
            error: false
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.handleForgot = this.handleForgot.bind(this);
        this.handleErrorAlertClose = this.handleErrorAlertClose.bind(this);
        this.handleSuccessAlertClose = this.handleSuccessAlertClose.bind(this);
    }

    onChangeForm(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleErrorAlertClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ error: false });
    };

    handleSuccessAlertClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ success: false });
    };

    sendMessage(message) {
        if (message) {
            this.setState({ message, success: true });
        }
    }

    validation() {
        if (this.state.password.length === 0) {
            return false;
        }

        if (this.state.password === this.state.confirm) {
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

        const params = new URLSearchParams(this.props.location.search);

        const user = {
            email: params.get('email'),
            role: +params.get('role'),
            password: this.state.password
        }

        authService.reset(user).then(
            (rs) => {
                this.setState({
                    loading: false
                });
                this.sendMessage('Mot de passe modifier');
                this.props.history.push('/auth');
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

                this.setState({ error: true });
            }
        );
    }

    render() {
        return (
            <Container>
                <div className="auth-container">
                    <div className="auth-wrapper">
                        <div className="auth-img" style={{ backgroundImage: "url('" + image1 + "')" }} alt=""></div>
                        <div className="auth-cover">
                            <div className="h-100 justify-content-center d-flex flex-column align-items-center auth-present p-5 text-center">
                                <div className="d-flex justify-content-xl-center align-items-center mb-1">
                                    <img src={logo} width="100" alt="IP INVESTMENT S.A." />
                                </div>
                                <h1>Votre meilleur partenaire</h1>
                                <p>IP INVESTMENT S.A., l'assurance d'un placement profitable</p>
                                <Link to={'/'} className="btn btn-default btn-outline-light btn-rounded mt-1">Aller à l'accueil</Link>
                            </div>
                        </div>
                    </div>
                    <div className="auth-form py-3 px-4">
                        <form className="login-form px-0 px-md-5" onSubmit={this.handleForgot}>
                            <div className="d-flex flex-column justify-content-lg-center align-items-center h-100 py-4 py-lg-0 w-75">
                                <div className="d-flex justify-content-xl-center align-items-center">
                                    <img src={logo} width="150" alt="IP INVESTMENT S.A." />
                                </div>
                                <h4 className="fw-bolder mb-5">Entrez votre nouveau mot de passe</h4>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={12}>
                                        <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                error={this.state.error}
                                                required
                                                variant="filled"
                                                label="Mot de passe"
                                                placeholder="*******"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                value={this.state.password}
                                                onChange={(e) => this.onChangeForm('password', e.target.value)}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <RiLock2Line />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={(e) => this.setState({ showPassword: !this.state.showPassword })}
                                                                onMouseDown={(e) => this.setState({ showPassword: !this.state.showPassword })}
                                                                edge="end"
                                                            >
                                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
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
                                                label="Confirmer le mot de passe"
                                                placeholder="*******"
                                                type={this.state.showConfirmPassword ? 'text' : 'password'}
                                                value={this.state.confirm}
                                                onChange={(e) => this.onChangeForm('confirm', e.target.value)}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <RiLock2Line />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={(e) => this.setState({ showConfirmPassword: !this.state.showConfirmPassword })}
                                                                onMouseDown={(e) => this.setState({ showConfirmPassword: !this.state.showConfirmPassword })}
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
                                <LoadingButton
                                    className="btn-default btn-rounded flex flex-align-center flex-justify-center w-75 mt-3"
                                    loading={this.state.loading}
                                    disabled={!this.validation}
                                    type={'submit'}
                                    variant="contained"
                                >
                                    Changer le mot de passe
                                </LoadingButton>
                            </div>
                        </form>
                    </div>
                </div>

                <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={this.state.error} autoHideDuration={10000} onClose={this.handleErrorAlertClose}>
                    <Alert onClose={this.handleErrorAlertClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
                        {this.state.message}
                    </Alert>
                </Snackbar>

                <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrightsuccess" open={this.state.success} autoHideDuration={10000} onClose={this.handleSuccessAlertClose}>
                    <Alert onClose={this.handleSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
                        {this.state.message}
                    </Alert>
                </Snackbar>
            </Container>
        )
    }
}