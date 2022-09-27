import React from 'react';
import { connect } from "react-redux";

import moment from 'moment'
import { Modal } from 'react-bootstrap';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { UserService, PlageInvestissementService, CampayService, PaiementService } from '../../../../core/services';
import { setLoadingFalse, setLoadingTrue } from '../../../../core/reducers/app/actions'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import useGeoLocation from "react-ipgeolocation";

import { moneyFormat, sleep } from '../../../../core/utils/helpers'
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
    const [selectedPlage, setSelectedPlage] = React.useState(null);
    const [supPay, setSupPay] = React.useState(0);
    const [plage, setPlage] = React.useState([]);
    const [numero, setNumero] = React.useState('')
    const [messagePay, setMessagePay] = React.useState('')
    const [methodPaiement, setMethodPaiement] = React.useState('OM')
    const [paiement, setPaiement] = React.useState({
        pending: false,
        failed: false
    })
    const [password, setPassword] = React.useState({
        old: '',
        new: ''
    });

    const [visible, setVisible] = React.useState(false);

    const loc = useGeoLocation();

    const countdown = async (refrence) => {
        let status = "PENDING";
        setPaiement({ ...paiement, pending: true, failed: false });

        while (status === "PENDING" || status === "ERROR") {
            try {
                const rs = await CampayService.checkPayment(refrence);
                status = rs.status;
                if (rs.status !== "PENDING") {
                    break;
                }
                await sleep(5000);
            } catch (error) {
                status = "ERROR";
                console.error(error);
                break;
            }
        }

        switch (status) {
            case "SUCCESSFUL":
                setPaiement({ pending: false, failed: false });
                hidePayement();
                changeUserPlage(refrence);
                break;
            case "FAILED":
                setPaiement({ pending: false, failed: true });
                setMessagePay(`La transaction a échoué. Essayez à nouveau`);
                break;
            default:
                // setPaiement({ pending: false, failed: true });
                // setMessagePay(`La transaction a échoué. Essayez à nouveau`);
                await countdown(refrence)
                break;
        }
    }

    const payer = async () => {
        setPaiement({ pending: true, failed: false });
        try {
            const montant = supPay <= 0 ? moneyFormat(selectedPlage?.frais_abonnement) : moneyFormat(supPay);
            const rs = await CampayService.payPlage(numero, montant);
            let messageP = 'La transaction ';

            if (methodPaiement === 'MOMO') {
                messageP = messageP + 'MTN Mobile Money'
            }

            if (methodPaiement === 'OM') {
                messageP = messageP + 'Orange Money'
            }

            setMessagePay(`${messageP} a été initiée. Veuillez composer ${rs.ussd_code} sur votre téléphone pour valider la transaction.`);

            countdown(rs.reference);
        } catch (error) {
            setPaiement({ pending: false, failed: true });
            console.error(error);
        }
    }

    const hidePayement = () => {
        setVisible(false);
        setMessage('');
        setMessagePay('');
        setSupPay(0);
        setSelectedPlage(null)
    }

    const openChangePlage = (item) => {
        setVisible(true);
        setSelectedPlage(item);
        setSupPay(+item.frais_abonnement - (+user.profil_invest?.frais_abonnement))
    }

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

    const changeUserPlage = (trans = "") => {
        setLoading(true);
        props.setLoadingTrue();
        UserService.updateProfil(user.id, { profil: selectedPlage?.id }).then(
            async (rs) => {
                setUser(rs.data.data);
                const montant = supPay <= 0 ? moneyFormat(selectedPlage?.frais_abonnement) : moneyFormat(supPay);
                await PaiementService.save(user?.id, {
                    trans_id: trans,
                    methode: methodPaiement,
                    telephone: numero,
                    montant,
                    type: "PROFIL",
                    etat: "REUSSI"
                });
                props.setUserData(rs.data.data);
                setLoading(false);
                props.setLoadingFalse();
                setMessage('Plage d\'investissement mis à jour avec succès');
                handleSuccessAlertOpen()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                props.setLoadingFalse();
                setMessage(resMessage);
                setLoading(false);
                handleErrorAlertOpen();
            }
        );
    };

    const changeUser = (e) => {
        e.preventDefault();

        setLoading(true);
        props.setLoadingTrue();

        const data = user;
        delete data.nom_complet;
        delete data.created_at;
        delete data.role_data;
        delete data.anciennete_complet;
        delete data.role_data;
        delete data.documents_fiscaux;
        delete data.email_verified_at;
        delete data.profil_invest;
        delete data.updated_at;
        delete data.status;
        delete data.folder;
        delete data.role;

        UserService.updateProfil(user.id, data).then(
            (rs) => {
                setUser(rs.data.data);
                props.setUserData(rs.data.data);
                setLoading(false);
                props.setLoadingFalse();
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
                props.setLoadingFalse();
                setLoading(false);
                handleErrorAlertOpen();
            }
        );
    };

    const changePassword = (e) => {
        e.preventDefault();
        setLoading(true);
        props.setLoadingTrue();
        UserService.updatePassword(user.id, password).then(
            (rs) => {
                setLoading(false);
                props.setLoadingFalse();
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
                props.setLoadingFalse();
                setLoading(false);
                handleErrorAlertOpen();
            }
        );
    };

    const changePhoto = (e) => {
        let formData = new FormData();
        formData.append('photo', e.target.files[0]);
        props.setLoadingTrue();
        UserService.updatePhoto(user.id, formData).then(
            (rs) => {
                setUser(rs.data.data);
                props.setLoadingFalse();
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
                props.setLoadingFalse();
                handleErrorAlertOpen();
            }
        )
    };

    const changeRCCM = (e) => {
        let formData = new FormData();
        formData.append('type', 'RCCM');
        formData.append('document', e.target.files[0]);
        setLoading(true);
        props.setLoadingTrue();
        UserService.updateDocumentFiscal(user.id, formData).then(
            (rs) => {
                setUser(rs.data.data);
                props.setUserData(rs.data.data);
                props.setLoadingFalse();
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
                props.setLoadingFalse();
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
        props.setLoadingTrue();
        UserService.updateDocumentFiscal(user.id, formData).then(
            (rs) => {
                setUser(rs.data.data);
                props.setUserData(rs.data.data);
                setLoading(false);
                props.setLoadingFalse();
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
                props.setLoadingFalse();
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
        console.log(props.auth.user);
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
                            Plage d'investissement
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
                                    <div className="d-flex justify-content-center align-items-center my-1">
                                        <span className="me-3">CNI/Passport</span>
                                        {!user?.cni && (
                                            <HighlightOffIcon color="primary" />
                                        )}
                                    </div>

                                    <label className="me-2" htmlFor="cni-passport">
                                        <input className="d-none" id="cni-passport" type="file" onChange={changeCni} />
                                        <Button component="span" variant="contained" size="small">
                                            {user?.cni ? "Mettre à jour" : "Importer"}
                                        </Button>
                                    </label>

                                    {user?.cni && (
                                        <img src={user?.cni} alt={`${user?.nom_complet} CNI`} width="250" className="rounded shadow mt-2" />
                                    )}
                                </div>
                            )}

                            {user?.status === 'ENTREPRISE' && (
                                <>
                                    <div className="mt-2 w-100 text-center">
                                        <Divider />
                                        <div className="d-flex justify-content-center align-items-center my-1">
                                            <span className="me-3">RCCM</span>
                                            {!checkFiscal('RCCM') && (
                                                <HighlightOffIcon color="primary" />
                                            )}
                                            {checkFiscal('RCCM') && (
                                                <CheckCircleIcon color="success" />
                                            )}
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center">
                                            <label className="me-2" htmlFor="fiscal-rccm">
                                                <input className="d-none" id="fiscal-rccm" type="file" onChange={changeRCCM} />
                                                <LoadingButton
                                                    loading={loading}
                                                    variant="contained"
                                                    component="span"
                                                    size="small"
                                                >
                                                    {checkFiscal('RCCM') ? "Mettre à jour" : "Importer"}
                                                </LoadingButton>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt-2 w-100 text-center">
                                        <Divider />
                                        <div className="d-flex justify-content-center align-items-center my-1">
                                            <span className="me-3">Carte contribuable</span>
                                            {!checkFiscal('CARTE_CONTRIBUABLE') && (
                                                <HighlightOffIcon color="primary" />
                                            )}
                                            {checkFiscal('CARTE_CONTRIBUABLE') && (
                                                <CheckCircleIcon color="success" />
                                            )}
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center">
                                            <label className="me-2" htmlFor="fiscal-carte-contribuable">
                                                <input className="d-none" id="fiscal-carte-contribuable" type="file" onChange={changeCarteContribuable} />
                                                <LoadingButton
                                                    loading={loading}
                                                    variant="contained"
                                                    component="span"
                                                    size="small"
                                                >
                                                    {checkFiscal('CARTE_CONTRIBUABLE') ? "Mettre à jour" : "Importer"}
                                                </LoadingButton>
                                            </label>
                                        </div>
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
                                                        value={user?.pays || ''}
                                                        onChange={(e) => setUser({ ...user, pays: e.target.value })}
                                                    >
                                                        <option hidden value="">{user?.status === 'PARTICULIER' ? "Pays de résidence" : "Pays d'activité"}</option>
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
                                    <div className="row mb-3 g-4 text-center">
                                        {(plage || []).map((item, index) => (
                                            <div className="col-md-6 col-lg-4" key={index}>
                                                <div className={item.id === user?.profil ? "card shadow border-success" : "card mb-4 shadow"}>
                                                    <div className={`card-header text-white ${item.id === user?.profil ? "bg-success" : "bg-primary"}`}>
                                                        <h4 className="my-0 fw-bolder">{item.type}</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <h1 className="card-title pricing-card-title">{moneyFormat(item.frais_abonnement)} FCFA</h1>
                                                        <p className="mt-2">
                                                            Possibilité d'investir sur des projets avec un besoin chiffre d'affaire prévissionnel compris entreprise&nbsp;
                                                            <strong>{(!item.montant_min || item.montant_min === 0) ? item.min : moneyFormat(item.montant_min) + ' FCFA'}</strong> et&nbsp;
                                                            <strong>{(!item.montant_max || item.montant_max === 0) ? item.max : moneyFormat(item.montant_max) + ' FCFA'}</strong>
                                                        </p>
                                                        {item.id === user?.profil && (<Button color="success" variant="contained" className="mt-2">Votre abonnement actuel</Button>)}
                                                        {item.id !== user?.profil && (<Button variant="contained" disabled={item.montant_max < user?.profil_invest?.montant_min} className="mt-2" onClick={() => openChangePlage(item)}>Souscrire</Button>)}
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
            </div >

            <Modal
                show={visible}
                onHide={hidePayement}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton={!loading}>
                    <Modal.Title>Changement votre plage</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Vous paierez un supplément de <strong>{supPay <= 0 ? moneyFormat(selectedPlage?.frais_abonnement) : moneyFormat(supPay)} FCFA</strong> pour changer votre profil en <strong>{selectedPlage?.type}</strong>. </p>
                    <hr />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
                                <h6 className="fw-bolder">Choisir le moyen de paiement</h6>
                                <RadioGroup
                                    row
                                    value={methodPaiement || 'OM'}
                                    onChange={(e, value) => setMethodPaiement(value)}
                                >
                                    <FormControlLabel value="OM" control={<Radio />} label="Orange Money" />
                                    <FormControlLabel value="MOMO" control={<Radio />} label="MTN Mobile Money" />
                                    {/* <FormControlLabel value="MASTER_CARD" control={<Radio />} label="Master card" /> */}
                                </RadioGroup>
                            </FormControl>
                            <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
                                <h6 className="fw-bolder">Votre numéro de téléphone</h6>
                                <PhoneInput
                                    defaultCountry={loc.country}
                                    placeholder="Numéro de téléphone"
                                    value={numero || ''}
                                    onChange={setNumero}
                                />

                            </FormControl>
                            <p className="my-2 text-center fw-bolder">{messagePay}</p>
                            {/* <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
                                <h6 className="fw-bolder">Votre carte bancaire</h6>
                                <input type="text" />
                            </FormControl> */}
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <LoadingButton
                                    className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                                    loading={paiement.pending}
                                    disabled={!numero}
                                    onClick={payer}
                                    variant="contained"
                                >
                                    Payer
                                </LoadingButton>
                            </div>
                        </Grid>
                    </Grid>
                </Modal.Body>
            </Modal>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrighterror" open={error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
                <Alert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrightsuccess" open={success} autoHideDuration={10000} onClose={handleSuccessAlertClose}>
                <Alert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div >
    );
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (payload) => dispatch(user(payload)),
        setLoadingTrue: () => dispatch(setLoadingTrue()),
        setLoadingFalse: () => dispatch(setLoadingFalse())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilPorteurProjet);