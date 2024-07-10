import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Container } from "../../components";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FormLabel } from "react-bootstrap";

const Paiement = ({ history, t, user, language }) => {
  const [participation, setParticipation] = useState({
    nom: "",
    prenom: "",
    dateNais: Date.now(),
    sexe: "M",
    email: "",
    ville: "",
    numeroCNI: "",
    telephone: "",
    places: 0,
  });
  const [methodPaiement, setMethodPaiement] = useState("OM");

  const onChangeForm = (key, value) => {
    console.log(participation.dateNais);
    setParticipation((prevData) => {
      return { ...prevData, [key]: value };
    });
  };

  return (
    <Container header footer headerActive active="paiement">
      <div
        style={{ marginTop: 100, paddingBlock: "2rem", paddingInline: "2rem" }}
      >
        <h1 className="section-title text-black">{t("event.form.title")}</h1>
        <Grid
          sx={{
            maxWidth: 900,
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
          title="Informations Personnelles"
        >
          <div>
            <Typography variant="h5" fontWeight="bold">
              Informations personnelles
            </Typography>
            <Typography variant="caption">Remplisez tous les champs</Typography>
          </div>
          <div class="d-flex gap-3">
            <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
              <TextField
                fullWidth
                required
                size="small"
                type="text"
                variant="filled"
                label={t("event.form.input._1.title")}
                placeholder={t("event.form.input._1.placeholder")}
                value={participation.nom}
                onChange={(e) => onChangeForm("nom", e.target.value)}
              />
            </FormControl>
            <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
              <TextField
                fullWidth
                required
                size="small"
                type="text"
                variant="filled"
                label={t("event.form.input._2.title")}
                placeholder={t("event.form.input._2.placeholder")}
                value={participation.prenom}
                onChange={(e) => onChangeForm("prenom", e.target.value)}
              />
            </FormControl>
          </div>
          <div class="d-flex gap-3">
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
                onChange={(e) => onChangeForm("dateNais", e.target.value)}
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
                onChange={(e) => onChangeForm("sexe", e.target.value)}
              >
                <FormControlLabel
                  value="female"
                  size="small"
                  control={<Radio />}
                  label="Féminin"
                />
                <FormControlLabel
                  value="male"
                  size="small"
                  control={<Radio />}
                  label="Masculin"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
            <TextField
              fullWidth
              required
              size="small"
              type="email"
              variant="filled"
              label={t("event.form.input._5.title")}
              placeholder={t("event.form.input._5.placeholder")}
              value={participation.email}
              onChange={(e) => onChangeForm("email", e.target.value)}
            />
          </FormControl>
          <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
            <TextField
              fullWidth
              required
              size="small"
              type="tel"
              variant="filled"
              label={t("event.form.input._6.title")}
              placeholder={t("event.form.input._6.placeholder")}
              value={participation.telephone}
              onChange={(e) => onChangeForm("telephone", e.target.value)}
            />
          </FormControl>
          <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
            <TextField
              fullWidth
              required
              size="small"
              type="email"
              variant="filled"
              label={t("event.form.input._7.title")}
              placeholder={t("event.form.input._7.placeholder")}
              value={participation.numeroCNI}
              onChange={(e) => onChangeForm("numeroCNI", e.target.value)}
            />
          </FormControl>
          <FormControl component="fieldset" sx={{ my: 0.5, width: "100%" }}>
            <TextField
              fullWidth
              size="small"
              required
              variant="filled"
              label={t("event.form.input._8.title")}
              placeholder={t("event.form.input._8.placeholder")}
              type="tel"
              value={participation.ville}
              onChange={(e) => onChangeForm("ville", e.target.value)}
            />
          </FormControl>
          <br />
          <div>
            <Typography variant="h5" fontWeight="bold">
              Informations personnelles
            </Typography>
            <Typography variant="caption">Remplisez tous les champs</Typography>
          </div>
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._9.title")}
            placeholder={t("event.form.input._9.placeholder")}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._9.title")}
            placeholder={t("event.form.input._9.placeholder")}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._10.title")}
            placeholder={t("event.form.input._10.placeholder")}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._11.title")}
            placeholder={t("event.form.input._11.placeholder")}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._12.title")}
            placeholder={t("event.form.input._12.placeholder")}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._13.title")}
            placeholder={t("event.form.input._13.placeholder")}
          />
          <TextField
            multiline
            rows={4}
            variant="filled"
            fullWidth
            size="small"
            label={t("event.form.input._14.title")}
            placeholder={t("event.form.input._14.placeholder")}
          />
          <div
            style={{ display: "flex", marginTop: 30, justifyContent: "end" }}
          >
            <Button width="fit-content" type="submit" variant="contained">
              {t("button.participer")}
            </Button>
          </div>
        </Grid>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  language: state.app.language,
  user: state.auth.user,
});

export default withTranslation()(connect(mapStateToProps)(Paiement));
