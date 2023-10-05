import React from 'react';
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

import {
    styled,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    IconButton,
    ListItemText,
    Divider,
    Chip,
    Tooltip
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import FilePresent from '@mui/icons-material/FilePresent';
import MovieCreation from '@mui/icons-material/MovieCreation';
import DeleteIcon from '@mui/icons-material/Delete';

import CircularProgress from '@mui/material/CircularProgress';
import RefreshIcon from '@mui/icons-material/Refresh';

moment.locale('fr')

const Input = styled('input')({
    display: 'none',
});

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
    const [medias, setMedias] = React.useState([])

    const changeMedia = (e) => {
        let files = [...e.target.files];
        setMedias([...medias, ...files]);
    };

    const removeFileInArray = (file) => {
        const result = medias.filter((ele) => {
            return ele.name !== file.name;
        });
        setMedias(result);
    }

    const convertFileSize = (file) => {
        const size = file?.size?.toString();
        if (size?.length < 7) {
            return `${Math.round(+size / 1024).toFixed(2)} KB`
        }
        return `${(Math.round(+size / 1024) / 1000).toFixed(2)} MB`
    };

    const hidePayement = () => {
        setVisible(false);
        setMessage('')
    }

    const openMessage = (e) => {
        setMedias([]);
        setMessage('');
        setVisible(true);
    }

    const sendMessage = (e) => {
        e.preventDefault();

        let formData = new FormData();

        for (const media of medias) {
            formData.append('attachement[]', media)
        }

        formData.append('body', message)

        if (projet) {
            formData.append('projet', projet)
        }

        setSendLoading(true)

        MessageService.send(user?.id, receiver, conversation, formData).then(
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

    const deleteMessage = (id) => {
        MessageService.deleteMessage(id).then(
            (rs) => {
                hidePayement();
                setSuccess(true);
                setRsMessage('Votre message a été supprimer avec succès')
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <div>
            <div className="w-100 d-flex justify-content-between align-items-center mb-4 px-4">
                <h3 className="fw-bolder">{messages.length > 0 && messages[0]?.projet_data?.intitule ? messages[0]?.projet_data?.intitule : 'Renseignements'}</h3>
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
            <div className="bg-white overflow-y-auto px-4" style={{ maxHeight: '75vh' }}>
                {loading && (
                    <div className="message-item border d-flex align-items-center justify-content-center my-2">
                        <CircularProgress />
                    </div>
                )}
                {(messages || []).map((item, index) => (
                    <div key={index} className="message-item border mb-3">
                        {/* <div className="message-seen" style={{ backgroundColor: item.vu === 1 ? "green" : "#c34839" }}></div> */}
                        <div className="d-flex align-items-center justify-content-between lh-sm">
                            <div className="d-flex align-items-center">
                                <div className="message-sender me-3">
                                    {item.envoyeur === user?.id ? 'Vous' : item.sender?.nom + ' ' + item.sender?.prenom}
                                </div>
                                <div className="message-clock small text-muted">
                                    <p className="bi bi-clock d-flex align-items-center"></p> <p className="text-capitalize ms-2">Envoyé le  <span className="text-capitalize ms-1">{moment(item.created_at).format(" DD MMMM YYYY [à] HH:mm:ss")}</span></p>
                                </div>
                            </div>
                            {(item.envoyeur === user?.id && item?.vu === 0) && (
                                <div className="d-flex align-items-center cursor-pointer" title="Supprimer le message" onClick={() => deleteMessage(item?.id)}>
                                    <span className="bi bi-trash text-white fw-bolder bg-primary p-3 icon-click rounded"></span>
                                </div>
                            )}
                        </div>
                        <div className="message-text">
                            {item.message}
                            {(item?.attachements && item?.attachements?.length > 0) && (
                                <div className="d-flex justify-content-start align-items-center mt-1">
                                    {(item?.attachements || []).map((file, index) => (
                                        <Tooltip key={index} title="Télécharger" arrow>
                                            <Chip icon={file?.type === 'IMAGE' ? (<ImageIcon />) : (file?.type === 'VIDEO' ? (<MovieCreation />) : (<FilePresent />))} label={file?.nom} size="small" component="a" target="_blank" href={file?.url} clickable color="primary" variant="outlined" className="me-2" style={{maxWidth: '20%'}} />
                                        </Tooltip>
                                    ))}
                                </div>
                            )}
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
                        <Grid item xs={12} md={12} className="text-center">
                            <label htmlFor="media-files" className="mb-1">
                                <Input multiple id="media-files" type="file" onChange={changeMedia} />
                                <Button className="btn-default btn-rounded" variant="contained" component="span" size="small">
                                    Ajouter un ou plusieur fichiers
                                </Button>
                            </label>

                            {medias.length > 0 && (
                                <List sx={{ width: '100%' }}>
                                    {medias.map((file, index) => (
                                        <div key={index}>
                                            <Divider />
                                            <ListItem
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
                                        </div>
                                    ))}
                                </List>
                            )}
                            <Divider className="mb-1" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <LoadingButton
                                    className="btn-default btn-rounded flex flex-align-center flex-justify-center w-50"
                                    loading={sendLoading}
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