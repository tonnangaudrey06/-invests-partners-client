import React, { useState, useEffect } from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import { RiCoinsLine } from 'react-icons/ri';

import Button from '@mui/material/Button';

import { Modal } from 'react-bootstrap';

import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import useGeoLocation from "react-ipgeolocation";

import DashContainer from '../../components/DashContainer';
import RightSide from '../../components/RightSide';

import { ProjetService, CampayService } from '../../../../core/services';

import projetimg from "../../../../assets/img/projet.jpg";
import banner from "../../../../assets/img/manage.jpg";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { connect } from "react-redux";

import { setLoadingFalse, setLoadingTrue } from '../../../../core/reducers/app/actions'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProjectDetails = (props) => {
    const { user, match } = props;
    const { params: { id } } = match;

    const [projet, setProjet] = useState(null);

    const [rightSide, setRightSide] = useState("/info");

    const [paiement, setPaiement] = React.useState({
        pending: false,
        failed: false
    })

    const [etat, setEtat] = React.useState({
        message: '',
        error: false,
        success: false,
    })

    const [visible, setVisible] = React.useState(false)

    const [numero, setNumero] = React.useState('')

    const [messagePay, setMessagePay] = React.useState('')

    const [methodPaiement, setMethodPaiement] = React.useState('OM')

    const hidePayement = () => {
        setVisible(false);
    }

    const handleSuccessAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setEtat({ ...etat, success: false });
    };

    const handleErrorAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setEtat({ ...etat, error: false });
    };

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
                    setPaiement({ pending: false, failed: false });
                    setVisible(false);
                    handelValidation();
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
            const montant = user?.status === 'PARTICULIER' ? 15000 : 50000;
            const rs = await CampayService.payProjet(numero, montant);
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

    const handelValidation = () => {
        props.setLoadingTrue();
        ProjetService.valideProjet(projet?.id).then(
            (rs) => {
                props.setLoadingFalse();
                setEtat(prevEtat => { return { ...prevEtat, success: true } });
                setEtat(prevEtat => { return { ...prevEtat, message: 'Paiement effectué' } });
                loadProjet();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                props.setLoadingFalse();
                setEtat({ ...etat, message: resMessage });
                setEtat({ ...etat, error: true });
            }
        )
    }


    const loadProjet = () => {
        ProjetService.getOneProjet(id).then(
            (rs) => {
                setProjet(rs.data.data);
            }
        )
    }

    useEffect(() => {
        loadProjet();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match, user])

    const loc = useGeoLocation();

    const SideMenu = () => {
        return (
            <Navigation
                activeItemId={rightSide}
                onSelect={({ itemId }) => {
                    setRightSide(itemId)
                }}

                items={[
                    {
                        title: 'Informations sur le projet',
                        itemId: '/info'
                    },
                    {
                        title: 'Analyses effectuées',
                        itemId: '/analyse'
                    },
                    {
                        title: 'Actualités',
                        itemId: '/news',
                    },
                    {
                        title: 'Investissements',
                        itemId: '/invest',
                    },
                ]}
            />
        )
    }

    return (
        <div>
            <div className="projects-details-dashboard-top shadow" style={{ background: `url(${banner})` }}>
                <div className="projects-details-dashboard-top flex-column" >
                    <h1 className="title-container">{projet?.intitule}</h1>
                    {projet?.etat === 'ATTENTE_PAIEMENT' && (
                        <Button className="btn-default btn-rounded mt-2" variant="contained" startIcon={<RiCoinsLine />} onClick={() => setVisible(true)}>Payer les frais d'etude</Button>
                    )}
                </div>
                <div className="logo shadow">
                    <img src={projet?.logo ? projet?.logo : projetimg} alt="" />
                </div>
            </div>

            <DashContainer leftSide={<SideMenu />} rightSide={<RightSide form={rightSide} projet={projet} />} />

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
                    <p className="mb-1 small lh-base text-center">Vous allez payer <strong> {user?.status === 'PARTICULIER' ? '15 000' : '50 000'} XAF</strong> pour les frais études de votre projet</p>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <FormControl className="d-flex flex-column align-items-center mt-2" component="fieldset" sx={{ m: 1, width: "100%" }}>
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
                            <FormControl className="d-flex flex-column align-items-center mt-2" component="fieldset" sx={{ m: 1, width: "100%" }}>
                                <h6 className="fw-bolder">Votre numéro de téléphone</h6>
                                <PhoneInput
                                    sx={{ m: 1, width: "100%" }}
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

            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrighterror" open={etat.error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
                <Alert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
                    {etat.message}
                </Alert>
            </Snackbar>

            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomrightsuccess" open={etat.success} autoHideDuration={10000} onClose={handleSuccessAlertClose}>
                <Alert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%', textAlign: 'center' }}>
                    {etat.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.auth })

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingTrue: () => dispatch(setLoadingTrue()),
        setLoadingFalse: () => dispatch(setLoadingFalse())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);