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
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FormLabel } from "react-bootstrap";

const Paiement = ({ history, t, user, language }) => {
  const [participation, setParticipation] = useState({
    nom: "",
    prenom: "",
    dateNais: new Date().toISOString().split('T')[0],
    sexe: "M",
    email: "",
    ville: "",
    numeroCNI: "",
    telephone: "",
    places: 0,
    project: {
      porteurProjet: "",
      presentation1: "",
      presentation2: "",
      environement: "",
      impact: "",
      financement: ""
    },
    paymentDetails: {}
  });

  const [errors, setErrors] = useState({});
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    paymentType: 'OM',
    paymentPhone: '',
    seats: 1
  });
  const [paymentErrors, setPaymentErrors] = useState({});

  const handlePaymentChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleChange = (key, value) => {
    setParticipation((prevData) => {
      return { ...prevData, [key]: value };
    });
  };
  const handleProjectChange = (key, value) => {
    setParticipation((prevData) => {
      return { ...prevData,
        project: {
          ...prevData.project,
          [key]: value
        } };
    });
  };

  // Validation du premier formulaire
  const validateMainForm = () => {
    const newErrors = {};
    let valid = true;

    ['nom', 'prenom', 'email', 'ville', 'numeroCNI', 'telephone'].forEach(field => {
      if (participation[field].trim() === '') {
        newErrors[field] = true;
        valid = false;
      } else {
        newErrors[field] = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };
  
  // validation du formulaire de paiement
  const validatePaymentForm = () => {
    const newErrors = {};
    let valid = true;

    if (!paymentDetails.paymentType) {
      newErrors.paymentType = 'Le type de paiement est requis';
      valid = false;
    }

    const phoneRegex = {
      'OM': /^(655|656|657|658|659|690|691|692|693|694|695|696|697|698|699)\d{6}$/,
      'MTN': /^(650|651|652|653|654|670|671|672|673|674|675|676|677|678|679)\d{6}$/
    };

    if (!paymentDetails.paymentPhone.match(phoneRegex[paymentDetails.paymentType])) {
      newErrors.paymentPhone = 'Numéro de téléphone invalide';
      valid = false;
    }

    if (paymentDetails.seats < 1) {
      newErrors.seats = 'Le nombre de places doit être supérieur ou égal à 1';
      valid = false;
    }

    setPaymentErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateMainForm()) {
      setPaymentModalOpen(true);
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (validatePaymentForm()) {
      setParticipation({...participation, paymentDetails: paymentDetails});
      console.log('Formulaire principal:', participation);
      setPaymentModalOpen(false);
    }
  }

  return (
    <Container header footer headerActive active="paiement">
      <Box
        style={{ marginTop: 100, paddingBlock: "2rem", paddingInline: "2rem" }}
      >
        <h1 className="section-title text-black">{t("event.form.title")}</h1>
        <form
          onSubmit={handleSubmit}
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
            <Typography variant="caption">{t("event.form.subtitle.personnel.info")}</Typography>
          </div>
          <div className="d-flex gap-3">
            <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
              <TextField
                fullWidth
                required
                size="small"
                type="text"
                error={errors.nom}
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
                error={errors.prenom}
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
              <FormLabel style={{ paddingLeft: "1rem", color: "#0000008a"}}>
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
              error={errors.email}
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
              error={errors.telephone}
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
              error={errors.numeroCNI}
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
            <Typography variant="caption">{t("event.form.subtitle.projet.info")}</Typography>
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
            onChange={(e) => handleProjectChange("porteurProjet", e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._10.title")}
            placeholder={t("event.form.input._10.placeholder")}
            value={participation.presentation1}
            onChange={(e) => handleProjectChange("presentation1", e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._11.title")}
            placeholder={t("event.form.input._11.placeholder")}
            value={participation.presentation2}
            onChange={(e) => handleProjectChange("presentation2", e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._12.title")}
            placeholder={t("event.form.input._12.placeholder")}
            value={participation.environement}
            onChange={(e) => handleProjectChange("environement", e.target.value)}
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
            onChange={(e) => handleProjectChange("impact", e.target.value)}
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
            onChange={(e) => handleProjectChange("financement", e.target.value)}
          />
          <div
            style={{ display: "flex", marginTop: 30, justifyContent: "end" }}
          >
            <Button width="fit-content" type="submit" variant="contained" size="medium" onClick={(e) => validateMainForm(e)}>
              {t("button.participer")}
            </Button>
          </div>
        </form>
      </Box>

      {/* Modal de paeiment */}
      <Dialog open={paymentModalOpen} onClose={() => setPaymentModalOpen(false)}>
        <DialogTitle>
        <Typography variant="h5" fontWeight="bold" marginTop="1rem">
            {t("event.form.subtitle.personnel.title")}
            </Typography>
            <Typography variant="caption">{t("event.form.subtitle.personnel.info")}</Typography>
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal" error={!!paymentErrors.paymentType}>
            <InputLabel>{t("event.form.input._15.title")}</InputLabel>
            <Select
              name="paymentType"
              value={paymentDetails.paymentType}
              onChange={handlePaymentChange}
              variant="filled"
              required
            >
              <MenuItem value="OM">Orange Money</MenuItem>
              <MenuItem value="MTN">MTN Mobile Money</MenuItem>
            </Select>
            {paymentErrors.paymentType && <FormHelperText>{paymentErrors.paymentType}</FormHelperText>}
          </FormControl>
          <TextField
            label={t("event.form.input._17.title")}
            variant="filled"
            fullWidth
            margin="normal"
            name="paymentPhone"
            value={paymentDetails.paymentPhone}
            onChange={handlePaymentChange}
            placeholder={paymentDetails.paymentType === "OM" ? "N° Orange Money" : "N° MTN Mobile Money"}
            required
            error={!!paymentErrors.paymentPhone}
            helperText={paymentErrors.paymentPhone}
          />
          <TextField
            label={t("event.form.input._15.title")}
            variant="filled"
            fullWidth
            margin="normal"
            name="seats"
            type="number"
            value={paymentDetails.seats}
            onChange={handlePaymentChange}
            required
            error={!!paymentErrors.seats}
            helperText={paymentErrors.seats}
            InputProps={{ inputProps: { min: 1 } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPaymentModalOpen(false)} color="secondary">
            Annuler
          </Button>
          <Button onClick={handlePaymentSubmit} type="submit" variant="contained" size="big">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  language: state.app.language,
  user: state.auth.user,
});

export default withTranslation()(connect(mapStateToProps)(Paiement));
