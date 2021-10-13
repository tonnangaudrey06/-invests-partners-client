import * as React from 'react';
import '../../../../styles/dashboard.scss';

import { BiPlusMedical, BiEnvelope, BiEnvelopeOpen } from 'react-icons/bi';

import { Modal } from 'react-bootstrap';

import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

import moment from 'moment';
import 'moment/locale/fr'

import { MessageService, SecteurService } from '../../../../core/services';
import { connect } from "react-redux";

moment.locale('fr')

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ConversationMessagesPorteurProjet = ({ match, history, user }) => {

    const [contacts, setContacts] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [visible, setVisible] = React.useState(false);
    const [sendLoading, setSendLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [rs_message, setRsMessage] = React.useState('');
    const [secteurs, setSecteurs] = React.useState([]);
    const [secteur, setSecteur] = React.useState(null);

    const loadSecteur = () => {
        SecteurService.getAll().then(response => {
            setSecteurs(response.data.data);
        });
    }

    const hidePayement = () => {
        setVisible(false);
        setMessage('')
    }

    const openMessage = (e) => {
        setVisible(true);
    }

    const sendMessage = (e) => {
        const data = {
            body: message
        }

        const receiver = (secteurs || []).find(el => el?.id === +secteur)?.user;

        setSendLoading(true)

        MessageService.new(user?.id, receiver, data).then(
            (rs) => {
                hidePayement();
                setSuccess(true);
                setRsMessage('Votre message a été envoyé avec succès')
                setSendLoading(false)
                fetchData()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setRsMessage(resMessage);
                setSendLoading(false)
                setError(true)
            }
        )
    }

    const handleSuccessAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
    }

    const handleErrorAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const rs = await MessageService.getAllContacts(user?.id);
            setContacts(rs.data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchData();
        loadSecteur();
    }, [user]);

    return (
        <>
            <div className="w-100 d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bolder">Vos conversations</h3>
                <div className="message-actions d-flex align-items-center">
                    <Button
                        onClick={fetchData}
                        variant="contained"
                        className="me-2"
                        startIcon={<RefreshIcon />}
                    >Actualiser</Button>
                    <Button
                        onClick={openMessage}
                        variant="contained"
                        startIcon={<BiPlusMedical />}
                    >Nouveau message</Button>
                </div>
            </div>
            <div className="dash-container-right bg-white border overflow-hidden">
                {loading && (
                    <div className="d-flex align-items-center justify-content-center my-2">
                        <CircularProgress />
                    </div>
                )}
                {contacts?.length <= 0 && (
                    <div className="d-flex align-items-center justify-content-center my-2">
                        <h5 className="fw-bolder text-muted">
                            Aucun nouveau message
                        </h5>
                    </div>
                )}
                {(contacts || []).map((item, index) => (
                    <div onClick={() => history.push(match.url + '/' + item.recepteur.id + '/' + item.conversation + (item.projet ? '/' + item.projet.id : '') + '/chat')} key={index} className="message-line border-bottom">
                        <div>
                            {item.vu === 1 ? (
                                <BiEnvelope color="success" />
                            ) : (
                                <BiEnvelopeOpen color="primary" />
                            )}
                        </div>
                        <div className="message-title border-end d-flex align-items-center">
                            <h4 className="fw-bolder">{item.recepteur?.nom} | {item.projet?.intitule ? item.projet?.intitule : 'Conseille'}</h4>
                        </div>
                        <div className="message-content border-end">
                            {item.message}
                        </div>
                        <div className="message-time text-capitalize text-muted">
                            {moment(item.created_at).format("DD MMMM YYYY [à] HH:mm:ss")}
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                show={visible}
                onHide={hidePayement}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton={!loading}>
                    <Modal.Title>Nouveau message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, width: "100%" }}>
                                {/* <h6 className="fw-bolder">Votre message</h6> */}
                                <TextField
                                    fullWidth
                                    select
                                    SelectProps={{
                                        native: true,
                                    }}
                                    size="small"
                                    InputLabelProps={{ shrink: true }}
                                    label="Secteur d'activité"
                                    placeholder="Secteur d'activité"
                                    variant="filled"
                                    value={secteur || undefined}
                                    onChange={(e) => setSecteur(e.target.value)}
                                >
                                    <option value={null}>Secteur d'activité</option>
                                    {secteurs.map((item, index) => (
                                        <option key={item.id} value={item.id}>
                                            {item.libelle}
                                        </option>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, width: "100%" }}>
                                {/* <h6 className="fw-bolder">Votre message</h6> */}
                                <TextField
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{ shrink: true }}
                                    label="Message"
                                    placeholder="Message"
                                    variant="filled"
                                    multiline
                                    rows={5}
                                    value={message || ''}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <LoadingButton
                                    className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                                    loading={sendLoading}
                                    disabled={!(message && secteur)}
                                    onClick={sendMessage}
                                    variant="contained"
                                >
                                    Envoyer le message
                                </LoadingButton>
                            </div>
                        </Grid>
                    </Grid>
                </Modal.Body>
            </Modal>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright" open={error} autoHideDuration={10000} onClose={handleErrorAlertClose}>
                <Alert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%', textAlign: 'center' }}>
                    {rs_message}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} key="bottomright2" open={success} autoHideDuration={10000} onClose={handleSuccessAlertClose}>
                <Alert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%', textAlign: 'center' }}>
                    {rs_message}
                </Alert>
            </Snackbar>
        </>
    )
}

function mapStateToProps(state) {
    return ({ user: state.auth.user });
}

export default connect(mapStateToProps)(ConversationMessagesPorteurProjet);