import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";

import React from "react";

import { Modal } from 'react-bootstrap';

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

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import useGeoLocation from "react-ipgeolocation";

import { PlageInvestissementService, AuthService, CampayService } from '../../../core/services'

import { moneyFormat } from '../../../core/utils/helpers'

import terms from '../../../assets/Terms-and-Conditions.pdf'
import conditions from '../../../assets/CONFIDENTIALITY POLICY I&P.pdf'

import { useForm } from 'react-hook-form';

import * as Redux from 'react-redux'

import { setLoadingTrue, setLoadingFalse } from '../../../core/reducers/app/actions'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingTrue: () => dispatch(setLoadingTrue()),
        setLoadingFalse: () => dispatch(setLoadingFalse())
    }
}

const mapStateToProps = (state) => ({ paiement: state.app.paiement });

const Register = (props) => {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [state, setState] = React.useState({
        role: 3,
        status: 'PARTICULIER',
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        profil: '',
        password: ''
    })

    const [message, setMessage] = React.useState('')

    const [numero, setNumero] = React.useState('')

    const [messagePay, setMessagePay] = React.useState('')

    const [methodPaiement, setMethodPaiement] = React.useState('OM')

    const [plage, setPlage] = React.useState([])

    const [visible, setVisible] = React.useState(false)

    const [etat, setEtat] = React.useState({
        loading: false,
        condition: false,
        showPassword: false,
        message: '',
        error: false,
    })

    const [paiement, setPaiement] = React.useState({
        pending: false,
        failed: false
    })

    // const subscribe = () => {
    //     // setVisible(true);
    //     if (+state.role === 4) {
    //         handleCheckRegister()
    //         return;
    //     }
    //     handleRegister();
    // }

    const hidePayement = () => {
        setVisible(false);
        setNumero('');
        setPaiement({
            pending: false,
            failed: false
        });
        setMessagePay('');
        setMethodPaiement('OM')
        setEtat({ ...etat, loading: false });
    }

    const payementDone = () => {
        setVisible(false);
        setNumero('');
        setPaiement({
            pending: false,
            failed: false
        });
        setMessagePay('');
        setMethodPaiement('OM')
    }

    const handleErrorAlertOpen = () => {
        setEtat({ ...etat, error: true });
    };

    const handleErrorAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setEtat({ ...etat, error: false });
    };

    const handleRegister = () => {
        setEtat({ ...etat, loading: true });
        props.setLoadingTrue();

        AuthService.register(state).then(
            () => {
                setEtat({ ...etat, loading: false });
                props.setLoadingFalse();
                props.switchPage("login");
                props.sendMessage("Votre compte a été créé avec succès. Vous pouvez à présent vous connecter avec vos d'identifiants");
            },
            error => {
                const rsMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(rsMessage);
                props.setLoadingFalse();
                setEtat({ ...etat, loading: false });
                handleErrorAlertOpen();
            }
        );
    }

    const handleCheckRegister = () => {
        setEtat({ ...etat, loading: true });

        AuthService.check(state).then(
            () => {
                if (+state.role === 4) {
                    setVisible(true);
                    return;
                }
                handleRegister();
            },
            error => {
                const rsMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(rsMessage);
                setEtat({ ...etat, loading: false });
                handleErrorAlertOpen();
            }
        );
    }

    const handelRoleChange = (value) => {
        setState(prevState => {
            return { ...prevState, role: +value };
        });

        if (+value === 4) {
            setState(prevState => {
                return { ...prevState, profil: getFirstPlage() };
            });
        } else {
            setState(prevState => {
                return { ...prevState, profil: '' };
            });
        }
    }

    const getSelectedPlage = () => {
        return (plage || []).find((item) => item.id === +state.profil)
    }

    const getFirstPlage = () => {
        if (plage) {
            return plage[0]?.id;
        }
        return ''
    }

    const countdown = (refrence) => {
        let x = setInterval(async () => {
            try {
                const rs = await CampayService.checkPayment(refrence);
                if (rs.status === "FAILED") {
                    clearInterval(x);
                    setPaiement({ pending: false, failed: true });
                    setMessagePay(`La transaction a échoué. Essayez à nouveau`);
                } else if (rs.status === "SUCCESSFUL") {
                    clearInterval(x);
                    payementDone()
                    handleRegister();
                } else if (rs.status === "PENDING") {
                    setPaiement({ pending: true, failed: false });
                }
            } catch (error) {
                console.log(error);
            }
        }, 5000);
    }

    const payer = async () => {
        setPaiement({ pending: true, failed: false });
        try {
            const rs = await CampayService.payInscription(numero, getSelectedPlage()?.frais_abonnement);
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
            console.log(error);
        }
    }

    React.useEffect(() => {
        function loadPlage() {
            PlageInvestissementService.getAll().then(
                (rs) => {
                    setPlage(rs.data.data);
                }
            );
        }

        loadPlage();
    }, [])


    const loc = useGeoLocation();

    return (
        <form className="login-form px-2 px-md-5 mt-4 mt-lg-0" onSubmit={handleSubmit(handleCheckRegister)}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                        <div className="d-flex flex-column align-items-center">
                            <h6 className="fw-bolder">Qui êtes-vous ?</h6>
                            <RadioGroup
                                row
                                className="d-flex justify-content-center flex-column flex-lg-row align-items-center"
                                value={state.role || 3}
                                onChange={(e, value) => handelRoleChange(value)}
                            >
                                <FormControlLabel value={3} control={<Radio />} label="Un porteur de projet" />
                                <FormControlLabel value={4} control={<Radio />} label="Un investisseur" />
                            </RadioGroup>
                        </div>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                        <div className="d-flex flex-column align-items-center">
                            <h6 className="fw-bolder">Quelle est votre personnalité juridique ?</h6>
                            <RadioGroup
                                row
                                className="d-flex justify-content-center flex-column flex-lg-row align-items-center"
                                value={state.status || "PARTICULIER"}
                                onChange={(e, value) => setState({ ...state, status: value })}
                            >
                                <FormControlLabel value="PARTICULIER" control={<Radio />} label="Personne physique (Individu)" />
                                <FormControlLabel value="ENTREPRISE" control={<Radio />} label="Personne morale (Entreprise)" />
                            </RadioGroup>
                        </div>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={state.status === 'PARTICULIER' ? 6 : 12}>
                    <FormControl sx={{ my: .5, width: "100%" }}>
                        <TextField
                            fullWidth
                            required
                            size="small"
                            autoFocus={true}
                            error={errors.nom}
                            {...register('nom', { required: "Le nom est obligatoire" })}
                            helperText={errors.nom && errors.nom?.message}
                            variant="filled"
                            label={state.status === 'PARTICULIER' ? "Nom" : "Nom de l'entité"}
                            placeholder={state.status === 'PARTICULIER' ? "Nom" : "Nom de l'entité"}
                            value={state.nom || ''}
                            onChange={(e) => { setValue('nom', e.target.value, { shouldTouch: true }); setState({ ...state, nom: e.target.value }) }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FaRegUser />
                                    </InputAdornment>
                                ),
                            }} />
                    </FormControl>
                </Grid>
                {state.status === 'PARTICULIER' &&
                    <Grid item xs={12} md={6}>
                        <FormControl sx={{ my: .5, width: "100%" }}>
                            <TextField
                                fullWidth
                                required
                                error={errors.prenom}
                                {...register('prenom', { required: "Le prenom est obligatoire" })}
                                helperText={errors.prenom && errors.prenom?.message}
                                size="small"
                                variant="filled"
                                label="Prenom"
                                placeholder="Prenom"
                                value={state.prenom || ''}
                                onChange={(e) =>{ setValue('prenom', e.target.value, { shouldTouch: true }); setState({ ...state, prenom: e.target.value }) }}
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
                    <FormControl sx={{ my: .5, width: "100%" }}>
                        <TextField
                            fullWidth
                            required
                            size="small"
                            type="email"
                            error={errors.email}
                            {...register('email', { required: "L'email est obligatoire" })}
                            helperText={errors.email && errors.email?.message}
                            variant="filled"
                            label="Email"
                            placeholder="example@domaine.com"
                            value={state.email || ''}
                            onChange={(e) => { setValue('email', e.target.value, { shouldTouch: true }); setState({ ...state, email: e.target.value }) }}
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
                    <FormControl sx={{ my: .5, width: "100%" }}>
                        <TextField
                            fullWidth
                            required
                            size="small"
                            type="tel"
                            error={errors.telephone}
                            {...register('telephone', { required: "Le numéro de téléphone est obligatoire" })}
                            helperText={errors.telephone && errors.telephone?.message}
                            variant="filled"
                            label="Numéro de téléphone"
                            placeholder="Numéro de téléphone"
                            value={state.telephone || ''}
                            onChange={(e) => { setValue('telephone', e.target.value, { shouldTouch: true }); setState({ ...state, telephone: e.target.value }) }}
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
                    <FormControl sx={{ my: .5, width: "100%" }}>
                        <TextField
                            fullWidth
                            required
                            size="small"
                            error={errors.password}
                            {...register('password', {
                                required: "Le mot de passe est obligatoire",
                                minLength: {
                                    value: 6,
                                    message: "Le mot de passe doit contenir au moins 6 caractères"
                                }
                            })}
                            helperText={errors.password && errors.password?.message}
                            variant="filled"
                            label="Mot de passe"
                            placeholder="*******"
                            type={etat.showPassword ? 'text' : 'password'}
                            value={state.password || ''}
                            onChange={(e) => { setValue('password', e.target.value, { shouldTouch: true }); setState({ ...state, password: e.target.value }) }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <RiLock2Line />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onChange={(e) => setEtat({ ...etat, showPassword: !etat.showPassword })}
                                            onClick={(e) => setEtat({ ...etat, showPassword: !etat.showPassword })}
                                            edge="end"
                                        >
                                            {etat.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} />
                    </FormControl>
                </Grid>
                {state.role === 4 &&
                    <Grid item xs={12} md={12}>
                        <FormControl sx={{ my: .5, width: "100%" }}>
                            <TextField
                                fullWidth
                                required
                                size="small"
                                select
                                error={errors.profil}
                                {...register('profil', {
                                    required: "Choissez une plage d'investissement"
                                })}
                                helperText={errors.profil && errors.profil?.message}
                                SelectProps={{
                                    native: true,
                                }}
                                InputLabelProps={{ shrink: true }}
                                variant="filled"
                                label="Plage d'investissement"
                                placeholder="Plage d'investissement"
                                value={state.profil || getFirstPlage()}
                                onChange={(e) => { setValue('profil', e.target.value, { shouldTouch: true }); setState({ ...state, profil: e.target.value }) }}
                            >
                                {(plage || []).map((item) => (
                                    <option key={item.id} value={item.id}>{item.type}</option>
                                ))}
                            </TextField>
                            <p className="text-muted">
                                 <strong>{getSelectedPlage()?.type}</strong> =&gt; Investissement dans des projets dont la valeur du financement est comprise entre <strong>{(!getSelectedPlage()?.montant_min || getSelectedPlage()?.montant_min === 0) ? getSelectedPlage()?.min : moneyFormat(getSelectedPlage()?.montant_min) + ' XAF'}</strong> et <strong>{(!getSelectedPlage()?.montant_max || getSelectedPlage()?.montant_max === 0) ? getSelectedPlage()?.max : moneyFormat(getSelectedPlage()?.montant_max) + ' XAF'}</strong><br />
                                Frais d'abonnement annuel: <strong>{moneyFormat(getSelectedPlage()?.frais_abonnement)} XAF</strong></p>
                        </FormControl>
                    </Grid>
                }
            </Grid>
            <div className="mt-2 d-flex justify-content-center">
                <small className="fw-bolder">NB: Les champs avec (*) sont obligatoires</small>
            </div>
            <div className="form-end-register">
                <FormControlLabel control={<Checkbox value={etat.condition || false} onChange={() => setEtat({ ...etat, condition: !etat.condition })} />} label=""/> <label>J'accepte les <a href={terms} target="_blank" rel="noreferrer" className="text-decoration-none">Conditions générales d'utilisation</a> et <a href={conditions} target="_blank" rel="noreferrer" className="text-decoration-none">Politique de confidentialité</a>.</label>
            </div>

            <LoadingButton
                className="btn-default btn-rounded flex flex-align-center flex-justify-center w-75"
                loading={etat.loading}
                disabled={!etat.condition}
                type={'submit'}
                variant="contained"
            >
                Inscription
            </LoadingButton>
            <Modal
                show={visible}
                onHide={hidePayement}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton={!paiement.pending}>
                    <Modal.Title>Paiement des frais d'abonnement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-1 small lh-base">Vous avez choisi le profil <strong>{getSelectedPlage()?.type}</strong> qui à une plage d'investissement entre <strong>{(!getSelectedPlage()?.montant_min || getSelectedPlage()?.montant_min === 0) ? getSelectedPlage()?.min : moneyFormat(getSelectedPlage()?.montant_min) + ' XAF'}</strong> à <strong>{(!getSelectedPlage()?.montant_max || getSelectedPlage()?.montant_max === 0) ? getSelectedPlage()?.max : moneyFormat(getSelectedPlage()?.montant_max) + ' XAF'}</strong></p>
                    <p className="mb-1 small text-muted">Pour ce profil d'investissement, vous allez payer <strong>{moneyFormat(getSelectedPlage()?.frais_abonnement)} XAF</strong> comme frais d'abonnement</p>
                    <hr />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
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
                            <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
                                <h6 className="fw-bolder">Votre numéro de téléphone</h6>
                                <PhoneInput
                                    defaultCountry={loc.country}
                                    placeholder="Numéro de téléphone"
                                    value={numero || ''}
                                    onChange={setNumero}
                                />

                            </FormControl>
                            <p className="my-2 text-center fw-bolder">{messagePay}</p>
                            {/* <FormControl component="fieldset" sx={{ my: .5, width: "100%" }}>
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
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={etat.error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
                <Alert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
                    {message}
                </Alert>
            </Snackbar>
        </form >
    )
}

export default Redux.connect(mapStateToProps, mapDispatchToProps)(Register);