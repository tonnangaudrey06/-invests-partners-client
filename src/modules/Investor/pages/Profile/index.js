import * as React from 'react';
import { connect } from "react-redux";

import moment from 'moment'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { UserService, PlageInvestissementService } from '../../../../core/services'

import { moneyFormat } from '../../../../core/utils/helpers'
import { user } from '../../../../core/reducers/auth/actions'

import profile from '../../../../assets/img/profil.jpg';

import { Pays } from '../../../../data';

const Input = styled('input')({
    display: 'none',
});

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProfilPorteurProjet = (props) => {

    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [plage, setPlage] = React.useState([])
    const [password, setPassword] = React.useState({
        old: '',
        new: ''
    });

    const handleErrorAlertOpen = () => {
        setError(true);
    };

    const handleErrorAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };

    const handleSuccessAlertOpen = () => {
        setSuccess(true);
    };

    const handleSuccessAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
    };

    const changeCni = (e) => {
        let formData = new FormData();
        formData.append('cni', e.target.files[0]);
        UserService.updateCNI(user.id, formData).then(
            (rs) => {
                setUser(rs.data.data);
                props.setUserData(rs.data.data);
                setLoading(false);
                setMessage('CNI mis à jour avec succès');
                handleSuccessAlertOpen()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                handleErrorAlertOpen();
            }
        )
    };

    const changeUser = (e) => {
        e.preventDefault();

        setLoading(true);

        const data = user;
        delete data.nom_complet;
        delete data.created_at;
        delete data.role_data;
        delete data.anciennete_complet;
        delete data.role_data;
        delete data.documents_fiscaux;
        delete data.email_verified_at;
        delete data.updated_at;
        delete data.status;
        delete data.folder;
        delete data.role;

        UserService.updateProfil(user.id, data).then(
            (rs) => {
                setUser(rs.data.data);
                props.setUserData(rs.data.data);
                setLoading(false);
                setMessage('Profil mis à jour avec succès');
                handleSuccessAlertOpen()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setLoading(false);
                handleErrorAlertOpen();
            }
        );
    };

    const changePassword = (e) => {
        e.preventDefault();
        setLoading(true);
        UserService.updatePassword(user.id, password).then(
            (rs) => {
                setLoading(false);
                setMessage('Mot de passe mis à jour avec succès');
                handleSuccessAlertOpen()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setLoading(false);
                handleErrorAlertOpen();
            }
        );
    };

    const changePhoto = (e) => {
        let formData = new FormData();
        formData.append('photo', e.target.files[0]);
        UserService.updatePhoto(user.id, formData).then(
            (rs) => {
                setUser(rs.data.data);
                props.setUserData(rs.data.data);
                setMessage('Photo de profil mis à jour avec succès');
                handleSuccessAlertOpen()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                handleErrorAlertOpen();
            }
        )
    };

    const changeRCCM = (e) => {
        let formData = new FormData();
        formData.append('type', 'RCCM');
        formData.append('document', e.target.files[0]);
        setLoading(true);
        UserService.updateDocumentFiscal(user.id, formData).then(
            (rs) => {
                setUser(rs.data.data);
                props.setUserData(rs.data.data);
                setLoading(false);
                setMessage('RCCM mis à jour avec succès');
                handleSuccessAlertOpen()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
                handleErrorAlertOpen();
            }
        )
    };

    const changeCarteContribuable = (e) => {
        let formData = new FormData();
        formData.append('type', 'CARTE_CONTRIBUABLE');
        formData.append('document', e.target.files[0]);
        setLoading(true);
        UserService.updateDocumentFiscal(user.id, formData).then(
            (rs) => {
                setUser(rs.data.data);
                props.setUserData(rs.data.data);
                setLoading(false);
                setMessage('Carte contribuable mis à jour avec succès');
                handleSuccessAlertOpen()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
                handleErrorAlertOpen();
            }
        )
    };

    const checkFiscal = (fiscal) => {
        if (user?.documents_fiscaux?.filter(value => value?.type === fiscal).length > 0)
            return true;
        else
            return false;
    };

    React.useEffect(() => {
        setUser(props.auth.user)
        function loadPlage() {
            PlageInvestissementService.getAll().then(
                (rs) => {
                    setPlage(rs.data.data);
                }
            );
        }

        loadPlage();
    }, [props])

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="nav nav-pills nav-fill profile-nav" role="tablist">
                        <button className="nav-link active fw-bolder fs-5 mr-1" id="nav-basic-tab" data-bs-toggle="tab" data-bs-target="#nav-basic" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Information personelles
                        </button>
                        <button className="nav-link fw-bolder fs-5 mr-1" id="nav-securite-tab" data-bs-toggle="tab" data-bs-target="#nav-securite" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Securité
                        </button>
                        <button className="nav-link fw-bolder fs-5" id="nav-abonnement-tab" data-bs-toggle="tab" data-bs-target="#nav-abonnement" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Abonnement
                        </button>
                    </div>
                </div>
            </div>

            <div className="container border bg-white rounded shadow my-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <label className="avatar-cover" htmlFor="photo-profile">
                                <Input accept="image/*" id="photo-profile" type="file" onChange={changePhoto} />
                                <img style={{ width: 150, height: 150 }} src={user?.photo ? user?.photo : profile} className="img-fluid rounded-circle" alt={user.nom_complet} width="150" />
                            </label>

                            <div className="mt-2">
                                <p className="fw-bold fs-4">{user.nom_complet}</p>
                                <p className="text-black-50">{user.email}</p>
                            </div>

                            {user?.status === 'PARTICULIER' && (
                                <div className="mt-2 w-100 text-center">
                                    <Divider />
                                    <FormControl sx={{ m: 1, width: "100%" }} className="mt-2">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <label className="me-2" htmlFor="cni-passport">
                                                <Input id="cni-passport" type="file" onChange={changeCni} />
                                                <Button className="btn-default" variant="contained" component="span">
                                                    {user?.cni ? "Changer" : "Ajouter"} votre CNI/Passport
                                                </Button>
                                            </label>
                                            {!user?.cni && (
                                                <HighlightOffIcon color="primary" />
                                            )}
                                        </div>

                                        {user?.cni && (
                                            <img src={user?.cni} alt={`${user?.nom_complet} CNI`} width="250" className="rounded shadow mt-2" />
                                        )}
                                    </FormControl>
                                </div>
                            )}

                            {user?.status === 'ENTREPRISE' && (
                                <>
                                    <div className="mt-2 w-100 text-center">
                                        <Divider />
                                        <FormControl sx={{ m: 1, width: "100%" }} className="mt-2">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <label className="me-2" htmlFor="fiscal-rccm">
                                                    <Input id="fiscal-rccm" type="file" onChange={changeRCCM} />
                                                    <LoadingButton loading={loading} className="btn-default" variant="contained" component="span">
                                                        {checkFiscal('RCCM') ? "Changer" : "Ajouter"} votre RCCM
                                                    </LoadingButton>
                                                </label>
                                                {!checkFiscal('RCCM') && (
                                                    <HighlightOffIcon color="error" />
                                                )}

                                                {checkFiscal('RCCM') && (
                                                    <CheckCircleIcon color="success" />
                                                )}
                                            </div>
                                        </FormControl>
                                    </div>
                                    <div className="mt-2 w-100 text-center">
                                        <Divider />
                                        <FormControl sx={{ m: 1, width: "100%" }} className="mt-2">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <label className="me-2" htmlFor="fiscal-carte-contribuable">
                                                    <Input id="fiscal-carte-contribuable" type="file" onChange={changeCarteContribuable} />
                                                    <LoadingButton loading={loading} className="btn-default" variant="contained" component="span">
                                                        {checkFiscal('CARTE_CONTRIBUABLE') ? "Changer" : "Ajouter"} votre Carte contribuable
                                                    </LoadingButton>
                                                </label>
                                                {!checkFiscal('CARTE_CONTRIBUABLE') && (
                                                    <HighlightOffIcon color="error" />
                                                )}

                                                {checkFiscal('CARTE_CONTRIBUABLE') && (
                                                    <CheckCircleIcon color="success" />
                                                )}
                                            </div>
                                        </FormControl>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>

                    <div className="col-md-9 border-start">
                        <div className="tab-content" >
                            <div className="tab-pane fade show active" id="nav-basic" role="tabpanel" aria-labelledby="basic-tab">
                                <form onSubmit={changeUser}>
                                    <div className="p-3 py-5">
                                        <h3 className="fw-bolder">Informations de base</h3>
                                        <p className="text-muted mb-5">Modifier vos informations personnelles.</p>
                                        <Grid container spacing={2} sx={{ pb: 2 }}>
                                            <Grid item xs={12} md={user?.status === 'PARTICULIER' ? 6 : 12}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        autoFocus
                                                        InputLabelProps={{ shrink: true }}
                                                        label="Nom"
                                                        placeholder="Nom"
                                                        variant="filled"
                                                        value={user.nom}
                                                        onChange={(e) => setUser({ ...user, nom: e.target.value })}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            {user?.status === 'PARTICULIER' && (
                                                <Grid item xs={12} md={6}>
                                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            InputLabelProps={{ shrink: true }}
                                                            label="Prenom"
                                                            placeholder="Prenom"
                                                            variant="filled"
                                                            value={user.prenom}
                                                            onChange={(e) => setUser({ ...user, prenom: e.target.value })}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            )}
                                            <Grid item xs={12} md={6}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        InputLabelProps={{ shrink: true }}
                                                        variant="filled"
                                                        type="email"
                                                        label="Email"
                                                        placeholder="example@domaine.com"
                                                        value={user.email}
                                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        InputLabelProps={{ shrink: true }}
                                                        label="Téléphone"
                                                        variant="filled"
                                                        type="tel"
                                                        placeholder="Téléphone"
                                                        value={user.telephone}
                                                        onChange={(e) => setUser({ ...user, telephone: e.target.value })}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        InputLabelProps={{ shrink: true }}
                                                        select
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        label={user?.status === 'PARTICULIER' ? "Pays de résidence" : "Pays d'activité"}
                                                        variant="filled"
                                                        placeholder={user?.status === 'PARTICULIER' ? "Pays de résidence" : "Pays d'activité"}
                                                        value={user?.pays}
                                                        onChange={(e) => setUser({ ...user, pays: e.target.value })}
                                                    >
                                                        {Pays.map((item, index) => (
                                                            <option key={item} value={item}>
                                                                {item}
                                                            </option>
                                                            // <MenuItem key={index} value={item}>{item}</MenuItem>
                                                        ))}
                                                    </TextField>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        InputLabelProps={{ shrink: true }}
                                                        label={user?.status === 'PARTICULIER' ? "Ville de résidence" : "Ville d'activité"}
                                                        variant="filled"
                                                        placeholder={user?.status === 'PARTICULIER' ? "Ville de résidence" : "Ville d'activité"}
                                                        value={user.ville}
                                                        onChange={(e) => setUser({ ...user, ville: e.target.value })}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <MobileDatePicker
                                                        label={user?.status === 'PARTICULIER' ? "Date de naissance" : "Date de creation"}
                                                        allowSameDateSelection
                                                        cancelText="Annuler"
                                                        clearText="Effacer"
                                                        okText="OK"
                                                        value={new Date(user.date_naissance)}
                                                        onChange={(value) => setUser({ ...user, date_naissance: moment(value).format('YYYY[-]MM[-]DD') })}
                                                        renderInput={(params) => <TextField {...params} variant="filled" InputLabelProps={{ shrink: true }}
                                                            size="small" />}
                                                    />
                                                </FormControl>
                                            </Grid>

                                            {(user?.status === 'PARTICULIER') && (
                                                <Grid item xs={12} md={12}>
                                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            InputLabelProps={{ shrink: true }}
                                                            label="Profession"
                                                            placeholder="Profession"
                                                            variant="filled"
                                                            value={user.profession}
                                                            onChange={(e) => setUser({ ...user, profession: e.target.value })}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            )}

                                            <Grid item xs={12} md={12}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        InputLabelProps={{ shrink: true }}
                                                        label={user?.status === 'PARTICULIER' ? "Parcours" : "Histoire"}
                                                        placeholder={"Présenter vous en quelques mots"}
                                                        variant="filled"
                                                        multiline
                                                        rows={4}
                                                        value={user.parcours}
                                                        onChange={(e) => setUser({ ...user, parcours: e.target.value })}
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Divider></Divider>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <LoadingButton
                                                className="btn-default flex flex-align-center flex-justify-center"
                                                loading={loading}
                                                type='submit'
                                                variant="contained"
                                                sx={{ mr: 1 }}
                                            >
                                                Enregistrer
                                            </LoadingButton>
                                        </Box>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="nav-securite" role="tabpanel" aria-labelledby="securite-tab">
                                <form onSubmit={changePassword}>
                                    <div className="p-3 py-5">
                                        <h3 className="fw-bolder">Mot de passe</h3>
                                        <p className="text-muted mb-5">Modifier votre mot de passe.</p>
                                        <Grid container spacing={2} sx={{ pb: 2 }}>
                                            <Grid item xs={12} md={6}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        type="password"
                                                        label="Mot de passe actuel"
                                                        placeholder="Mot de passe actuel"
                                                        variant="filled"
                                                        value={password.old}
                                                        onChange={(e) => setPassword({ ...password, old: e.target.value })}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <FormControl sx={{ m: 1, width: "100%" }}>
                                                    <TextField
                                                        fullWidth
                                                        size="small"
                                                        type="password"
                                                        label="Nouveau mot de passe"
                                                        placeholder="Nouveau mot de passe"
                                                        variant="filled"
                                                        value={password.new}
                                                        onChange={(e) => setPassword({ ...password, new: e.target.value })}
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Divider></Divider>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <LoadingButton
                                                className="btn-default flex flex-align-center flex-justify-center"
                                                loading={loading}
                                                type='submit'
                                                variant="contained"
                                                sx={{ mr: 1 }}
                                            >
                                                Enregistrer
                                            </LoadingButton>
                                        </Box>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="nav-abonnement" role="tabpanel" aria-labelledby="abonnement-tab">
                                <div className="container my-5">
                                    <h3 className="fw-bolder">Plage d'investissement</h3>
                                    <p className="text-muted mb-5">Modifier votre plage d'investissement.</p>
                                    <div class="row card-deck mb-3 text-center">
                                        {(plage || []).map((item, index) => (
                                            <div className="col-md-4">
                                                <div class={item.id === user?.profil ? "card mb-4 box-shadow border-success" : "card mb-4 box-shadow" }>
                                                    <div class="card-header">
                                                        <h4 class="my-0 fw-bolder">{ item.type }</h4>
                                                    </div>
                                                    <div class="card-body">
                                                        <h1 class="card-title pricing-card-title">{ moneyFormat(item.frais_abonnement) } XAF</h1>
                                                        <p class="mt-3">
                                                            Peut investir sur des projets de { moneyFormat(item.montant_min) } XAF à { moneyFormat(item.montant_max) } XAF
                                                        </p>
                                                        {item.id === user?.profil && (<span class="badge bg-success p-2 mt-3">Votre abonnement actuel</span>)}
                                                        {item.id !== user?.profil && (<button type="button" class="mt-3 btn btn-sm btn-block btn-primary">souscrire</button>)}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} key="bottomrighterror" open={error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
                <Alert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} key="bottomrightsuccess" open={success} autoHideDuration={10000} onClose={handleSuccessAlertClose}>
                <Alert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (payload) => dispatch(user(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilPorteurProjet);