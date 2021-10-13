import * as React from 'react';
import '../../../../styles/dashboard.scss';
import { BiPlusMedical } from 'react-icons/bi';
import { Button } from '@mui/material';

import moment from 'moment';
import 'moment/locale/fr'

import { MessageService } from '../../../../core/services';
import { connect } from "react-redux";


import { Modal } from 'react-bootstrap';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';

import CircularProgress from '@mui/material/CircularProgress';
import RefreshIcon from '@mui/icons-material/Refresh';

moment.locale('fr')

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ChatMessagesPorteurProjet = ({ match, history, user }) => {
    const { params: { receiver, conversation, projet } } = match;

    const [messages, setMessages] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [visible, setVisible] = React.useState(false);
    const [sendLoading, setSendLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [rs_message, setRsMessage] = React.useState('');

    const hidePayement = () => {
        setVisible(false);
        setMessage('')
    }

    const openMessage = (e) => {
        setVisible(true);
    }

    const sendMessage = (e) => {
        const data = {
            body: message,
            projet: projet
        }

        setSendLoading(true)

        MessageService.send(user?.id, receiver, conversation, data).then(
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
            const rs = await MessageService.getAll(user?.id, conversation);
            setMessages(rs.data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchData();
    }, [user]);

    return (
        <div>
            <div className="w-100 d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bolder">{messages.length > 0 && messages[0]?.projet_data?.intitule ? messages[0]?.projet_data?.intitule : 'Conseil'}</h3>
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
                    >Répondre</Button>
                </div>
            </div>
            <div className="bg-white">
                {loading && (
                    <div className="message-item border d-flex align-items-center justify-content-center my-2">
                        <CircularProgress />
                    </div>
                )}
                {(messages || []).map((item, index) => (
                    <div onClick={() => history.push(`${match.url}/${index}/read`)} key={index} className="message-item border mb-3">
                        {/* <div className="message-seen" style={{ backgroundColor: item.vu === 1 ? "green" : "#c5473b" }}></div> */}
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <div className="d-flex align-items-center">
                                <div className="message-sender me-3">
                                    {item.envoyeur === user?.id ? 'Vous' : item.sender?.nom + ' ' + item.sender?.prenom}
                                </div>
                                <div className="message-clock small text-muted">
                                    <p className="bi bi-clock d-flex align-items-center"></p> <p className="text-capitalize ms-2">Envoyé le  <span className="text-capitalize ms-1">{moment(item.created_at).format(" DD MMMM YYYY [à] HH:mm:ss")}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="message-text">
                            {item.message}
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
                    <Modal.Title>Répondre au message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <FormControl sx={{ m: 1, width: "100%" }}>
                                <h6 className="fw-bolder">Votre message</h6>
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
                                    disabled={!message}
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
        </div>
    )
}

function mapStateToProps(state) {
    return ({ user: state.auth.user });
}

export default connect(mapStateToProps)(ChatMessagesPorteurProjet);