import * as React from 'react';
import '../../../../styles/dashboard.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { HomeData } from '../../../../data';
import { styled, TextField, FormControl, Button, Divider, List, ListItem, ListItemAvatar, Avatar, IconButton, ListItemText } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';

const Input = styled('input')({
    display: 'none',
});

const RepondMessagePorteurProjet = (props) => {

    const { history } = props;

    const [message, setMessage] = React.useState(null)
    const [medias, setMedias] = React.useState([])
    const [answer, setAnswer] = React.useState(false)

    function AnswerBox() {
        setAnswer(!answer)
    }

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

    React.useEffect(() => {
        setMessage(HomeData.messagesData[0]);
    }, [props])

    return (
        <div>
            <div className="w-100 d-flex justify-content-start align-items-center mb-4">
                <BsArrowLeft style={{ cursor: 'pointer' }} size={35} fill="grey" onClick={() => history.goBack()} />
            </div>
            <div className="dash-container-right bg-white">
                <div className="message-read p-3">
                    <div className="message-head d-flex">
                        <img className="message-profil" alt="" src={message?.profile} />
                        <div className="message-title d-flex flex-column">
                            <h3>{message?.name}</h3>
                            <span>{message?.object}</span>
                            <span style={{ color: 'grey' }}>{message?.date} | {message?.hour}</span>
                        </div>
                    </div>
                    <div className="message-body mt-2">
                        {message?.content}
                    </div>
                    <div className="message-body mt-2">
                        {answer ? (
                            <div className="d-flex flex-column align-items-center border-top pt-5">
                                <FormControl sx={{ m: 1, width: "70%" }}>
                                    <TextField
                                        fullWidth
                                        required
                                        variant="filled"
                                        multiline
                                        label="Votre message"
                                        placeholder="message"
                                        rows={10}
                                    />
                                </FormControl>
                                <div className="pt-2" style={{ width: "70%" }}>
                                    <h5>Ajouter des pieces jointes</h5>
                                    <label htmlFor="photo-profile">
                                        <Input accept="image/*" id="photo-profile" type="file" onChange={changeMedia} />
                                        <Button className="btn-default" variant="contained" component="span">
                                            Ajouter
                                        </Button>
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
                                </div>
                                <div className="my-2" style={{ width: "70%" }}>
                                    <Divider></Divider>
                                </div>
                                <div className="d-flex justify-content-end align-items-center my-2" style={{ width: "70%" }}>
                                    <Button color="primary" className="btn-default me-2" variant="contained">Envoyer</Button>
                                    <Button color="secondary" className="btn-default" variant="contained" onClick={() => AnswerBox()}>Annuler</Button>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-end align-items-center border-top py-2" style={{ width: "100%" }}>
                                <Button color="primary" className="btn-default" variant="contained" onClick={() => AnswerBox()}>Repondre</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepondMessagePorteurProjet;