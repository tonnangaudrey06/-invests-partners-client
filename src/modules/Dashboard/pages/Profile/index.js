import React from "react";
import { connect } from "react-redux";

import moment from "moment";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
// import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { UserService } from "../../../../core/services";
import { user } from "../../../../core/reducers/auth/actions";
import {
  setLoadingFalse,
  setLoadingTrue,
} from "../../../../core/reducers/app/actions";

import profile from "../../../../assets/img/profil.jpg";

import { Pays } from "../../../../data";
import { DownloadRounded } from "@mui/icons-material";

const Input = styled("input")({
  display: "none",
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProfilPorteurProjet = (props) => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [password, setPassword] = React.useState({
    old: "",
    new: "",
  });

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

  const changeCni = (e) => {
    let formData = new FormData();
    formData.append("cni", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updateCNI(user.id, formData).then(
      (rs) => {
        setUser(rs.data.data);
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
        props.setLoadingFalse();
        setMessage(resMessage);
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
        setLoading(false);
        props.setLoadingFalse();
        handleErrorAlertOpen();
      }
    );
  };

  const changePassword = (e) => {
    e.preventDefault();
    props.setLoadingTrue();
    setLoading(true);
    UserService.updatePassword(user.id, password).then(
      (rs) => {
        setLoading(false);
        props.setLoadingFalse();
        setMessage("Mot de passe mis à jour avec succès");
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
        setLoading(false);
        props.setLoadingFalse();
        handleErrorAlertOpen();
      }
    );
  };

  const changePhoto = (e) => {
    let formData = new FormData();
    formData.append("photo", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updatePhoto(user.id, formData).then(
      (rs) => {
        setUser(rs.data.data);
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage("Photo de profil mis à jour avec succès");
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

  const changeDSF = (e) => {
    let formData = new FormData();
    formData.append("type", "DSF");
    formData.append("document", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updateDocumentFiscal(user.id, formData).then(
      (rs) => {
        setUser(rs.data.data);
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage("DSF mis à jour avec succès");
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

  const changeCompteExploitation = (e) => {
    let formData = new FormData();
    formData.append("type", "COMPTE_EXPLOITATION");
    formData.append("document", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updateDocumentFiscal(user.id, formData).then(
      (rs) => {
        setUser(rs.data.data);
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage("Compte d'exploitation bancaire mis à jour avec succès");
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

  const changeRCCM = (e) => {
    let formData = new FormData();
    formData.append("type", "RCCM");
    formData.append("document", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updateDocumentFiscal(user.id, formData).then(
      (rs) => {
        setUser(rs.data.data);
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage("RCCM mis à jour avec succès");
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

  const changeANR = (e) => {
    let formData = new FormData();
    formData.append("type", "ANR");
    formData.append("document", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updateDocumentFiscal(user.id, formData).then(
      (rs) => {
        setUser(rs.data.data);
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage("ANR mis à jour avec succès");
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

  const changeCarteContribuable = (e) => {
    let formData = new FormData();
    formData.append("type", "CARTE_CONTRIBUABLE");
    formData.append("document", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updateDocumentFiscal(user.id, formData).then(
      (rs) => {
        setUser(rs.data.data);
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage("Carte contribuable mis à jour avec succès");
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

  const changeADB = (e) => {
    let formData = new FormData();
    formData.append("type", "ATTESTATION_DOMICILIATION_BANCAIRE");
    formData.append("document", e.target.files[0]);
    props.setLoadingTrue();
    UserService.updateDocumentFiscal(user.id, formData).then(
      (rs) => {
        setUser(rs.data.data);
        props.setUserData(rs.data.data);
        props.setLoadingFalse();
        setMessage("Attestation domiciliation bancaire mis à jour avec succès");
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

  const checkFiscal = (fiscal) => {
    if (
      user?.documents_fiscaux?.filter((value) => value?.type === fiscal)
        .length > 0
    )
      return true;
    else return false;
  };

  const getFiscal = (fiscal) => {
    return user?.documents_fiscaux?.find((value) => value?.type === fiscal);
  };

  React.useEffect(() => {
    setUser(props.auth.user);
  }, [props]);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="nav nav-pills nav-fill profile-nav" role="tablist">
            <button
              className="nav-link active fw-bolder fs-5 mr-1"
              id="nav-basic-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-basic"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Information personelles
            </button>
            <button
              className="nav-link fw-bolder fs-5 mr-1"
              id="nav-fiscaux-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-fiscaux"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Documents supplementaires
            </button>
            <button
              className="nav-link fw-bolder fs-5"
              id="nav-securite-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-securite"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Securité
            </button>
            {user?.role === 4 && (
              <button
                className="nav-link fw-bolder fs-5"
                id="nav-abonnement-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-abonnement"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Abonnement
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container rounded border shadow bg-white my-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <label className="avatar-cover" htmlFor="photo-profile">
                <Input
                  accept="image/*"
                  id="photo-profile"
                  type="file"
                  onChange={changePhoto}
                />
                <img
                  style={{ width: 150, height: 150 }}
                  src={user?.photo ? user?.photo : profile}
                  className="img-fluid rounded-circle"
                  alt={user.nom_complet}
                  width="150"
                />
              </label>

              <div className="mt-2">
                <p className="fw-bold fs-4">{user.nom_complet}</p>
                <p className="text-black-50">{user.email}</p>
              </div>

              {/* {user?.status === "PARTICULIER" && (
                <div className="mt-2 w-100">
                  <Divider />
                  <div className="mt-2 w-100 text-center">
                    <div className="d-flex justify-content-center align-items-center my-1">
                      <span className="me-3">CNI/Passport</span>
                      {!user?.cni && <HighlightOffIcon color="primary" />}
                    </div>

                    <label className="me-2" htmlFor="cni-passport">
                      <input
                        className="d-none"
                        id="cni-passport"
                        type="file"
                        onChange={changeCni}
                      />
                      <Button component="span" variant="contained" size="small">
                        {user?.cni ? "Mettre à jour" : "Importer"}
                      </Button>
                    </label>

                    {user?.cni && (
                      <img
                        src={user?.cni}
                        alt={`${user?.nom_complet} CNI`}
                        className="rounded shadow mt-2"
                      />
                    )}
                  </div>
                </div>
              )} */}
            </div>
          </div>
          <div className="col-md-9 border-start">
            <div className="tab-content h-100">
              <div
                className="tab-pane fade show active"
                id="nav-basic"
                role="tabpanel"
                aria-labelledby="basic-tab"
              >
                <form onSubmit={changeUser}>
                  <div className="p-3 py-5">
                    <h3 className="fw-bolder">Informations de base</h3>
                    <p className="text-muted mb-3">
                      Modifier vos informations personnelles.
                    </p>
                    <Grid container spacing={2} sx={{ pb: 2 }}>
                      <Grid
                        item
                        xs={12}
                        md={user?.status === "PARTICULIER" ? 6 : 12}
                      >
                        <FormControl sx={{ m: 1, width: "100%" }}>
                          <TextField
                            fullWidth
                            size="small"
                            required
                            InputLabelProps={{ shrink: true }}
                            label="Nom"
                            placeholder="Nom"
                            variant="filled"
                            value={user.nom || ""}
                            onChange={(e) =>
                              setUser({ ...user, nom: e.target.value })
                            }
                          />
                        </FormControl>
                      </Grid>
                      {user?.status === "PARTICULIER" && (
                        <Grid item xs={12} md={6}>
                          <FormControl sx={{ m: 1, width: "100%" }}>
                            <TextField
                              fullWidth
                              size="small"
                              InputLabelProps={{ shrink: true }}
                              label="Prenom"
                              placeholder="Prenom"
                              variant="filled"
                              value={user.prenom || ""}
                              onChange={(e) =>
                                setUser({ ...user, prenom: e.target.value })
                              }
                            />
                          </FormControl>
                        </Grid>
                      )}
                      <Grid item xs={12} md={6}>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                          <TextField
                            fullWidth
                            size="small"
                            required
                            InputLabelProps={{ shrink: true }}
                            variant="filled"
                            type="email"
                            label="Email"
                            placeholder="example@domaine.com"
                            value={user.email || ""}
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                          <TextField
                            fullWidth
                            size="small"
                            required
                            InputLabelProps={{ shrink: true }}
                            label="Téléphone"
                            variant="filled"
                            type="tel"
                            placeholder="Téléphone"
                            value={user.telephone || ""}
                            onChange={(e) =>
                              setUser({ ...user, telephone: e.target.value })
                            }
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
                            label={
                              user?.status === "PARTICULIER"
                                ? "Pays de résidence"
                                : "Pays d'activité"
                            }
                            variant="filled"
                            placeholder={
                              user?.status === "PARTICULIER"
                                ? "Pays de résidence"
                                : "Pays d'activité"
                            }
                            value={user?.pays || ""}
                            onChange={(e) =>
                              setUser({ ...user, pays: e.target.value })
                            }
                          >
                            <option value="" hidden>
                              {user?.status === "PARTICULIER"
                                ? "Pays de résidence"
                                : "Pays d'activité"}
                            </option>
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
                            label={
                              user?.status === "PARTICULIER"
                                ? "Ville de résidence"
                                : "Ville d'activité"
                            }
                            variant="filled"
                            placeholder={
                              user?.status === "PARTICULIER"
                                ? "Ville de résidence"
                                : "Ville d'activité"
                            }
                            value={user.ville || ""}
                            onChange={(e) =>
                              setUser({ ...user, ville: e.target.value })
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                          <MobileDatePicker
                            label={
                              user?.status === "PARTICULIER"
                                ? "Date de naissance"
                                : "Date de creation"
                            }
                            allowSameDateSelection
                            cancelText="Annuler"
                            clearText="Effacer"
                            okText="OK"
                            value={
                              user.date_naissance
                                ? new Date(user.date_naissance)
                                : null
                            }
                            // minDate={new Date('1990-01-01')}
                            onChange={(value) =>
                              setUser({
                                ...user,
                                date_naissance:
                                  moment(value).format("YYYY[-]MM[-]DD"),
                              })
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                size="small"
                                variant="filled"
                                InputLabelProps={{ shrink: true }}
                              />
                            )}
                          />
                        </FormControl>
                        {user?.status === "ENTREPRISE" && (
                          <FormControl
                            component="fieldset"
                            sx={{ m: 1, width: "100%" }}
                          >
                            <h5 className="fw-bolder">
                              Ancienneté de l'entreprise ?
                            </h5>
                            <RadioGroup
                              row
                              aria-label="etat"
                              name="row-etat-buttons-group"
                              value={user.anciennete}
                              onChange={(e, value) =>
                                setUser({ ...user, anciennete: value })
                              }
                            >
                              <FormControlLabel
                                value={-1}
                                control={<Radio />}
                                label="Moins d'un an d'ancienneté"
                              />
                              <FormControlLabel
                                value={1}
                                control={<Radio />}
                                label="Plus ou égale à un an d'ancienneté"
                              />
                            </RadioGroup>
                          </FormControl>
                        )}
                      </Grid>
                      {user?.status === "PARTICULIER" && (
                        <Grid item xs={12} md={12}>
                          <FormControl sx={{ m: 1, width: "100%" }}>
                            <TextField
                              fullWidth
                              size="small"
                              InputLabelProps={{ shrink: true }}
                              label="Profession"
                              placeholder="Profession"
                              variant="filled"
                              value={user.profession || ""}
                              onChange={(e) =>
                                setUser({
                                  ...user,
                                  profession: e.target.value,
                                })
                              }
                            />
                          </FormControl>
                        </Grid>
                      )}

                      {user?.status === "PARTICULIER" && user?.role === 3 && (
                        <Grid item xs={12} md={12}>
                          <FormControl sx={{ m: 1, width: "100%" }}>
                            <TextField
                              fullWidth
                              size="small"
                              InputLabelProps={{ shrink: true }}
                              label={
                                user?.status === "PARTICULIER"
                                  ? "Parcours"
                                  : "Histoire"
                              }
                              placeholder={"Présenter vous en quelques mots"}
                              variant="filled"
                              multiline
                              rows={4}
                              value={user.parcours || ""}
                              onChange={(e) =>
                                setUser({ ...user, parcours: e.target.value })
                              }
                            />
                          </FormControl>
                        </Grid>
                      )}
                    </Grid>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        justifyContent: "center",
                      }}
                    >
                      <LoadingButton
                        className="btn-default flex flex-align-center flex-justify-center"
                        loading={loading}
                        type="submit"
                        variant="contained"
                        sx={{ mr: 1 }}
                      >
                        Enregistrer les mises à jour
                      </LoadingButton>
                    </Box>
                  </div>
                </form>
              </div>

              <div
                className="tab-pane fade"
                id="nav-fiscaux"
                role="tabpanel"
                aria-labelledby="fiscaux-tab"
              >
                <div className="p-3 py-5">
                  <h3 className="fw-bolder">Documents supplementaires</h3>

                  {user?.status === "ENTREPRISE" && user?.role === 3 ? (
                    <>
                      <p className="text-muted mb-3">
                        Importer vos documents fiscaux.
                      </p>
                      <Grid container spacing={2} sx={{ pb: 2 }}>
                        <Grid item xs={12} md={6}>
                          <div className="mt-2 w-100 text-center">
                            <div className="d-flex justify-content-center align-items-center my-1">
                              <span className="me-3">
                                Attestation domiciliation bancaire
                              </span>
                              {!checkFiscal(
                                "ATTESTATION_DOMICILIATION_BANCAIRE"
                              ) && <HighlightOffIcon color="error" />}

                              {checkFiscal(
                                "ATTESTATION_DOMICILIATION_BANCAIRE"
                              ) && <CheckCircleIcon color="success" />}
                            </div>

                            {/* {checkFiscal(
                              "ATTESTATION_DOMICILIATION_BANCAIRE"
                            ) ? (
                              <a
                                title="Téléchager votre CNI"
                                target="_blank"
                                rel="noreferrer"
                                href={getFiscal(
                                  "ATTESTATION_DOMICILIATION_BANCAIRE"
                                )?.path}
                                className="d-flex justify-content-center align-items-center my-1"
                              >
                                <span className="me-3">CNI/Passport</span>

                                <DownloadRounded
                                  className="cursor-pointer"
                                  color="success"
                                />
                              </a>
                            ) : (
                              <div className="d-flex justify-content-center align-items-center my-1">
                                <span className="me-3">CNI/Passport</span>
                                <HighlightOffIcon color="error" />
                              </div>
                            )} */}

                            <label className="me-2" htmlFor="fiscal-adb">
                              <input
                                className="d-none"
                                id="fiscal-adb"
                                type="file"
                                onChange={changeADB}
                              />
                              <LoadingButton
                                component="span"
                                loading={loading}
                                variant="contained"
                                size="small"
                              >
                                {checkFiscal(
                                  "ATTESTATION_DOMICILIATION_BANCAIRE"
                                )
                                  ? "Mettre à jour"
                                  : "Importer"}
                              </LoadingButton>
                            </label>
                          </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <div className="mt-2 w-100 text-center">
                            <Divider />
                            <div className="d-flex justify-content-center align-items-center my-1">
                              <span className="me-3">
                                Compte d'exploitation
                              </span>
                              {!checkFiscal("COMPTE_EXPLOITATION") && (
                                <HighlightOffIcon color="error" />
                              )}

                              {checkFiscal("COMPTE_EXPLOITATION") && (
                                <CheckCircleIcon color="success" />
                              )}
                            </div>

                            <label
                              className="me-2"
                              htmlFor="fiscal-compte-exploitation"
                            >
                              <input
                                className="d-none"
                                id="fiscal-compte-exploitation"
                                type="file"
                                onChange={changeCompteExploitation}
                              />
                              <LoadingButton
                                component="span"
                                loading={loading}
                                variant="contained"
                                size="small"
                              >
                                {checkFiscal("COMPTE_EXPLOITATION")
                                  ? "Mettre à jour"
                                  : "Importer"}
                              </LoadingButton>
                            </label>
                          </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <div className="mt-2 w-100 text-center">
                            <Divider />
                            <div className="d-flex justify-content-center align-items-center my-1">
                              <span className="me-3">Carte contribuable</span>
                              {!checkFiscal("CARTE_CONTRIBUABLE") && (
                                <HighlightOffIcon color="error" />
                              )}

                              {checkFiscal("CARTE_CONTRIBUABLE") && (
                                <CheckCircleIcon color="success" />
                              )}
                            </div>

                            <label
                              className="me-2"
                              htmlFor="fiscal-carte-contribuable"
                            >
                              <input
                                className="d-none"
                                id="fiscal-carte-contribuable"
                                type="file"
                                onChange={changeCarteContribuable}
                              />
                              <LoadingButton
                                component="span"
                                loading={loading}
                                variant="contained"
                                size="small"
                              >
                                {checkFiscal("CARTE_CONTRIBUABLE")
                                  ? "Mettre à jour"
                                  : "Importer"}
                              </LoadingButton>
                            </label>
                          </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <div className="mt-2 w-100 text-center">
                            <Divider />
                            <div className="d-flex justify-content-center align-items-center my-1">
                              <span className="me-3">RCCM</span>
                              {!checkFiscal("RCCM") && (
                                <HighlightOffIcon color="error" />
                              )}

                              {checkFiscal("RCCM") && (
                                <CheckCircleIcon color="success" />
                              )}
                            </div>

                            <label className="me-2" htmlFor="fiscal-rccm">
                              <input
                                className="d-none"
                                id="fiscal-rccm"
                                type="file"
                                onChange={changeRCCM}
                              />
                              <LoadingButton
                                component="span"
                                loading={loading}
                                variant="contained"
                                size="small"
                              >
                                {checkFiscal("RCCM")
                                  ? "Mettre à jour"
                                  : "Importer"}
                              </LoadingButton>
                            </label>
                          </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <div className="mt-2 w-100 text-center">
                            <Divider />
                            <div className="d-flex justify-content-center align-items-center my-1">
                              <span className="me-3">ANR</span>
                              {!checkFiscal("ANR") && (
                                <HighlightOffIcon color="error" />
                              )}

                              {checkFiscal("ANR") && (
                                <CheckCircleIcon color="success" />
                              )}
                            </div>

                            <label className="me-2" htmlFor="fiscal-anr">
                              <input
                                className="d-none"
                                id="fiscal-anr"
                                type="file"
                                onChange={changeANR}
                              />
                              <LoadingButton
                                component="span"
                                loading={loading}
                                variant="contained"
                                size="small"
                              >
                                {checkFiscal("ANR")
                                  ? "Mettre à jour"
                                  : "Importer"}
                              </LoadingButton>
                            </label>
                          </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <div className="mt-2 w-100 text-center">
                            <Divider />
                            <div className="d-flex justify-content-center align-items-center my-1">
                              <span className="me-3">DSF</span>
                              {!checkFiscal("DSF") && (
                                <HighlightOffIcon color="error" />
                              )}

                              {checkFiscal("DSF") && (
                                <CheckCircleIcon color="success" />
                              )}
                            </div>
                            <input
                              className="d-none"
                              id="fiscal-dsf"
                              type="file"
                              onChange={changeDSF}
                            />

                            <label className="me-2" htmlFor="fiscal-dsf">
                              <LoadingButton
                                component="span"
                                loading={loading}
                                variant="contained"
                                size="small"
                              >
                                {checkFiscal("DSF")
                                  ? "Mettre à jour"
                                  : "Importer"}
                              </LoadingButton>
                            </label>
                          </div>
                        </Grid>
                      </Grid>
                    </>
                  ) : (
                    <div className="mt-2 w-100 d-flex align-items-center gap-3">
                      {user?.cni ? (
                        <a
                          title="Téléchager votre CNI"
                          target="_blank"
                          rel="noreferrer"
                          href={user?.cni}
                          className="d-flex justify-content-center align-items-center my-1 gap-2"
                        >
                          <DownloadRounded
                            className="cursor-pointer"
                            color="success"
                          />
                          CNI/Passport
                        </a>
                      ) : (
                        <div className="d-flex justify-content-center align-items-center my-1 gap-2">
                          <HighlightOffIcon color="error" />
                          CNI/Passport
                        </div>
                      )}

                      <label className="me-2" htmlFor="fiscal-adb">
                        <input
                          className="d-none"
                          id="fiscal-adb"
                          type="file"
                          onChange={changeCni}
                        />
                        <LoadingButton
                          component="span"
                          loading={loading}
                          variant="contained"
                          size="small"
                        >
                          {user?.cni ? "Mettre à jour" : "Importer"}
                        </LoadingButton>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-securite"
                role="tabpanel"
                aria-labelledby="securite-tab"
              >
                <form onSubmit={changePassword}>
                  <div className="p-3 py-5">
                    <h3 className="fw-bolder">Mot de passe</h3>
                    <p className="text-muted mb-3">
                      Modifier votre mot de passe.
                    </p>
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
                            value={password.old || ""}
                            onChange={(e) =>
                              setPassword({
                                ...password,
                                old: e.target.value,
                              })
                            }
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
                            value={password.new || ""}
                            onChange={(e) =>
                              setPassword({
                                ...password,
                                new: e.target.value,
                              })
                            }
                          />
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        justifyContent: "center",
                      }}
                    >
                      <LoadingButton
                        className="btn-default flex flex-align-center flex-justify-center"
                        loading={loading}
                        type="submit"
                        variant="contained"
                        sx={{ mr: 1 }}
                      >
                        Enregistrer les mises à jour
                      </LoadingButton>
                    </Box>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilPorteurProjet);
