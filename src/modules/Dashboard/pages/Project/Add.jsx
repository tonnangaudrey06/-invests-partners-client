import React from "react";
import Popup from "reactjs-popup";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import { connect } from "react-redux";

import { MdAddCircle } from "react-icons/md";

import { MdRemoveCircle } from "react-icons/md";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { CurrencyInput } from "../../../../components";
import { ScrollToTopOnMount } from "../../../../navigation/ScrollToTop";

import {
  UserService,
  MembreService,
  SecteurService,
  ProjetService,
} from "../../../../core/services";
import { user } from "../../../../core/reducers/auth/actions";
import {
  setLoadingFalse,
  setLoadingTrue,
} from "../../../../core/reducers/app/actions";

import expert from "../../../../assets/img/profil.jpg";

import { Pays } from "../../../../data";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const steps = ["Porteur du projet", "Détails du projet", `L'équipe`, "Resumé"];

const Input = styled("input")({
  display: "none",
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
  const [tab, setTab] = React.useState("new");
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [secteurs, setSecteurs] = React.useState([]);
  const [userMembres, setUserMembres] = React.useState([]);
  const [membres, setMembres] = React.useState([]);

  const [logo, setLogo] = React.useState(null);
  const [doc_presentation, setDocPresentation] = React.useState(null);

  const [statutNewMembre, setStatutNewMembre] =
    React.useState("Chef du projet");
  const [membreSelect, setMembreSelect] = React.useState(null);
  const [membre, setMembre] = React.useState(null);

  const [medias, setMedias] = React.useState([]);

  const [projet, setProjet] = React.useState(null);

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
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const handleSuccessAlertOpen = () => {
    setSuccess(true);
  };

  const handleSuccessAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
  };

  const changeDocumentFiscal = (e, type) => {
    let formData = new FormData();
    formData.append("type", type);
    formData.append("document", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updateDocumentFiscal(auth?.user?.id, formData).then(
      (rs) => {
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage(type + " mis à jour avec succès");
        handleSuccessAlertOpen();
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
    return (secteurs || []).find((secteur) => secteur.id === +projet?.secteur);
  };

  const loadSecteur = () => {
    SecteurService.getAll().then((response) => {
      setSecteurs(response.data.data);
    });
  };

  const loadMembres = () => {
    UserService.getMembres(3).then((response) => {
      setUserMembres(response.data.data);
    });
  };

  const saveMembre = (e) => {
    e.preventDefault();
    props.setLoadingTrue();
    if (tab === "new") {
      let formData = new FormData();
      for (const key of Object.keys(membre)) {
        formData.append(key, membre[key]);
      }
      MembreService.addMembre(formData).then(
        (response) => {
          setMembres([
            ...membres,
            { membre: response.data.data, statut: statutNewMembre },
          ]);
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
        }
      );
    } else {
      if (!membreSelect) {
        const checkMembre = membres.find(
          (elt) => elt?.membre?.id === membreSelect.id
        );
        if (!checkMembre) {
          setMembres([
            ...membres,
            { membre: membreSelect, statut: statutNewMembre },
          ]);
        }
      }
      props.setLoadingFalse();
    }

    setStatutNewMembre("Chef du projet");
    setMembreSelect(null);
    setMembre({
      nom_complet: "",
      email: "",
      telephone: "",
      photo: null,
      user: auth.user.id,
    });

    setModalOpen(false);
  };

  const setNewMembre = (e) => {
    const membre = userMembres.find((elt) => elt?.id === +e.target.value);
    setMembreSelect(membre);
  };

  const removeNewMembre = (id) => {
    const result = membres.filter((ele) => ele?.membre?.id !== id);
    setMembres(result);
  };

  const saveProjet = (e) => {
    e.preventDefault();
    let formData = new FormData();

    props.setLoadingTrue();

    if (logo) {
      formData.append("logo", logo);
    }

    if (doc_presentation) {
      formData.append("doc_presentation", doc_presentation);
    }

    formData.append("projet", JSON.stringify(projet));

    for (const media of medias) {
      formData.append("medias[]", media);
    }

    if (membres.length > 0) {
      formData.append("membres", JSON.stringify(membres));
    }

    // console.log(projet);

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
  };

  React.useEffect(() => {
    loadSecteur();
    loadMembres();
    setMembre({
      nom_complet: "",
      email: "",
      telephone: "",
      photo: null,
      user: auth.user.id,
    });
    setProjet({
      intitule: "",
      secteur: "",
      site: "",
      avancement: "IDEE",
      financement: "",
      pays_activite: "Cameroun",
      ville_activite: "",
      description: "",
      user: auth.user.id,
    });
  }, [auth.user.id, props]);

  const changeProjetLogo = (e) => {
    setLogo(e.target.files[0]);
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
        setMessage("Profil mis à jour avec succès");
        handleSuccessAlertOpen();
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
    formData.append("cni", e.target.files[0]);

    props.setLoadingTrue();

    UserService.updateCNI(auth?.user.id, formData).then(
      (rs) => {
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage("CNI mis à jour avec succès");
        handleSuccessAlertOpen();
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
    );
  };

  const changeProjetDoc = (e) => {
    setDocPresentation(e.target.files[0]);
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
  };

  const changeNewMembrePhoto = (e) => {
    setMembre({ ...membre, photo: e.target.files[0] });
  };

  const convertFileSize = (file) => {
    const size = file?.size?.toString();
    if (size?.length < 7) {
      return `${Math.round(+size / 1024).toFixed(2)} KB`;
    }
    return `${(Math.round(+size / 1024) / 1000).toFixed(2)} MB`;
  };

  const checkFiscal = (fiscal) => {
    if (
      auth.user?.documents_fiscaux?.filter((value) => value?.type === fiscal)
        .length > 0
    )
      return true;
    else return false;
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

    if (!checkFiscal("COMPTE_EXPLOITATION")) {
      return false;
    }

    if (!checkFiscal("CARTE_CONTRIBUABLE")) {
      return false;
    }

    if (!checkFiscal("RCCM")) {
      return false;
    }

    return true;
  };

  const checkProjetDone = () => {
    if (!doc_presentation) {
      return false;
    }

    if (!projet?.intitule) {
      return false;
    }

    if (!projet?.secteur) {
      return false;
    }

    if (!projet?.financement) {
      return false;
    }

    if (!projet?.ville_activite) {
      return false;
    }

    if (!projet?.description) {
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
      <div>
        <div className="projet-create-content rounded shadow border bg-white">
          {activeStep === 0 && (
            <div>
              <ScrollToTopOnMount />
              <h3 className="fw-bolder">Informations personnelles</h3>
              <p className="text-muted mb-5">
                Vérifier vos informations personnelles avant de procédé à la
                creation de votre projet.{" "}
                <span className="fw-bolder">
                  NB: Les chapms avec (*) sont obligatoires
                </span>
              </p>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <p className="fw-bolder fs-5">
                    {auth.user?.status === "PARTICULIER"
                      ? "Votre nom complet"
                      : "Nom de l'entreprise"}
                  </p>
                  <p className="fs-6">{auth.user.nom_complet}</p>
                </Grid>

                <Grid item xs={12} md={6} className="mt-1">
                  {auth.user.email ? (
                    <React.Fragment>
                      <p className="fw-bolder fs-5">Email</p>
                      <p className="fs-6">{auth.user.email}</p>
                    </React.Fragment>
                  ) : (
                    <TextField
                      fullWidth
                      required
                      variant="filled"
                      label="Email"
                      size="small"
                      placeholder="Email"
                      value={auth?.user?.email || ""}
                      onBlur={(e) => changeUser(e, { email: e.target.value })}
                    />
                  )}
                </Grid>

                <Grid item xs={12} md={6} className="mt-1">
                  {auth.user.telephone ? (
                    <React.Fragment>
                      <p className="fw-bolder fs-5">Numéro de téléphone</p>
                      <p className="fs-6">{auth.user.telephone}</p>
                    </React.Fragment>
                  ) : (
                    <TextField
                      fullWidth
                      required
                      variant="filled"
                      size="small"
                      label="Numéro de téléphone"
                      placeholder="Numéro de téléphone"
                      value={auth?.user?.telephone || ""}
                      onBlur={(e) =>
                        changeUser(e, { telephone: e.target.value })
                      }
                    />
                  )}
                </Grid>

                <Grid item xs={12} md={6} className="mt-1">
                  {auth.user.pays ? (
                    <React.Fragment>
                      <p className="fw-bolder fs-5">
                        {auth.user?.status === "PARTICULIER"
                          ? "Pays de résidence"
                          : "Pays d'activité de l'entreprise"}
                      </p>
                      <p className="fs-6">{auth.user.pays}</p>
                    </React.Fragment>
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
                      label={
                        auth.user?.status === "PARTICULIER"
                          ? "Pays de résidence"
                          : "Pays d'activité de l'entreprise"
                      }
                      placeholder={
                        auth.user?.status === "PARTICULIER"
                          ? "Pays de résidence"
                          : "Pays d'activité de l'entreprise"
                      }
                      onChange={(e) => changeUser(e, { pays: e.target.value })}
                    >
                      <option>
                        {auth.user?.status === "PARTICULIER"
                          ? "Pays de résidence"
                          : "Pays d'activité de l'entreprise"}
                      </option>
                      {Pays.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </TextField>
                  )}
                </Grid>

                <Grid item xs={12} md={6} className="mt-1">
                  {auth.user.ville ? (
                    <React.Fragment>
                      <p className="fw-bolder fs-5">
                        {auth.user?.status === "PARTICULIER"
                          ? "Ville de résidence"
                          : "Ville d'activité de l'entreprise"}
                      </p>
                      <p className="fs-6">{auth.user.ville}</p>
                    </React.Fragment>
                  ) : (
                    <TextField
                      fullWidth
                      required
                      size="small"
                      variant="filled"
                      label={
                        auth.user?.status === "PARTICULIER"
                          ? "Ville de résidence"
                          : "Ville d'activité de l'entreprise"
                      }
                      placeholder={
                        auth.user?.status === "PARTICULIER"
                          ? "Ville de résidence"
                          : "Ville d'activité de l'entreprise"
                      }
                      value={auth?.user?.ville || ""}
                      onBlur={(e) => changeUser(e, { ville: e.target.value })}
                    />
                  )}
                </Grid>

                {auth.user?.status === "ENTREPRISE" && (
                  <Grid item xs={12} md={12}>
                    <FormControl
                      component="fieldset"
                      sx={{ m: 1, width: "100%" }}
                    >
                      <h5 className="fw-bolder">
                        Anciennete de l'entreprise ?
                      </h5>
                      <RadioGroup
                        row
                        aria-label="etat"
                        name="row-etat-buttons-group"
                        value={user.anciennete || ""}
                        onChange={(e, value) =>
                          changeUser(e, { anciennete: value })
                        }
                      >
                        <FormControlLabel
                          value={-1}
                          control={<Radio />}
                          label="Moins d'un an six mois"
                        />
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="Plus ou égal à un an six mois"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                )}

                <Grid item xs={12} md={12}>
                  <div className="d-flex align-items-center flex-wrap gap-3">
                    {auth.user.status === "PARTICULIER" && (
                      <React.Fragment>
                        {auth.user?.cni ? (
                          <label className="cursor-pointer">
                            <Chip
                              className="w-100"
                              icon={<CheckCircleIcon />}
                              label="CNI/Passport"
                              color={"success"}
                              variant="outlined"
                            />
                          </label>
                        ) : (
                          <label htmlFor="doc-fisc-rccm">
                            <Input
                              id="doc-fisc-rccm"
                              accept="image/*, .pdf"
                              type="file"
                              onChange={changeCni}
                            />
                            <Chip
                              className="cursor-pointer"
                              component="span"
                              icon={<AddCircleOutlineIcon />}
                              label="Importer votre CNI/Passport *"
                              color={"error"}
                              variant="outlined"
                            />
                          </label>
                        )}
                      </React.Fragment>
                    )}

                    {auth.user.status === "ENTREPRISE" && (
                      <React.Fragment>
                        {auth.user?.anciennete && (
                          <React.Fragment>
                            {checkFiscal("RCCM") ? (
                              <Chip
                                icon={<CheckCircleIcon />}
                                label="RCCM"
                                color={"success"}
                                variant="outlined"
                              />
                            ) : (
                              <label htmlFor="doc-fisc-rccm">
                                <Input
                                  id="doc-fisc-rccm"
                                  accept="image/*, .pdf"
                                  type="file"
                                  onChange={(e) =>
                                    changeDocumentFiscal(e, "RCCM")
                                  }
                                />
                                <Chip
                                  className="cursor-pointer"
                                  component="span"
                                  icon={<AddCircleOutlineIcon />}
                                  label="Importer le RCCM *"
                                  color={"error"}
                                  variant="outlined"
                                />
                              </label>
                            )}
                            {checkFiscal("CARTE_CONTRIBUABLE") ? (
                              <Chip
                                icon={<CheckCircleIcon />}
                                label="Carte contribuable"
                                color={"success"}
                                variant="outlined"
                              />
                            ) : (
                              <label htmlFor="doc-fisc-cc">
                                <Input
                                  id="doc-fisc-cc"
                                  accept="image/*, .pdf"
                                  type="file"
                                  onChange={(e) =>
                                    changeDocumentFiscal(
                                      e,
                                      "CARTE_CONTRIBUABLE"
                                    )
                                  }
                                />
                                <Chip
                                  className="cursor-pointer"
                                  component="span"
                                  icon={<AddCircleOutlineIcon />}
                                  label="Importer la carte contribuable *"
                                  color={"error"}
                                  variant="outlined"
                                />
                              </label>
                            )}
                            {checkFiscal("COMPTE_EXPLOITATION") ? (
                              <Chip
                                icon={<CheckCircleIcon />}
                                label="Compte d'exploitation"
                                color={"success"}
                                variant="outlined"
                              />
                            ) : (
                              <label htmlFor="doc-fisc-ce">
                                <Input
                                  id="doc-fisc-ce"
                                  accept="image/*, .pdf"
                                  type="file"
                                  onChange={(e) =>
                                    changeDocumentFiscal(
                                      e,
                                      "COMPTE_EXPLOITATION"
                                    )
                                  }
                                />
                                <Chip
                                  className="cursor-pointer"
                                  component="span"
                                  icon={<AddCircleOutlineIcon />}
                                  label="Importer le compte d'exploitation"
                                  color={"error"}
                                  variant="outlined"
                                />
                              </label>
                            )}
                          </React.Fragment>
                        )}

                        {auth.user?.anciennete &&
                          auth.user?.anciennete === 1 && (
                            <React.Fragment>
                              {checkFiscal("DSF") ? (
                                <Chip
                                  icon={<CheckCircleIcon />}
                                  label="DSF"
                                  color={"success"}
                                  variant="outlined"
                                />
                              ) : (
                                <label htmlFor="doc-fisc-dsf">
                                  <Input
                                    id="doc-fisc-dsf"
                                    accept="image/*, .pdf"
                                    type="file"
                                    onChange={(e) =>
                                      changeDocumentFiscal(e, "DSF")
                                    }
                                  />
                                  <Chip
                                    className="cursor-pointer"
                                    component="span"
                                    icon={<AddCircleOutlineIcon />}
                                    label="Importer la DSF"
                                    color={"secondary"}
                                    variant="outlined"
                                  />
                                </label>
                              )}
                              {checkFiscal("ANR") ? (
                                <Chip
                                  icon={<CheckCircleIcon />}
                                  label="ANR"
                                  color={"success"}
                                  variant="outlined"
                                />
                              ) : (
                                <label htmlFor="doc-fisc-anr">
                                  <Input
                                    id="doc-fisc-anr"
                                    accept="image/*, .pdf"
                                    type="file"
                                    onChange={(e) =>
                                      changeDocumentFiscal(e, "ANR")
                                    }
                                  />
                                  <Chip
                                    className="cursor-pointer"
                                    component="span"
                                    icon={<AddCircleOutlineIcon />}
                                    label="Importer l'ANR"
                                    color={"secondary"}
                                    variant="outlined"
                                  />
                                </label>
                              )}
                              {checkFiscal(
                                "ATTESTATION_DOMICILIATION_BANCAIRE"
                              ) ? (
                                <Chip
                                  icon={<CheckCircleIcon />}
                                  label="Attestation domiciliation bancaire"
                                  color={"success"}
                                  variant="outlined"
                                />
                              ) : (
                                <label htmlFor="doc-fisc-adb">
                                  <Input
                                    id="doc-fisc-adb"
                                    accept="image/*, .pdf"
                                    type="file"
                                    onChange={(e) =>
                                      changeDocumentFiscal(
                                        e,
                                        "ATTESTATION_DOMICILIATION_BANCAIRE"
                                      )
                                    }
                                  />
                                  <Chip
                                    className="cursor-pointer"
                                    component="span"
                                    icon={<AddCircleOutlineIcon />}
                                    label="Importer l'attestation domiciliation bancaire"
                                    color={"secondary"}
                                    variant="outlined"
                                  />
                                </label>
                              )}
                            </React.Fragment>
                          )}
                      </React.Fragment>
                    )}
                  </div>

                  <p className="mt-1 text-muted">
                    NB: les documemts avec * sont obligatoires
                  </p>
                </Grid>
              </Grid>
            </div>
          )}
          {activeStep === 1 && (
            <div>
              <ScrollToTopOnMount />
              <h3 className="fw-bolder">Informations générales du projet</h3>

              <p className="text-muted mb-5">
                Rempliser les champs suivant avant de soumettre votre projet.{" "}
                <span className="fw-bolder">
                  NB: Les chapms avec (*) sont obligatoires
                </span>
              </p>

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
                      value={projet.intitule || ""}
                      onChange={(e) =>
                        setProjet({ ...projet, intitule: e.target.value })
                      }
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
                      value={projet.secteur || ""}
                      onChange={(e) =>
                        setProjet({ ...projet, secteur: e.target.value })
                      }
                    >
                      <option value="">Secteur d'activité</option>
                      {secteurs.map((item, index) => (
                        <option key={item.id} value={item.id}>
                          {item.libelle}
                        </option>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                  <FormControl
                    component="fieldset"
                    sx={{ m: 1, width: "100%" }}
                  >
                    <h5 className="fw-bolder">
                      Quel est le niveau d'évolution du projet ?
                    </h5>
                    <RadioGroup
                      row
                      aria-label="etat"
                      name="row-etat-buttons-group"
                      value={projet.avancement || ""}
                      onChange={(e, value) =>
                        setProjet({ ...projet, avancement: value })
                      }
                    >
                      <Tooltip
                        title="Votre projet est encore à la phase d'idée"
                        TransitionComponent={Zoom}
                        disableInteractive
                        arrow
                      >
                        <FormControlLabel
                          value="IDEE"
                          control={<Radio />}
                          label="Idée"
                        />
                      </Tooltip>
                      <Tooltip
                        title="Votre projet est déjà encours de réalisation"
                        TransitionComponent={Zoom}
                        disableInteractive
                        arrow
                      >
                        <FormControlLabel
                          value="PROTOTYPE"
                          control={<Radio />}
                          label="Prototype"
                        />
                      </Tooltip>
                      <Tooltip
                        title="Votre projet est déjà sur le marché"
                        TransitionComponent={Zoom}
                        disableInteractive
                        arrow
                      >
                        <FormControlLabel
                          value="SUR_LE_MARCHE"
                          control={<Radio />}
                          label="Sur le marché"
                        />
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
                      value={projet.financement || ""}
                      currencySymbol="FCFA"
                      onChange={(event, value) =>
                        setProjet({ ...projet, financement: value })
                      }
                    />
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
                      value={projet.site || ""}
                      onChange={(e) =>
                        setProjet({ ...projet, site: e.target.value })
                      }
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
                      value={projet.pays_activite || ""}
                      onChange={(e) =>
                        setProjet({ ...projet, pays_activite: e.target.value })
                      }
                    >
                      <option value={undefined}>Aucun</option>
                      {Pays.map((item) => (
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
                      value={projet.ville_activite || ""}
                      onChange={(e) =>
                        setProjet({ ...projet, ville_activite: e.target.value })
                      }
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
                      value={projet.description || ""}
                      onChange={(e) =>
                        setProjet({ ...projet, description: e.target.value })
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={7}>
                  <FormControl sx={{ m: 1, width: "100%" }}>
                    <h5 className="fw-bolder mb-0">
                      Fichier de présentation du projet
                    </h5>
                    <small
                      style={{ fontSize: 13 }}
                      className="text-muted small mb-1"
                    >
                      Ce fichier peut être{" "}
                      <span className="fw-bolder">
                        Un document ou une video
                      </span>
                    </small>

                    <label htmlFor="doc-presentation">
                      <Input
                        accept="video/*, .xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf"
                        id="doc-presentation"
                        type="file"
                        onChange={changeProjetDoc}
                      />
                      <Button variant="contained" component="span" size="small">
                        Importer un fichier
                      </Button>
                    </label>

                    {doc_presentation && (
                      <List sx={{ width: "90%" }}>
                        <ListItem
                          disableGutters
                          secondaryAction={
                            <IconButton
                              color="primary"
                              onClick={() => setDocPresentation(null)}
                              edge="end"
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={doc_presentation.name}
                            secondary={convertFileSize(doc_presentation)}
                          />
                        </ListItem>
                      </List>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={5}>
                  <FormControl sx={{ m: 1, width: "100%" }}>
                    <h5 className="fw-bolder mb-1">Logo du projet</h5>
                    <label htmlFor="photo-profile">
                      <Input
                        accept="image/jpeg,image/jpg,image/png"
                        id="photo-profile"
                        type="file"
                        onChange={changeProjetLogo}
                      />
                      <Button variant="contained" component="span" size="small">
                        Importer une image
                      </Button>
                    </label>

                    {logo && (
                      <List sx={{ width: "100%" }}>
                        <ListItem
                          disableGutters
                          secondaryAction={
                            <IconButton
                              color="primary"
                              onClick={() => setLogo(null)}
                              edge="end"
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={logo.name}
                            secondary={convertFileSize(logo)}
                          />
                        </ListItem>
                      </List>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={7}>
                  <FormControl sx={{ m: 1, width: "90%" }}>
                    <h5 className="fw-bolder mb-1">Autres fichiers</h5>

                    <label htmlFor="projet-media">
                      <Input
                        id="projet-media"
                        multiple
                        type="file"
                        accept="video/*, .xlsx, .xls, image/*, .doc, .docx, .ppt, .pptx, .txt, .pdf"
                        onChange={changeProjetMedia}
                      />
                      <Button variant="contained" component="span" size="small">
                        Importer un ou plusieurs fichiers
                      </Button>
                    </label>

                    {medias.length > 0 && (
                      <List sx={{ width: "100%" }}>
                        {medias.map((file, index) => (
                          <React.Fragment key={index}>
                            <ListItem
                              key={index}
                              disableGutters
                              secondaryAction={
                                <IconButton
                                  color="primary"
                                  onClick={() => removeFileInArray(file)}
                                  edge="end"
                                >
                                  <DeleteIcon />
                                </IconButton>
                              }
                            >
                              <ListItemAvatar>
                                <Avatar>
                                  <ImageIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={file.name}
                                secondary={convertFileSize(file)}
                              />
                            </ListItem>
                            <Divider />
                          </React.Fragment>
                        ))}
                      </List>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          )}
          {activeStep === 2 && (
            <div>
              <ScrollToTopOnMount />
              <h3 className="fw-bolder">Informations sur votre équipe</h3>
              <p className="text-muted mb-5">
                Cliquez sur l'icon "+" pour ajouter un membre de votre équipe.
              </p>

              <div className="row g-3">
                {membres.length > 0 &&
                  membres.map((item, index) => (
                    <div
                      key={index}
                      className="col-sm-12 col-md-4 col-lg-3 p-0"
                    >
                      <div className="projet-add-expert-item">
                        <div style={{ width: "100%", position: "relative" }}>
                          <img
                            className="projet-add-expert-image"
                            alt="Expert IP INVESTMENT S.A."
                            src={
                              item.membre?.photo &&
                              item.membre?.photo !== "null"
                                ? item.membre?.photo
                                : expert
                            }
                          />
                          <div
                            className="projet-add-expert-item-remove-btn"
                            onClick={() => removeNewMembre(item.membre?.id)}
                          >
                            <MdRemoveCircle
                              className="projet-add-expert-button-modal"
                              fill="#c34839"
                              size={40}
                            />
                          </div>
                        </div>
                        <div className="projet-add-expert-name">
                          {item.membre?.nom_complet}
                        </div>
                        <div className="projet-add-expert-bibio">
                          {item?.statut}
                        </div>
                      </div>
                    </div>
                  ))}

                <div className="col-sm-12 col-md-4 col-lg-3 p-0">
                  <Tooltip
                    title="Ajouter un membre dans votre équipe"
                    TransitionComponent={Zoom}
                    disableInteractive
                    arrow
                  >
                    <div
                      className="projet-add-expert-item projet-add-expert-modal"
                      onClick={() => setModalOpen(true)}
                    >
                      <MdAddCircle
                        className="projet-add-expert-button-modal"
                        fill="#c34839"
                        size={40}
                      />
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
                    <button
                      className="projet-add-modal-close"
                      onClick={() => setModalOpen(false)}
                    >
                      &times;
                    </button>
                    <div className="projet-add-modal-content">
                      <div className="tab-head">
                        <div className="tab-nav">
                          <div
                            onClick={() => setTab("new")}
                            className={
                              tab === "new"
                                ? "tab-nav-item active"
                                : "tab-nav-item"
                            }
                          >
                            Nouveau
                          </div>
                          <div
                            onClick={() => setTab("exist")}
                            className={
                              tab === "exist"
                                ? "tab-nav-item active"
                                : "tab-nav-item"
                            }
                          >
                            Existant
                          </div>
                        </div>
                      </div>

                      <div>
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
                                  value={membre.nom_complet || ""}
                                  onChange={(e) =>
                                    setMembre({
                                      ...membre,
                                      nom_complet: e.target.value,
                                    })
                                  }
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
                                  value={membre.email || ""}
                                  onChange={(e) =>
                                    setMembre({
                                      ...membre,
                                      email: e.target.value,
                                    })
                                  }
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
                                  value={membre.telephone || ""}
                                  onChange={(e) =>
                                    setMembre({
                                      ...membre,
                                      telephone: e.target.value,
                                    })
                                  }
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
                                  onChange={(e) =>
                                    setStatutNewMembre(e.target.value)
                                  }
                                />
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <FormControl sx={{ m: 1, width: "100%" }}>
                                <label htmlFor="photo-profile">
                                  <Input
                                    accept=".jpeg, .jpg, .png"
                                    id="photo-profile"
                                    type="file"
                                    onChange={changeNewMembrePhoto}
                                  />
                                  <Button
                                    variant="contained"
                                    component="span"
                                    size="small"
                                  >
                                    Importer une photo de profil
                                  </Button>
                                </label>

                                {membre.photo && (
                                  <List sx={{ width: "100%" }}>
                                    <ListItem disableGutters>
                                      <ListItemAvatar>
                                        <Avatar>
                                          <ImageIcon />
                                        </Avatar>
                                      </ListItemAvatar>
                                      <ListItemText
                                        primary={membre.photo.name}
                                        secondary={convertFileSize(
                                          membre.photo
                                        )}
                                      />
                                    </ListItem>
                                  </List>
                                )}
                              </FormControl>
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                              <FormControl
                                sx={{ m: 1, width: "100%" }}
                                size="small"
                              >
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
                              <FormControl
                                component="fieldset"
                                sx={{ m: 1, width: "100%" }}
                              >
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
                                  onChange={(e) =>
                                    setStatutNewMembre(e.target.value)
                                  }
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        )}

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
                      </div>
                    </div>
                  </div>
                </Popup>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div>
              <ScrollToTopOnMount />
              <h3 className="fw-bolder">Résumé du projet</h3>

              <p className="text-muted mb-5">
                Vérifier les informations de votre projet avant de le soumettre.
                Il n'y aura pas de retour en arrière après soumission de votre
                projet.
              </p>

              <Grid container spacing={2}>
                {projet?.intitule && (
                  <Grid item xs={12} md={12}>
                    <p className="fw-bolder fs-5 text-primary">Projet</p>
                    <p className="fs-6">{projet?.intitule}</p>
                  </Grid>
                )}

                {getSelectedSecteur()?.libelle && (
                  <Grid item xs={12} md={6} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Secteur d'activité
                    </p>
                    <p className="fs-6">{getSelectedSecteur()?.libelle}</p>
                  </Grid>
                )}

                {projet?.avancement && (
                  <Grid item xs={12} md={6} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Niveau d'évolution
                    </p>
                    <p className="fs-6">{projet?.avancement}</p>
                  </Grid>
                )}

                {projet?.financement && (
                  <Grid item xs={12} md={12} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Besoin d'un financement de
                    </p>
                    <p className="fs-6">{projet?.financement} FCFA</p>
                  </Grid>
                )}

                {projet?.site && (
                  <Grid item xs={12} md={12} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">Site web</p>
                    <p className="fs-6">{projet?.site}</p>
                  </Grid>
                )}

                {projet?.pays_activite && (
                  <Grid item xs={12} md={6} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Pays d'activité
                    </p>
                    <p className="fs-6">{projet?.pays_activite}</p>
                  </Grid>
                )}

                {projet?.ville_activite && (
                  <Grid item xs={12} md={6} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Ville d'activité
                    </p>
                    <p className="fs-6">{projet?.ville_activite}</p>
                  </Grid>
                )}

                {projet?.description && (
                  <Grid item xs={12} md={12} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Description du projet
                    </p>
                    <p className="fs-6">{projet?.description}</p>
                  </Grid>
                )}

                {logo && (
                  <Grid item xs={12} md={6} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Logo du projet
                    </p>
                    {logo && (
                      <List sx={{ width: "100%" }}>
                        <ListItem disableGutters>
                          <ListItemAvatar>
                            <Avatar>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={logo?.name}
                            secondary={convertFileSize(logo)}
                          />
                        </ListItem>
                      </List>
                    )}
                  </Grid>
                )}

                {doc_presentation && (
                  <Grid item xs={12} md={6} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Document de présentation
                    </p>
                    {doc_presentation && (
                      <List sx={{ width: "100%" }}>
                        <ListItem disableGutters>
                          <ListItemAvatar>
                            <Avatar>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={doc_presentation?.name}
                            secondary={convertFileSize(doc_presentation)}
                          />
                        </ListItem>
                      </List>
                    )}
                  </Grid>
                )}

                {medias.length > 0 && (
                  <Grid item xs={12} md={12} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">
                      Autres fichiers
                    </p>
                    <List sx={{ width: "100%" }}>
                      {medias.map((file, index) => (
                        <React.Fragment key={index}>
                          <ListItem key={index} disableGutters>
                            <ListItemAvatar>
                              <Avatar>
                                <ImageIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={file?.name}
                              secondary={convertFileSize(file)}
                            />
                          </ListItem>
                          <Divider />
                        </React.Fragment>
                      ))}
                    </List>
                  </Grid>
                )}

                {membres.length > 0 && (
                  <Grid item xs={12} md={12} className="mt-1">
                    <p className="fw-bolder fs-5 text-primary">Votre équipe</p>
                    <div className="row g-3">
                      {membres.map((item, index) => (
                        <div
                          key={index}
                          className="col-sm-12 col-md-4 col-lg-3 p-0"
                        >
                          <div className="projet-add-expert-item">
                            <div
                              style={{ width: "100%", position: "relative" }}
                            >
                              <img
                                className="projet-add-expert-image"
                                alt="Expert IP INVESTMENT S.A."
                                src={
                                  item.membre?.photo &&
                                  item.membre?.photo !== "null"
                                    ? item.membre?.photo
                                    : expert
                                }
                              />
                            </div>
                            <div className="projet-add-expert-name">
                              {item.membre?.nom_complet}
                            </div>
                            <div className="projet-add-expert-bibio">
                              {item?.statut}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Grid>
                )}
              </Grid>
            </div>
          )}
        </div>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            pt: 2,
          }}
        >
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
              onClick={handleNext}
              sx={{ mr: 1 }}
            >
              Suivant
            </Button>
          )}

          {activeStep === steps.length - 1 && (
            <Button
              className="btn-default"
              variant="contained"
              type="button"
              sx={{ mr: 1 }}
              disabled={!checkProjetDone()}
              onClick={saveProjet}
            >
              Enregistrer
            </Button>
          )}
        </Box>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="bottomrighterror"
        open={error}
        autoHideDuration={10000}
        onClose={handleErrorAlertClose}
      >
        <Alert
          onClose={handleErrorAlertClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="bottomrightsuccess"
        open={success}
        autoHideDuration={10000}
        onClose={handleSuccessAlertClose}
      >
        <Alert
          onClose={handleSuccessAlertClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (payload) => dispatch(user(payload)),
    setLoadingTrue: (payload) => dispatch(setLoadingTrue()),
    setLoadingFalse: (payload) => dispatch(setLoadingFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjetAdd);
