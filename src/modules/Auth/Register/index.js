import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";

import React from "react";

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import authService from '../../../core/services/AuthService'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            role: 3,
            status: 'PARTICULIER',
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            profil: null,
            password: '',
            loading: false,
            condition: false,
            showPassword: false,
            message: null,
            error: false,
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleErrorAlertOpen = this.handleErrorAlertOpen.bind(this);
        this.handleErrorAlertClose = this.handleErrorAlertClose.bind(this);
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
        if (this.state.nom.length === 0) {
            return false;
        }

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
            loading: true
        });

        if (!this.validation()) {
            this.setState({
                loading: false
            });
            return;
        }

        const user = this.state

        delete user.loading;
        delete user.showPassword;

        authService.register(user).then(
            () => {
                this.setState({
                    loading: false
                });
                this.props.switchPage("login");
                this.props.sendMessage("Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter avec vos d'identifiants");
                // this.props.history.push("/auth");
                // window.location.reload();
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
            <form className="login-form" onSubmit={this.handleLogin}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
                            <div className="d-flex justify-content-center">
                                <RadioGroup
                                    row
                                    aria-label="etat"
                                    name="row-etat-buttons-group"
                                    value={this.state.role}
                                    onChange={(e, value) => this.setState({ role: value })}
                                >
                                    <FormControlLabel value={3} control={<Radio />} label="Porteur de projet" />
                                    <FormControlLabel value={4} control={<Radio />} label="Investisseur" />
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
                            <div className="d-flex justify-content-center">
                                <RadioGroup
                                    row
                                    aria-label="etat"
                                    name="row-etat-buttons-group"
                                    value={this.state.status}
                                    onChange={(e, value) => this.setState({ status: value })}
                                >
                                    <FormControlLabel value="PARTICULIER" control={<Radio />} label="Particulier" />
                                    <FormControlLabel value="ENTREPRISE" control={<Radio />} label="Entreprise" />
                                </RadioGroup>
                            </div>

                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={this.state.status === 'PARTICULIER' ? 6 : 12}>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <TextField
                                fullWidth
                                error={this.state.error}
                                required
                                variant="filled"
                                label="Nom"
                                placeholder="Nom"
                                value={this.state.nom}
                                onChange={(e) => this.setState({ nom: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FaRegUser />
                                        </InputAdornment>
                                    ),
                                }} />
                        </FormControl>
                    </Grid>
                    {this.state.status === 'PARTICULIER' &&
                        <Grid item xs={12} md={6}>
                            <FormControl sx={{ m: 1, width: "100%" }}>
                                <TextField
                                    fullWidth
                                    error={this.state.error}
                                    variant="filled"
                                    label="Prenom"
                                    placeholder="Prenom"
                                    value={this.state.prenom}
                                    onChange={(e) => this.setState({ prenom: e.target.value })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FaRegUser />
                                            </InputAdornment>
                                        ),
                                    }} />
                            </FormControl>
                        </Grid>
                    }

                    <Grid item xs={12} md={6}>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <TextField
                                fullWidth
                                error={this.state.error}
                                required
                                variant="filled"
                                label="Email"
                                placeholder="example@domaine.com"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AiOutlineMail />
                                        </InputAdornment>
                                    ),
                                }} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <TextField
                                fullWidth
                                error={this.state.error}
                                required
                                variant="filled"
                                label="Téléphone"
                                placeholder="Téléphone"
                                value={this.state.telephone}
                                onChange={(e) => this.setState({ telephone: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BiPhoneCall />
                                        </InputAdornment>
                                    ),
                                }} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <TextField
                                fullWidth
                                required
                                error={this.state.error}
                                variant="filled"
                                label="Mot de passe"
                                placeholder="*******"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RiLock2Line />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                value={this.state.showPassword}
                                                onChange={(e) => this.setState({ showPassword: !this.state.showPassword })}
                                                onClick={(e) => this.setState({ showPassword: !this.state.showPassword })}
                                                edge="end"
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                        </FormControl>
                    </Grid>
                    {+this.state.role === 4 &&
                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, width: "100%" }}>
                                <TextField
                                    fullWidth
                                    required
                                    select
                                    SelectProps={{
                                        native: true,
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                    variant="filled"
                                    label="Profil"
                                    placeholder="Profil"
                                    value={this.state.profil}
                                    onChange={(e) => this.setState({ profil: e.target.value })}
                                >
                                    <option value={1}>GOLD</option>
                                    <option value={2}>PLATINUM</option>
                                    <option value={3}>EMERALD</option>
                                    <option value={4}>BRONZE</option>
                                </TextField>
                            </FormControl>
                        </Grid>
                    }
                </Grid>
                <div className="form-end">
                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <FormControlLabel control={<Checkbox value={this.state.condition} onChange={() => this.setState({ condition: !this.state.condition })} />} label="J'ai lu et j'accepte les règles d'adhésion" />
                    </div>
                </div>
                <LoadingButton
                    className="btn-default btn-rounded flex flex-align-center flex-justify-center"
                    loading={this.state.loading}
                    disabled={!this.state.condition}
                    type={'submit'}
                    variant="contained"
                >
                    Inscription
                </LoadingButton>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} key="bottomright" open={this.state.error} autoHideDuration={10000} onClose={this.handleErrorAlertClose}>
                    <Alert onClose={this.handleErrorAlertClose} severity="error" sx={{ width: '100%' }}>
                        {this.state.message}
                    </Alert>
                </Snackbar>
            </form >
        )
    }
}