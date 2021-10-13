import * as React from 'react';
import Popup from 'reactjs-popup';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
// import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
// import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import { connect } from "react-redux";

import { MdAddCircle } from 'react-icons/md';

import { MdRemoveCircle } from "react-icons/md";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { CurrencyInput } from '../../../../components';
import { ScrollToTopOnMount } from '../../../../navigation/ScrollToTop'

import { UserService, MembreService, SecteurService, ProjetService } from '../../../../core/services'
import { user } from '../../../../core/reducers/auth/actions'
import { setLoadingFalse, setLoadingTrue } from '../../../../core/reducers/app/actions'

import expert from '../../../../assets/img/profil.jpg'

import { Pays } from '../../../../data';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// import moment from 'moment'

const steps = ['Porteur du projet', 'Projet', 'Équipe', 'Resumé'];

const Input = styled('input')({
    display: 'none',
});

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProjetAdd = (props) => {

    const { auth } = props;

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed] = React.useState({});
    const [modalOpen, setModalOpen] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);
    const [tab, setTab] = React.useState('new');
    const [message, setMessage] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);

    const [secteurs, setSecteurs] = React.useState([]);
    const [userMembres, setUserMembres] = React.useState([]);
    const [membres, setMembres] = React.useState([]);

    const [logo, setLogo] = React.useState(null);
    const [doc_presentation, setDocPresentation] = React.useState(null);

    const [statutNewMembre, setStatutNewMembre] = React.useState('Chef du projet');
    const [membreSelect, setMembreSelect] = React.useState(null);
    const [membre, setMembre] = React.useState(null);

    const [medias, setMedias] = React.useState([]);

    const [projet, setProjet] = React.useState(null);

    // const [user, setUser] = React.useState(null);

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const allStepsCompleted = () => {
        return Object.keys(completed).length === steps.length;
    };

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

    const changeDocumentFiscal = (e, type) => {
        let formData = new FormData();
        formData.append('type', type);
        formData.append('document', e.target.files[0]);
        props.setLoadingTrue();
        UserService.updateDocumentFiscal(auth?.user?.id, formData).then(
            (rs) => {
                // setUser(rs.data.data);
                props.setUserData(rs.data.data);
                props.setLoadingFalse();
                setMessage(type + ' mis à jour avec succès');
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
                handleErrorAlertOpen();
            }
        )
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getSelectedSecteur = () => {
        console.log(projet?.secteur);
        return (secteurs || []).find(secteur => secteur.id === +projet?.secteur);
    };

    const loadSecteur = () => {
        SecteurService.getAll().then(response => {
            setSecteurs(response.data.data);
        });
    }

    const loadMembres = () => {
        UserService.getMembres(3).then(response => {
            setUserMembres(response.data.data);
        });
    };

    const saveMembre = (e) => {
        e.preventDefault();
        props.setLoadingTrue();
        if (tab === 'new') {
            let formData = new FormData();
            for (const key of Object.keys(membre)) {
                formData.append(key, membre[key])
            }
            MembreService.addMembre(formData).then(
                (response) => {
                    setMembres([...membres, { membre: response.data.data, statut: statutNewMembre }]);
                    setUserMembres([...userMembres, response.data.data]);
                    props.setLoadingFalse();
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
                    handleErrorAlertOpen();
                });
        } else {
            if (!membreSelect) {
                const checkMembre = membres.find(elt => elt?.membre?.id === membreSelect.id);
                if (!checkMembre) {
                    setMembres([...membres, { membre: membreSelect, statut: statutNewMembre }]);
                }
            }
            props.setLoadingFalse();
        }

        setStatutNewMembre('Chef du projet');
        setMembreSelect(null);
        setMembre({
            nom_complet: '',
            email: '',
            telephone: '',
            photo: null,
            user: auth.user.id
        });

        setModalOpen(false)
    }

    const setNewMembre = (e) => {
        const membre = userMembres.find(elt => elt?.id === +e.target.value);
        setMembreSelect(membre);
    }

    const removeNewMembre = (id) => {
        const result = membres.filter((ele) => ele?.membre?.id !== id);
        setMembres(result);
    }

    const saveProjet = (e) => {
        e.preventDefault();
        let formData = new FormData();

        props.setLoadingTrue();

        if (logo) {
            formData.append('logo', logo)
        }

        if (doc_presentation) {
            formData.append('doc_presentation', doc_presentation)
        }

        formData.append('projet', JSON.stringify(projet))

        for (const media of medias) {
            formData.append('medias[]', media)
        }

        if (membres.length > 0) {
            formData.append('membres', JSON.stringify(membres))
        }

        ProjetService.addProjet(formData).then(
            (rs) => {
                props.setLoadingFalse();
                props.history.goBack();
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
                handleErrorAlertOpen();
            }
        );
    }

    React.useEffect(() => {
        loadSecteur();
        loadMembres();
        setMembre({
            nom_complet: '',
            email: '',
            telephone: '',
            photo: null,
            user: auth.user.id
        })
        setProjet({
            intitule: '',
            secteur: '',
            site: '',
            niveau: 'IDEE',
            financement: '',
            pays_activite: 'Cameroun',
            ville_activite: '',
            description: '',
            user: auth.user.id
        })
    }, [auth.user.id, props])

    const changeProjetLogo = (e) => {
        setLogo(e.target.files[0])
    };

    const changeUser = (e, data) => {
        e.preventDefault();

        props.setLoadingTrue();

        if (!e.target.value) {
            props.setLoadingFalse();
            return;
        }

        UserService.updateProfil(auth?.user.id, data).then(
            (rs) => {
                props.setUserData(rs.data.data);
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
                handleErrorAlertOpen();
            }
        );
    };

    const changeCni = (e) => {
        let formData = new FormData();
        formData.append('cni', e.target.files[0]);

        props.setLoadingTrue();

        UserService.updateCNI(auth?.user.id, formData).then(
            (rs) => {
                props.setUserData(rs.data.data);
                props.setLoadingFalse();
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

    const changeProjetDoc = (e) => {
        setDocPresentation(e.target.files[0])
    };

    const changeProjetMedia = (e) => {
        let files = [...e.target.files];
        setMedias([...medias, ...files]);
    };

    const removeFileInArray = (file) => {
        const result = medias.filter((ele) => {
            return ele.name !== file.name;
        });
        setMedias(result);
    }

    const changeNewMembrePhoto = (e) => {
        setMembre({ ...membre, photo: e.target.files[0] })
    };

    const convertFileSize = (file) => {
        const size = file?.size?.toString();
        if (size?.length < 7) {
            return `${Math.round(+size / 1024).toFixed(2)} KB`
        }
        return `${(Math.round(+size / 1024) / 1000).toFixed(2)} MB`
    };

    const checkFiscal = (fiscal) => {
        if (auth.user?.documents_fiscaux?.filter(value => value?.type === fiscal).length > 0)
            return true;
        else
            return false;
    };

    const checkUserDone = () => {
        if (!auth?.user?.telephone) {
            return false;
        }

        if (!auth?.user?.email) {
            return false;
        }

        if (!auth?.user?.pays) {
            return false;
        }

        if (!auth?.user?.ville) {
            return false;
        }

        if (auth.user?.status === "PARTICULIER") {
            if (!auth.user?.cni) {
                return false;
            }
            return true;
        }

        if (!checkFiscal('CARTE_CONTRIBUABLE')) {
            return false;
        }

        if (!checkFiscal('RCCM')) {
            return false;
        }

        return true;
    };

    return (
        <div className="container">
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit">
                            <span className="projet-stepper-label">{label}</span>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <form onSubmit={saveProjet}>
                <div className="projet-create-content rounded shadow border bg-white">
                    {activeStep === 0 &&
                        <div>
                            <ScrollToTopOnMount />
                            <h3 className="fw-bolder">Informations personnelles</h3>
                            <p className="text-muted mb-5">Vérifier vos informations personnelles avant de procédé à la creation de votre projet. <span className="fw-bolder">NB: Les chapms avec (*) sont obligatoires</span></p>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    <p className="fw-bolder fs-5">{auth.user?.status === 'PARTICULIER' ? "Votre nom complet" : "Nom de l'entreprise"}</p>
                                    <p className="fs-6">{auth.user.nom_complet}</p>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={12} md={6} className="mt-1">
                                    {auth.user.email ? (
                                        <>
                                            <p className="fw-bolder fs-5">Email</p>
                                            <p className="fs-6">{auth.user.email}</p>
                                            <Divider></Divider>
                                        </>
                                    ) : (
                                        <TextField
                                            fullWidth
                                            required
                                            variant="filled"
                                            label="Email"
                                            size="small"
                                            placeholder="Email"
                                            value={auth?.user?.email}
                                            onBlur={(e) => changeUser(e, { email: e.target.value })}
                                        />
                                    )}
                                </Grid>
                                <Grid item xs={12} md={6} className="mt-1">
                                    {auth.user.telephone ? (
                                        <>
                                            <p className="fw-bolder fs-5">Numéro de téléphone</p>
                                            <p className="fs-6">{auth.user.telephone}</p>
                                            <Divider></Divider>
                                        </>
                                    ) : (
                                        <TextField
                                            fullWidth
                                            required
                                            variant="filled"
                                            size="small"
                                            label="Numéro de téléphone"
                                            placeholder="Numéro de téléphone"
                                            value={auth?.user?.telephone}
                                            onBlur={(e) => changeUser(e, { telephone: e.target.value })}
                                        />
                                    )}
                                </Grid>
                                <Grid item xs={12} md={6} className="mt-1">
                                    {auth.user.pays ? (
                                        <>
                                            <p className="fw-bolder fs-5">{auth.user?.status === 'PARTICULIER' ? "Pays de résidence" : "Pays d'activité"}</p>
                                            <p className="fs-6">{auth.user.pays}</p>
                                            <Divider></Divider>
                                        </>
                                    ) : (
                                        <TextField
                                            fullWidth
                                            required
                                            size="small"
                                            select
                                            SelectProps={{
                                                native: true,
                                            }}
                                            defaultValue=""
                                            variant="filled"
                                            label={auth.user?.status === 'PARTICULIER' ? "Pays de résidence" : "Ville d'activité"}
                                            placeholder={auth.user?.status === 'PARTICULIER' ? "Pays de résidence" : "Pays d'activité"}
                                            onChange={(e) => changeUser(e, { pays: e.target.value })}
                                        >
                                            <option>Aucun</option>
                                            {Pays.map((item, index) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </TextField>
                                    )}
                                </Grid>
                                <Grid item xs={12} md={6} className="mt-1">
                                    {auth.user.ville ? (
                                        <>
                                            <p className="fw-bolder fs-5">{auth.user?.status === 'PARTICULIER' ? "Ville de résidence" : "Ville d'activité"}</p>
                                            <p className="fs-6">{auth.user.ville}</p>
                                            <Divider></Divider>
                                        </>
                                    ) : (
                                        <TextField
                                            fullWidth
                                            required
                                            size="small"
                                            variant="filled"
                                            label={auth.user?.status === 'PARTICULIER' ? "Ville de résidence" : "Ville d'activité"}
                                            placeholder={auth.user?.status === 'PARTICULIER' ? "Ville de résidence" : "Ville d'activité"}
                                            value={auth?.user?.ville}
                                            onBlur={(e) => changeUser(e, { ville: e.target.value })}
                                        />
                                    )}
                                </Grid>
                                {(auth.user?.status === 'ENTREPRISE') && (
                                    <Grid item xs={12} md={12}>
                                        <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
                                            <h5 className="fw-bolder">Création de l'entreprise ?</h5>
                                            <RadioGroup
                                                row
                                                aria-label="etat"
                                                name="row-etat-buttons-group"
                                                value={user.anciennete}
                                                onChange={(e, value) => changeUser(e, { anciennete: value })}
                                            >
                                                <FormControlLabel value={-1} control={<Radio />} label="Moins d'un an six mois" />
                                                <FormControlLabel value={1} control={<Radio />} label="Plus ou égale à un an" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                )}
                                <Grid item xs={12} md={12} className="mt-1">
                                    <FormControl sx={{ m: 1, width: '100%' }}>
                                        {auth.user.status === 'PARTICULIER' && (
                                            <>
                                                {auth.user?.cni ? (
                                                    <label className="cursor-pointer d-flex align-items-center flex-column w-25">
                                                        <Chip className="w-100"
                                                            icon={<CheckCircleIcon />}
                                                            label="CNI/Passport"
                                                            color={"success"}
                                                            variant="outlined"
                                                        />
                                                    </label>
                                                ) : (
                                                    <label htmlFor="doc-fisc-rccm" className="cursor-pointer d-flex align-items-center flex-column w-25">
                                                        <Input id="doc-fisc-rccm" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={changeCni} />
                                                        <Chip className="cursor-pointer w-100" component="span"
                                                            icon={<AddCircleOutlineIcon />}
                                                            label="CNI/Passport"
                                                            color={"error"}
                                                            variant="outlined"
                                                        />
                                                        <p className="small text-muted">Cliquez pour importer votre CNI<br />(ce documemt est obligatoire)</p>
                                                    </label>
                                                )}
                                            </>
                                        )}

                                        {auth.user.status === 'ENTREPRISE' && (
                                            <div className="d-flex justify-content-start align-items-center flex-wrap w-100">
                                                {(auth.user?.anciennete && auth.user?.anciennete === -1) &&
                                                    <>
                                                        <div className="d-flex justify-content-start align-items-start flex-column flex-wrap me-4 mb-4">
                                                            {checkFiscal('RCCM') ? (
                                                                <Chip
                                                                    icon={<CheckCircleIcon />}
                                                                    label="RCCM"
                                                                    color={"success"}
                                                                    variant="outlined"
                                                                />
                                                            ) : (
                                                                <label htmlFor="doc-fisc-rccm" className="cursor-pointer d-flex align-items-center flex-column">
                                                                    <Input id="doc-fisc-rccm" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={(e) => changeDocumentFiscal(e, 'RCCM')} />
                                                                    <Chip className="cursor-pointer w-100" component="span"
                                                                        icon={<AddCircleOutlineIcon />}
                                                                        label="RCCM"
                                                                        color={"error"}
                                                                        variant="outlined"
                                                                    />
                                                                    <p className="small text-muted">Cliquez pour importer le RCCM<br />(ce documemt est obligatoire)</p>
                                                                </label>
                                                            )}
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-start flex-column flex-wrap me-4 mb-4">
                                                            {checkFiscal('CARTE_CONTRIBUABLE') ? (
                                                                <Chip
                                                                    icon={<CheckCircleIcon />}
                                                                    label="Carte contribuable"
                                                                    color={"success"}
                                                                    variant="outlined"
                                                                />
                                                            ) : (
                                                                <label htmlFor="doc-fisc-cc" className="cursor-pointer d-flex align-items-center flex-column">
                                                                    <Input id="doc-fisc-cc" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={(e) => changeDocumentFiscal(e, 'CARTE_CONTRIBUABLE')} />
                                                                    <Chip className="cursor-pointer w-100" component="span"
                                                                        icon={<AddCircleOutlineIcon />}
                                                                        label="Carte contribuable"
                                                                        color={"error"}
                                                                        variant="outlined"
                                                                    />
                                                                    <p className="small text-muted">Cliquez pour importer la carte contribuable<br />(ce documemt est obligatoire)</p>
                                                                </label>
                                                            )}
                                                        </div>
                                                    </>
                                                }

                                                {(auth.user?.anciennete && auth.user?.anciennete === 1) &&
                                                    <>
                                                        <div className="d-flex justify-content-start align-items-start flex-column flex-wrap me-4 mb-4">
                                                            {checkFiscal('RCCM') ? (
                                                                <Chip
                                                                    icon={<CheckCircleIcon />}
                                                                    label="RCCM"
                                                                    color={"success"}
                                                                    variant="outlined"
                                                                />
                                                            ) : (
                                                                <label htmlFor="doc-fisc-rccm" className="cursor-pointer d-flex align-items-center flex-column">
                                                                    <Input id="doc-fisc-rccm" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={(e) => changeDocumentFiscal(e, 'RCCM')} />
                                                                    <Chip className="cursor-pointer w-100" component="span"
                                                                        icon={<AddCircleOutlineIcon />}
                                                                        label="RCCM"
                                                                        color={"error"}
                                                                        variant="outlined"
                                                                    />
                                                                    <p className="small text-muted">Cliquez pour importer le RCCM</p>
                                                                </label>
                                                            )}
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-start flex-column flex-wrap me-4 mb-4">
                                                            {checkFiscal('CARTE_CONTRIBUABLE') ? (
                                                                <Chip
                                                                    icon={<CheckCircleIcon />}
                                                                    label="Carte contribuable"
                                                                    color={"success"}
                                                                    variant="outlined"
                                                                />
                                                            ) : (
                                                                <label htmlFor="doc-fisc-cc" className="cursor-pointer d-flex align-items-center flex-column">
                                                                    <Input id="doc-fisc-cc" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={(e) => changeDocumentFiscal(e, 'CARTE_CONTRIBUABLE')} />
                                                                    <Chip className="cursor-pointer w-100" component="span"
                                                                        icon={<AddCircleOutlineIcon />}
                                                                        label="Carte contribuable"
                                                                        color={"error"}
                                                                        variant="outlined"
                                                                    />
                                                                    <p className="small text-muted">Cliquez pour importer la carte contribuable</p>
                                                                </label>
                                                            )}
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-start flex-column flex-wrap me-4 mb-4">
                                                            {checkFiscal('DSF') ? (
                                                                <Chip
                                                                    icon={<CheckCircleIcon />}
                                                                    label="DSF"
                                                                    color={"success"}
                                                                    variant="outlined"
                                                                />
                                                            ) : (
                                                                <label htmlFor="doc-fisc-dsf" className="cursor-pointer d-flex align-items-center flex-column">
                                                                    <Input id="doc-fisc-dsf" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={(e) => changeDocumentFiscal(e, 'DSF')} />
                                                                    <Chip className="cursor-pointer w-100" component="span"
                                                                        icon={<AddCircleOutlineIcon />}
                                                                        label="DSF"
                                                                        color={"secondary"}
                                                                        variant="outlined"
                                                                    />
                                                                    <p className="small text-muted">Cliquez pour importer la DSF</p>
                                                                </label>
                                                            )}
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-start flex-column flex-wrap me-4 mb-4">
                                                            {checkFiscal('COMPTE_EXPLOITATION') ? (
                                                                <Chip
                                                                    icon={<CheckCircleIcon />}
                                                                    label="Compte d'exploitation"
                                                                    color={"success"}
                                                                    variant="outlined"
                                                                />
                                                            ) : (
                                                                <label htmlFor="doc-fisc-ce" className="cursor-pointer d-flex align-items-center flex-column">
                                                                    <Input id="doc-fisc-ce" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={(e) => changeDocumentFiscal(e, 'COMPTE_EXPLOITATION')} />
                                                                    <Chip className="cursor-pointer w-100" component="span"
                                                                        icon={<AddCircleOutlineIcon />}
                                                                        label="Compte d'exploitation"
                                                                        color={"secondary"}
                                                                        variant="outlined"
                                                                    />
                                                                    <p className="small text-muted">Cliquez pour importer le compte d'exploitation</p>
                                                                </label>
                                                            )}
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-start flex-column flex-wrap me-4 mb-4">
                                                            {checkFiscal('ANR') ? (
                                                                <Chip
                                                                    icon={<CheckCircleIcon />}
                                                                    label="ANR"
                                                                    color={"success"}
                                                                    variant="outlined"
                                                                />
                                                            ) : (
                                                                <label htmlFor="doc-fisc-anr" className="cursor-pointer d-flex align-items-center flex-column">
                                                                    <Input id="doc-fisc-anr" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={(e) => changeDocumentFiscal(e, 'ANR')} />
                                                                    <Chip className="cursor-pointer w-100" component="span"
                                                                        icon={<AddCircleOutlineIcon />}
                                                                        label="ANR"
                                                                        color={"secondary"}
                                                                        variant="outlined"
                                                                    />
                                                                    <p className="small text-muted">Cliquez pour importer l'ANR</p>
                                                                </label>
                                                            )}
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-start flex-column flex-wrap me-4 mb-4">
                                                            {checkFiscal('ATTESTATION_DOMICILIATION_BANCAIRE') ? (
                                                                <Chip
                                                                    icon={<CheckCircleIcon />}
                                                                    label="Attestation domiciliation bancaire"
                                                                    color={"success"}
                                                                    variant="outlined"
                                                                />
                                                            ) : (
                                                                <label htmlFor="doc-fisc-adb" className="cursor-pointer d-flex align-items-center flex-column">
                                                                    <Input id="doc-fisc-adb" accept="image/jpeg,image/gif,image/png,application/pdf" type="file" onChange={(e) => changeDocumentFiscal(e, 'ATTESTATION_DOMICILIATION_BANCAIRE')} />
                                                                    <Chip className="cursor-pointer w-100" component="span"
                                                                        icon={<AddCircleOutlineIcon />}
                                                                        label="Attestation domiciliation bancaire"
                                                                        color={"secondary"}
                                                                        variant="outlined"
                                                                    />
                                                                    <p className="small text-muted">Cliquez pour importer l'attestation domiciliation bancaire</p>
                                                                </label>
                                                            )}
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        )}
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>
                    }
                    {activeStep === 1 &&
                        <div>
                            <ScrollToTopOnMount />
                            <h3 className="fw-bolder">Informations générales du projet</h3>
                            <p className="text-muted mb-5">Rempliser les champs suivant avant de soumettre votre projet. <span className="fw-bolder">NB: Les chapms avec (*) sont obligatoires</span></p>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <TextField
                                            fullWidth
                                            required
                                            size="small"
                                            variant="filled"
                                            label="Nom du projet"
                                            placeholder="Nom du projet"
                                            value={projet.intitule}
                                            onChange={(e) => setProjet({ ...projet, intitule: e.target.value })}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <TextField
                                            fullWidth
                                            required
                                            select
                                            size="small"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            InputLabelProps={{ shrink: true }}
                                            variant="filled"
                                            label="Secteur d'activité"
                                            placeholder="Secteur d'activité"
                                            value={projet.secteur}
                                            onChange={(e) => setProjet({ ...projet, secteur: e.target.value })}
                                        >
                                            <option value=''>Secteur d'activité</option>
                                            {secteurs.map((item, index) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.libelle}
                                                </option>
                                            ))}
                                        </TextField>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
                                        <h5 className="fw-bolder">Quel est le niveau d'évolution du projet ?</h5>
                                        <RadioGroup
                                            row
                                            aria-label="etat"
                                            name="row-etat-buttons-group"
                                            value={projet.niveau}
                                            onChange={(e, value) => setProjet({ ...projet, niveau: value })}
                                        >
                                            <Tooltip title="Votre projet est encore à la phase d'idée" TransitionComponent={Zoom} disableInteractive arrow>
                                                <FormControlLabel value="IDEE" control={<Radio />} label="Idée" />
                                            </Tooltip>
                                            <Tooltip title="Votre projet est déjà encours de réalisation" TransitionComponent={Zoom} disableInteractive arrow>
                                                <FormControlLabel value="PROTOTYPE" control={<Radio />} label="Prototype" />
                                            </Tooltip>
                                            <Tooltip title="Votre projet est déjà sur le marché" TransitionComponent={Zoom} disableInteractive arrow>
                                                <FormControlLabel value="SUR_MARCHE" control={<Radio />} label="Sur le marché" />
                                            </Tooltip>
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <CurrencyInput
                                            label="Besoin d'un financement de"
                                            placeholder="Financement"
                                            required
                                            minimumValue="0"
                                            color="primary"
                                            digitGroupSeparator=" "
                                            size="small"
                                            variant="filled"
                                            textAlign="left"
                                            value={projet.financement}
                                            currencySymbol="XAF"
                                            onChange={(event, value) => setProjet({ ...projet, financement: value })}
                                        />
                                        {/* <TextField
                                                fullWidth
                                                required
                                                variant="filled"
                                                type="number"
                                                InputProps={{
                                                    inputMode: 'numeric',
                                                    pattern: '[0-9]*',
                                                    startAdornment: <InputAdornment position="start">XAF</InputAdornment>
                                                }}

                                                label="Besoin d'un financement de"
                                                placeholder="Financement"
                                                value={projet.financement}
                                                onChange={(e) => setProjet({ ...projet, financement: e.target.value })}
                                            /> */}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            variant="filled"
                                            type="url"
                                            label="Site web du projet"
                                            placeholder="Site web"
                                            value={projet.site}
                                            onChange={(e) => setProjet({ ...projet, site: e.target.value })}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            select
                                            required
                                            SelectProps={{
                                                native: true,
                                            }}
                                            InputLabelProps={{ shrink: true }}
                                            variant="filled"
                                            label="Pays d'activité"
                                            placeholder="Pays d'activité"
                                            value={projet.pays_activite}
                                            onChange={(e) => setProjet({ ...projet, pays_activite: e.target.value })}
                                        >
                                            <option value={''}>Aucun</option>
                                            {Pays.map((item, index) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </TextField>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            required
                                            variant="filled"
                                            label="Ville d'activité"
                                            placeholder="Ville d'activité"
                                            value={projet.ville_activite}
                                            onChange={(e) => setProjet({ ...projet, ville_activite: e.target.value })}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            required
                                            variant="filled"
                                            label="Brève description de votre projet"
                                            placeholder="Décrivez votre projet en quelques mots"
                                            multiline
                                            rows={5}
                                            value={projet.description}
                                            onChange={(e) => setProjet({ ...projet, description: e.target.value })}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={5}>
                                    <Divider variant="middle" />
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <h5 className="fw-bolder">Logo du projet</h5>
                                        <label htmlFor="photo-profile">
                                            <Input accept="image/*" id="photo-profile" type="file" onChange={changeProjetLogo} />
                                            <Button className="btn-default" variant="contained" component="span">
                                                Ajouter
                                            </Button>
                                            <div className="text-muted small">Le logo doit être une image de type <span className="fw-bolder">jpg ou png</span></div>
                                        </label>
                                        {logo && (
                                            <List sx={{ width: '100%' }}>
                                                <ListItem
                                                    disableGutters
                                                    secondaryAction={
                                                        <IconButton color="primary" onClick={() => setLogo(null)} edge="end">
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    }
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <ImageIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={logo.name} secondary={convertFileSize(logo)} />
                                                </ListItem>
                                            </List>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <Divider variant="middle" />
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <h5 className="fw-bolder">Document de présentation du projet</h5>
                                        <label htmlFor="doc-presentation">
                                            <Input accept="image/jpeg,image/gif,image/png,application/pdf" id="doc-presentation" type="file" onChange={changeProjetDoc} />
                                            <Button className="btn-default" variant="contained" component="span">
                                                Ajouter
                                            </Button>
                                            <div className="text-muted small">Le document doit être un fichier de type <span className="fw-bolder">pdf, doc, pptx, mp4 ou mp3</span></div>
                                        </label>
                                        {doc_presentation && (
                                            <List sx={{ width: '100%' }}>
                                                <ListItem
                                                    disableGutters
                                                    secondaryAction={
                                                        <IconButton color="primary" onClick={() => setDocPresentation(null)} edge="end">
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    }
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <ImageIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={doc_presentation.name} secondary={convertFileSize(doc_presentation)} />
                                                </ListItem>
                                            </List>
                                        )}
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={7}>
                                    <Divider variant="middle" />
                                    <FormControl sx={{ m: 1, width: "100%" }}>
                                        <h5 className="fw-bolder">Autres fichiers</h5>
                                        {/* {medias} */}
                                        <label htmlFor="projet-media">
                                            <Input id="projet-media" multiple type="file" onChange={changeProjetMedia} />
                                            <Button className="btn-default" variant="contained" component="span">
                                                Ajouter
                                            </Button>
                                            <div className="text-muted small">Vous pouvez ajouter tous types de fichier.</div>
                                        </label>
                                        {medias.length > 0 && (
                                            <List sx={{ width: '100%' }}>
                                                {medias.map((file, index) => (
                                                    <div>
                                                        <ListItem
                                                            key={index}
                                                            disableGutters
                                                            secondaryAction={
                                                                <IconButton color="primary" onClick={() => removeFileInArray(file)} edge="end">
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            }
                                                        >
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <ImageIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary={file.name} secondary={convertFileSize(file)} />
                                                        </ListItem>
                                                        <Divider />
                                                    </div>
                                                ))}
                                            </List>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <Divider />
                                </Grid>
                            </Grid>
                        </div>
                    }
                    {activeStep === 2 &&
                        <div>
                            <ScrollToTopOnMount />
                            <h3 className="fw-bolder">Informations sur votre équipe</h3>
                            <p className="text-muted mb-5">Cliquez sur l'icon "+" pour ajouter un membre de votre équipe.</p>
                            <div className="row g-3">
                                {membres.length > 0 &&
                                    membres.map((item, index) => (
                                        <div key={index} className="col-sm-12 col-md-4 col-lg-3 p-0">
                                            <div className="projet-add-expert-item">
                                                <div style={{ width: '100%', position: 'relative' }}>
                                                    <img className="projet-add-expert-image" alt="Expert I&P" src={(item.membre?.photo && item.membre?.photo !== 'null') ? item.membre?.photo : expert} />
                                                    <div className="projet-add-expert-item-remove-btn" onClick={() => removeNewMembre(item.membre?.id)}>
                                                        <MdRemoveCircle className="projet-add-expert-button-modal" fill="#c5473b" size={40} />
                                                    </div>
                                                </div>
                                                <div className="projet-add-expert-name">{item.membre?.nom_complet}</div>
                                                <div className="projet-add-expert-bibio">{item?.statut}</div>

                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="col-sm-12 col-md-4 col-lg-3 p-0">
                                    <Tooltip title="Ajouter un membre dans votre équipe" TransitionComponent={Zoom} disableInteractive arrow>
                                        <div className="projet-add-expert-item projet-add-expert-modal" onClick={() => setModalOpen(true)}>
                                            <MdAddCircle className="projet-add-expert-button-modal" fill="#c5473b" size={40} />
                                        </div>
                                    </Tooltip>
                                </div>
                                <Popup
                                    position="top center"
                                    open={modalOpen}
                                    closeOnDocumentClick={false}
                                    closeOnEscape={false}
                                    onClose={() => setModalOpen(false)}
                                >
                                    <div className="projet-add-modal">
                                        <button className="projet-add-modal-close" onClick={() => setModalOpen(false)}>
                                            &times;
                                        </button>
                                        <div className="projet-add-modal-content">
                                            <div className="tab-head">
                                                <div className="tab-nav">
                                                    <div onClick={() => setTab("new")} className={tab === "new" ? "tab-nav-item active" : "tab-nav-item"} >Nouveau</div>
                                                    <div onClick={() => setTab("exist")} className={tab === "exist" ? "tab-nav-item active" : "tab-nav-item"}>Existant</div>
                                                </div>
                                            </div>
                                            <div>
                                                {/* <form onSubmit={saveMembre}> */}
                                                {tab === "new" ? (
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={12}>
                                                            <FormControl sx={{ m: 1, width: "100%" }}>
                                                                <TextField
                                                                    size="small"
                                                                    fullWidth
                                                                    required
                                                                    variant="filled"
                                                                    label="Nom complet"
                                                                    placeholder="Nom complet"
                                                                    value={membre.nom_complet}
                                                                    onChange={(e) => setMembre({ ...membre, nom_complet: e.target.value })}
                                                                />
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <FormControl sx={{ m: 1, width: "100%" }}>
                                                                <TextField
                                                                    size="small"
                                                                    fullWidth
                                                                    required
                                                                    variant="filled"
                                                                    type="email"
                                                                    label="Email"
                                                                    placeholder="example@domaine.com"
                                                                    value={membre.email}
                                                                    onChange={(e) => setMembre({ ...membre, email: e.target.value })}
                                                                />
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <FormControl sx={{ m: 1, width: "100%" }}>
                                                                <TextField
                                                                    size="small"
                                                                    fullWidth
                                                                    required
                                                                    variant="filled"
                                                                    type="tel"
                                                                    label="Téléphone"
                                                                    placeholder="Téléphone"
                                                                    value={membre.telephone}
                                                                    onChange={(e) => setMembre({ ...membre, telephone: e.target.value })}
                                                                />
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} md={12}>
                                                            <FormControl sx={{ m: 1, width: "100%" }}>
                                                                <TextField
                                                                    size="small"
                                                                    fullWidth
                                                                    required
                                                                    variant="filled"
                                                                    type="tel"
                                                                    label="Role dans le projet"
                                                                    placeholder="Role dans le projet"
                                                                    InputLabelProps={{ shrink: true }}
                                                                    value={statutNewMembre}
                                                                    onChange={(e) => setStatutNewMembre(e.target.value)}
                                                                />
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} md={12}>
                                                            <FormControl sx={{ m: 1, width: "100%" }}>
                                                                <label htmlFor="photo-profile">
                                                                    <Input accept="image/*" id="photo-profile" type="file" onChange={changeNewMembrePhoto} />
                                                                    <Button variant="contained" component="span">
                                                                        Ajouter une photo de profil
                                                                    </Button>
                                                                    <div className="text-muted small">La photo doit être de type <span className="fw-bolder">jpg ou png</span></div>
                                                                </label>

                                                                {membre.photo && (
                                                                    <List sx={{ width: '100%' }}>
                                                                        <ListItem disableGutters>
                                                                            <ListItemAvatar>
                                                                                <Avatar>
                                                                                    <ImageIcon />
                                                                                </Avatar>
                                                                            </ListItemAvatar>
                                                                            <ListItemText primary={membre.photo.name} secondary={convertFileSize(membre.photo)} />
                                                                        </ListItem>
                                                                    </List>
                                                                )}
                                                            </FormControl>
                                                            <Divider variant="middle" />
                                                        </Grid>
                                                    </Grid>
                                                ) : (
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={12}>
                                                            <FormControl sx={{ m: 1, width: "100%" }} size="small">
                                                                <TextField
                                                                    fullWidth
                                                                    required
                                                                    select
                                                                    SelectProps={{
                                                                        native: true,
                                                                    }}
                                                                    InputLabelProps={{ shrink: true }}
                                                                    variant="filled"
                                                                    label="Membres"
                                                                    placeholder="Membres"
                                                                    value={membreSelect?.id}
                                                                    onChange={setNewMembre}
                                                                >
                                                                    {userMembres.map((item, index) => (
                                                                        <option key={item.id} value={item.id}>
                                                                            {item.nom_complet}
                                                                        </option>
                                                                    ))}
                                                                </TextField>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} md={12}>
                                                            <FormControl component="fieldset" sx={{ m: 1, width: "100%" }}>
                                                                <TextField
                                                                    size="small"
                                                                    fullWidth
                                                                    required
                                                                    variant="filled"
                                                                    type="tel"
                                                                    label="Role dans le projet"
                                                                    placeholder="Role dans le projet"
                                                                    InputLabelProps={{ shrink: true }}
                                                                    value={statutNewMembre}
                                                                    onChange={(e) => setStatutNewMembre(e.target.value)}
                                                                />
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                )}

                                                {/* <Divider variant="middle" /> */}

                                                <div className="flex flex-justify-center mt-1">
                                                    <Button
                                                        color="secondary"
                                                        variant="contained"
                                                        className="mr-1"
                                                        onClick={() => setModalOpen(false)}
                                                    >
                                                        Fermer
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        type="button"
                                                        onClick={saveMembre}
                                                    >
                                                        Enregistrer
                                                    </Button>
                                                </div>
                                                {/* </form> */}
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                        </div>
                    }
                    {activeStep === 3 && (
                        <div>
                            <ScrollToTopOnMount />
                            <h3 className="fw-bolder">Résumé du projet</h3>
                            <p className="text-muted mb-5">Vérifier les informations de votre projet avant de le soumettre. Il n'y aura pas de retour en arrière après soumission de votre projet.</p>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    <p className="fw-bolder fs-5">Nom du projet</p>
                                    <p className="fs-6">{projet?.intitule}</p>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={12} md={6} className="mt-1">
                                    <p className="fw-bolder fs-5">Secteur d'activité</p>
                                    <p className="fs-6">{getSelectedSecteur()?.libelle}</p>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={12} md={6} className="mt-1">
                                    <p className="fw-bolder fs-5">Niveau d'évolution</p>
                                    <p className="fs-6">{projet?.niveau}</p>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={12} md={12} className="mt-1">
                                    <p className="fw-bolder fs-5">Besoin d'un financement de</p>
                                    <p className="fs-6">{projet?.financement} XAF</p>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={12} md={12} className="mt-1">
                                    <p className="fw-bolder fs-5">Site web</p>
                                    <p className="fs-6">{projet?.site}</p>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={12} md={6} className="mt-1">
                                    <p className="fw-bolder fs-5">Pays d'activité</p>
                                    <p className="fs-6">{projet?.pays_activite}</p>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={12} md={6} className="mt-1">
                                    <p className="fw-bolder fs-5">Ville d'activité</p>
                                    <p className="fs-6">{projet?.ville_activite}</p>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={12} md={12} className="mt-1">
                                    <p className="fw-bolder fs-5">Bréve description du projet</p>
                                    <p className="fs-6">{projet?.description}</p>
                                    <Divider></Divider>
                                </Grid>

                                <Grid item xs={12} md={6} className="mt-1">
                                    <p className="fw-bolder fs-5">Logo du projet</p>
                                    {logo && (
                                        <List sx={{ width: '100%' }}>
                                            <ListItem disableGutters>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={logo?.name} secondary={convertFileSize(logo)} />
                                            </ListItem>
                                        </List>
                                    )}
                                </Grid>

                                <Grid item xs={12} md={6} className="mt-1">
                                    <p className="fw-bolder fs-5">Document de présentation</p>
                                    {doc_presentation && (
                                        <List sx={{ width: '100%' }}>
                                            <ListItem disableGutters>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={doc_presentation?.name} secondary={convertFileSize(doc_presentation)} />
                                            </ListItem>
                                        </List>
                                    )}
                                </Grid>

                                <Grid item xs={12} md={12} className="mt-1">
                                    <Divider></Divider>
                                    <p className="fw-bolder fs-5">Autres fichiers</p>
                                    <List sx={{ width: '100%' }}>
                                        {medias.map((file, index) => (
                                            <div>
                                                <ListItem
                                                    key={index}
                                                    disableGutters
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <ImageIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={file?.name} secondary={convertFileSize(file)} />
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        ))}
                                    </List>
                                </Grid>

                                <Grid item xs={12} md={12} className="mt-1">
                                    <Divider></Divider>
                                    <p className="fw-bolder fs-5">Votre équipe</p>
                                    <div className="row g-3">
                                        {membres.length > 0 &&
                                            membres.map((item, index) => (
                                                <div key={index} className="col-sm-12 col-md-4 col-lg-3 p-0">
                                                    <div className="projet-add-expert-item">
                                                        <div style={{ width: '100%', position: 'relative' }}>
                                                            <img className="projet-add-expert-image" alt="Expert I&P" src={item.membre?.photo && item.membre?.photo !== 'null' ? item.membre?.photo : expert} />
                                                            {/* <div className="projet-add-expert-item-remove-btn" onClick={() => removeNewMembre(item.membre?.id)}>
                                                                <Tooltip title="Retirer ce membre dans votre équipe" TransitionComponent={Zoom} disableInteractive arrow>
                                                                    <MdRemoveCircle className="projet-add-expert-button-modal" fill="#c5473b" size={40} />
                                                                </Tooltip>
                                                            </div> */}
                                                        </div>
                                                        <div className="projet-add-expert-name">{item.membre?.nom_complet}</div>
                                                        <div className="projet-add-expert-bibio">{item?.statut}</div>

                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                </div>
                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        className="btn-default"
                        variant="outlined"
                        type="button"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Précedent
                    </Button>
                    {activeStep !== steps.length - 1 && (
                        <Button
                            className="btn-default"
                            variant="contained"
                            type="button"
                            disabled={!checkUserDone()}
                            onClick={handleNext} sx={{ mr: 1 }}
                        >
                            Suivant
                        </Button>
                    )}

                    {activeStep === steps.length - 1 && (
                        <Button
                            className="btn-default"
                            variant="contained"
                            type="submit"
                            sx={{ mr: 1 }}
                        >
                            Enregistrer
                        </Button>
                    )}
                </Box>
            </form>
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
        </div>
    );
}

const mapStateToProps = (state) => ({ auth: state.auth })

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (payload) => dispatch(user(payload)),
        setLoadingTrue: (payload) => dispatch(setLoadingTrue()),
        setLoadingFalse: (payload) => dispatch(setLoadingFalse())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjetAdd);