import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Container } from "../../components";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PhoneInput from "react-phone-number-input";
import { forwardRef, useEffect, useState } from "react";
import { FormLabel } from "react-bootstrap";
import {
  EventService,
  CampayService,
  PaiementService,
} from "../../core/services";
import { sleep } from "../../core/utils/helpers";
import { useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import useGeoLocation from "react-ipgeolocation";

const Alert = forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Paiement = ({ history, t, user, language }) => {
  const { id } = useParams();

  const [participation, setParticipation] = useState({
    nom: "Test",
    prenom: "Noel",
    dateNais: new Date().toISOString().split("T")[0],
    sexe: "M",
    email: "test@gmail.com",
    ville: "Doaula",
    numeroCNI: "4566465465",
    telephone: "4656546464",
    places: 1,
    porteurProjet: "",
    presentationUn: "",
    presentationDeux: "",
    environnement: "",
    impact: "",
    financement: "",
  });
  const [errors, setErrors] = useState({});
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    methodPaiement: "OM",
    numero: "655278375",
    seats: 1,
  });
  const [paymentErrors, setPaymentErrors] = useState({});
  const [event, setEvent] = useState(null);
  const [paiement, setPaiement] = useState({
    pending: false,
    failed: false,
    message: "",
  });
  const [etat, setEtat] = useState({
    message: "",
    error: false,
    success: false,
  });

  // changement du formulqire de paiement
  const handlePaymentChange = (key, value) => {
    setPaymentDetails((prevData) => {
      return { ...prevData, [key]: value };
    });
  };

  // changement du formulaire informations personnelles
  const handleChange = (key, value) => {
    setParticipation((prevData) => {
      return { ...prevData, [key]: value };
    });
  };

  const handleErrorAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setEtat((prevData) => {
      return { ...prevData, error: false };
    });
  };

  const handleSuccessAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setEtat((prevData) => {
      return { ...prevData, success: false };
    });
  };

  // Recuperation de l'evenement grace a l'id
  const fetchData = () => {
    EventService.getOne(id).then((data) => {
      setEvent(data.data.data);
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cacher la modalde paiement
  const hideParticipate = () => {
    setPaymentModalOpen(false);
  };

  const checkSeat = () => {
    if (validatePaymentForm()) {
      EventService.checkSeat(event?.id, participation).then(
        (rs) => {
          handleParticipe();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setEtat({ error: true, success: false, message: resMessage });
        }
      );
    }
  };

  // Envoie des donnees vers le serveur
  const handleParticipe = (trans = "") => {
    EventService.participate(event?.id, participation).then(
      async (rs) => {
        hideParticipate();
        setEtat({
          error: false,
          success: true,
          message: "Votre réservation a été effectuée",
        });
        setParticipation({
          nom: "",
          prenom: "",
          dateNais: new Date().toISOString().split("T")[0],
          sexe: "M",
          email: "",
          ville: "",
          numeroCNI: "",
          telephone: "",
          porteurProjet: "",
          presentationUn: "",
          presentationDeux: "",
          environnement: "",
          impact: "",
          financement: "",
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setEtat({ error: true, success: false, message: resMessage });
      }
    );
  };

  // Paiement effectue avec success
  const payementDone = () => {
    setPaymentModalOpen(false);
    setPaymentDetails({
      methodPaiement: "OM",
      numero: "",
      seats: 1,
    });
    setPaiement({
      pending: false,
      failed: false,
      message: "",
    });
  };

  const countdown = async (refrence) => {
    let status = "PENDING";
    setPaiement({ ...paiement, pending: true, failed: false });

    // En attente de paiement ou erreur
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
        payementDone();
        handleParticipe(refrence);
        break;
      case "FAILED":
        setPaiement({
          pending: false,
          failed: true,
          message: `La transaction a échoué. Essayez à nouveau`,
        });
        break;
      default:
        await countdown(refrence);
        break;
    }
  };

  const payer = () => {
    if (validatePaymentForm()) {
      setParticipation({ ...participation, places: paymentDetails.seats });
      EventService.checkSeat(event?.id, participation).then(
        async (rs) => {
          setPaiement({ pending: true, failed: false, message: "" });
          try {
            const rs = await CampayService.payEvent(
              "+237" + paymentDetails.numero,
              event?.prix * participation?.places
            );
            let messageP = "La transaction ";

            if (paymentDetails.methodPaiement === "MOMO") {
              messageP = messageP + "MTN Mobile Money";
            }

            if (paymentDetails.methodPaiement === "OM") {
              messageP = messageP + "Orange Money";
            }

            setPaiement((prevData) => {
              return {
                ...prevData,
                message: `${messageP} a été initiée. Veuillez composer ${rs.ussd_code} sur votre téléphone pour valider la transaction.`,
              };
            });

            countdown(rs.reference);
          } catch (error) {
            setPaiement({ pending: false, failed: true, message: "" });
            console.error(error);
          }
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setEtat({ error: true, success: false, message: resMessage });
        }
      );
    }
  };

  // Validation du premier formulaire
  const validateMainForm = (e) => {
    e.preventDefault();
    const newErrors = {};
    let valid = true;

    ["nom", "prenom", "email", "ville", "numeroCNI", "telephone"].forEach(
      (field) => {
        if (participation[field].trim() === "") {
          newErrors[field] = true;
          valid = false;
        } else {
          newErrors[field] = false;
        }
      }
    );

    setErrors(newErrors);
    if (valid) {
      console.log(participation);
      setPaymentModalOpen(true);
    }
  };

  useEffect(() => {
    if (user) {
      setParticipation({
        nom: user?.nom,
        prenom: user?.prenom,
        dateNais: user?.dateNais,
        sexe: user?.dateNais,
        email: user?.email,
        ville: user?.ville,
        numeroCNI: user?.numeroCNI,
        telephone: user?.telephone,
        porteurProjet: user?.porteurProjet,
        presentationUn: user?.presentationUn,
        presentationDeux: user?.presentationDeux,
        environnement: user?.environnement,
        impact: user?.impact,
        financement: user?.financement,
      });
    }
  }, [user]);

  // validation du formulaire de paiement
  const validatePaymentForm = () => {
    const newErrors = {};
    let valid = true;

    if (!paymentDetails.methodPaiement) {
      newErrors.methodPaiement = "Le type de paiement est requis";
      valid = false;
    }

    const phoneRegex = {
      OM: /^(655|656|657|658|659|690|691|692|693|694|695|696|697|698|699)\d{6}$/,
      MTN: /^(650|651|652|653|654|670|671|672|673|674|675|676|677|678|679)\d{6}$/,
    };

    if (
      !paymentDetails.numero.match(phoneRegex[paymentDetails.methodPaiement])
    ) {
      newErrors.numero = "Numéro de téléphone invalide";
      valid = false;
    }

    if (paymentDetails.seats < 1) {
      newErrors.seats = "Le nombre de places doit être supérieur ou égal à 1";
      valid = false;
    }

    if (paymentDetails.seats > event?.places) {
      newErrors.seats = `Le nombre de places doit être inférieur ou égal à ${event?.places}`;
      valid = false;
    }
    setPaymentErrors(newErrors);

    return valid;
  };

  return (
    <Container header footer headerActive active="paiement">
      <Box
        style={{ marginTop: 100, paddingBlock: "2rem", paddingInline: "2rem" }}
      >
        <h1 className="section-title text-black">{t("event.form.title")}</h1>
        <form
          onSubmit={(e) => validateMainForm(e)}
          style={{
            maxWidth: 900,
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div>
            <Typography variant="h5" fontWeight="bold" marginTop="1rem">
              {t("event.form.subtitle.personnel.title")}
            </Typography>
            <Typography variant="caption">
              {t("event.form.subtitle.personnel.info")}
            </Typography>
          </div>
          <div className="d-flex gap-3">
            <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
              <TextField
                fullWidth
                required
                size="small"
                type="text"
                error={!!errors.nom}
                helperText={t("event.form.helper")}
                variant="filled"
                label={t("event.form.input._1.title")}
                placeholder={t("event.form.input._1.placeholder")}
                value={participation.nom}
                onChange={(e) => handleChange("nom", e.target.value)}
              />
            </FormControl>
            <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
              <TextField
                fullWidth
                required
                size="small"
                error={!!errors.prenom}
                helperText={t("event.form.helper")}
                type="text"
                variant="filled"
                label={t("event.form.input._2.title")}
                placeholder={t("event.form.input._2.placeholder")}
                value={participation.prenom}
                onChange={(e) => handleChange("prenom", e.target.value)}
              />
            </FormControl>
          </div>
          <div className="d-flex gap-3">
            <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
              <TextField
                fullWidth
                required
                size="small"
                type="date"
                variant="filled"
                label={t("event.form.input._3.title")}
                placeholder=""
                value={participation.dateNais}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => handleChange("dateNais", e.target.value)}
              />
            </FormControl>
            <FormControl
              sx={{
                my: 0.5,
                width: "100%",
                flexDirection: "row",
                gap: "4rem",
                alignItems: "center",
              }}
            >
              <FormLabel style={{ paddingLeft: "1rem", color: "#0000008a" }}>
                {t("event.form.input._4.title")}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                row
                size="small"
                value={participation.sexe}
                onChange={(e) => handleChange("sexe", e.target.value)}
              >
                <FormControlLabel
                  value="M"
                  size="small"
                  control={<Radio />}
                  label="Masculin"
                />
                <FormControlLabel
                  value="F"
                  size="small"
                  control={<Radio />}
                  label="Féminin"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
            <TextField
              fullWidth
              required
              size="small"
              error={!!errors.email}
              helperText={t("event.form.helper")}
              type="email"
              variant="filled"
              label={t("event.form.input._5.title")}
              placeholder={t("event.form.input._5.placeholder")}
              value={participation.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </FormControl>
          <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
            <TextField
              fullWidth
              required
              size="small"
              error={!!errors.telephone}
              helperText={t("event.form.helper")}
              type="number"
              variant="filled"
              label={t("event.form.input._6.title")}
              placeholder={t("event.form.input._6.placeholder")}
              value={participation.telephone}
              onChange={(e) => handleChange("telephone", e.target.value)}
            />
          </FormControl>
          <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
            <TextField
              fullWidth
              required
              size="small"
              error={!!errors.numeroCNI}
              helperText={t("event.form.helper")}
              type="number"
              variant="filled"
              label={t("event.form.input._7.title")}
              placeholder={t("event.form.input._7.placeholder")}
              value={participation.numeroCNI}
              onChange={(e) => handleChange("numeroCNI", e.target.value)}
            />
          </FormControl>
          <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
            <TextField
              fullWidth
              size="small"
              error={errors.ville}
              helperText={t("event.form.helper")}
              required
              variant="filled"
              label={t("event.form.input._8.title")}
              placeholder={t("event.form.input._8.placeholder")}
              type="tel"
              value={participation.ville}
              onChange={(e) => handleChange("ville", e.target.value)}
            />
          </FormControl>
          <br />
          <div>
            <Typography variant="h5" fontWeight="bold" marginTop="1rem">
              {t("event.form.subtitle.projet.title")}
            </Typography>
            <Typography variant="caption">
              {t("event.form.subtitle.projet.info")}
            </Typography>
          </div>
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._9.title")}
            placeholder={t("event.form.input._9.placeholder")}
            value={participation.porteurProjet}
            onChange={(e) => handleChange("porteurProjet", e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._10.title")}
            placeholder={t("event.form.input._10.placeholder")}
            value={participation.presentationUn}
            onChange={(e) => handleChange("presentationUn", e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._11.title")}
            placeholder={t("event.form.input._11.placeholder")}
            value={participation.presentationDeux}
            onChange={(e) => handleChange("presentationDeux", e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._12.title")}
            placeholder={t("event.form.input._12.placeholder")}
            value={participation.environnement}
            onChange={(e) => handleChange("environnement", e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._13.title")}
            placeholder={t("event.form.input._13.placeholder")}
            value={participation.impact}
            onChange={(e) => handleChange("impact", e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._14.title")}
            placeholder={t("event.form.input._14.placeholder")}
            value={participation.financement}
            onChange={(e) => handleChange("financement", e.target.value)}
          />
          <div
            style={{ display: "flex", marginTop: 30, justifyContent: "center" }}
          >
            <Button
              width="fit-content"
              type="submit"
              variant="contained"
              className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
            >
              {t("button.participer")}
            </Button>
          </div>
        </form>
      </Box>

      {/* Modal de paeiment */}
      <Dialog
        open={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      >
        <DialogTitle
          sx={{ maxWidth: "90vw", marginInline: "auto", width: 500 }}
        >
          <Typography fontWeight="bold" marginTop="1.2rem">
            {t("event.form.subtitle.participation.title")}
          </Typography>
          <Typography variant="caption">
            {t("event.form.subtitle.participation.info")}
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{ maxWidth: "90vw", marginInline: "auto", width: 500 }}
        >
          {event?.prix && (
            <>
              <FormControl
                fullWidth
                margin="normal"
                error={!!paymentErrors.methodPaiement}
              >
                <InputLabel>{t("event.form.input._15.title")}</InputLabel>
                <Select
                  value={paymentDetails.methodPaiement}
                  onChange={(e) =>
                    handlePaymentChange("methodPaiement", e.target.value)
                  }
                  variant="filled"
                  required
                >
                  <MenuItem value="OM">Orange Money</MenuItem>
                  <MenuItem value="MOMO">MTN Mobile Money</MenuItem>
                </Select>
                {paymentErrors.methodPaiement && (
                  <FormHelperText>
                    {paymentErrors.methodPaiement}
                  </FormHelperText>
                )}
              </FormControl>
              <TextField
                label={t("event.form.input._17.title")}
                variant="filled"
                fullWidth
                margin="normal"
                value={paymentDetails.numero}
                onChange={(e) => handlePaymentChange("numero", e.target.value)}
                placeholder={
                  paymentDetails.methodPaiement === "OM"
                    ? "N° Orange Money (657650045)"
                    : "N° MTN Mobile Money (677546565)"
                }
                required
                error={!!paymentErrors.numero}
                helperText={paymentErrors.numero}
              />
            </>
          )}
          <TextField
            label={t("event.form.input._15.title")}
            variant="filled"
            fullWidth
            margin="normal"
            name="seats"
            type="number"
            value={paymentDetails.seats}
            onChange={(e) => handlePaymentChange("seats", e.target.value)}
            required
            error={!!paymentErrors.seats}
            InputProps={{
              inputProps: { min: 0, max: event?.places - event?.total_reserve },
            }}
            helperText={paymentErrors.seats}
          />
        </DialogContent>
        <DialogActions
          sx={{
            maxWidth: "90vw",
            marginInline: "auto",
            width: 500,
            justifyContent: "center",
          }}
        >
          {event?.prix ? (
            <LoadingButton
              className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
              loading={paiement.pending}
              disabled={!paymentDetails.numero}
              onClick={payer}
              variant="contained"
            >
              {t("event.form.btn._1")}
            </LoadingButton>
          ) : (
            <LoadingButton
              className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
              onClick={checkSeat}
              variant="contained"
            >
              {t("event.form.btn._2")}
            </LoadingButton>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="bottomright"
        open={etat.error}
        autoHideDuration={10000}
        onClose={handleErrorAlertClose}
      >
        <Alert
          onClose={handleErrorAlertClose}
          severity="error"
          sx={{ width: "100%", textAlign: "center" }}
        >
          {etat.message}
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="bottomrightsuccess"
        open={etat.success}
        autoHideDuration={10000}
        onClose={handleSuccessAlertClose}
      >
        <Alert
          onClose={handleSuccessAlertClose}
          severity="success"
          sx={{ width: "100%", textAlign: "center" }}
        >
          {etat.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  language: state.app.language,
  user: state.auth.user,
});

export default withTranslation()(connect(mapStateToProps)(Paiement));
