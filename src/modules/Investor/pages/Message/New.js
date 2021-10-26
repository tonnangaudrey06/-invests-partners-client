import React, { useState } from 'react';
import '../../../../styles/dashboard.scss';
import { BsArrowLeft } from 'react-icons/bs'
import { styled, TextField, FormControl, Button, Divider, List, ListItem, ListItemAvatar, Avatar, IconButton, ListItemText } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';

const Input = styled('input')({
    display: 'none',
});

const NouveauMessagesPorteurProjet = (props) => {

    const { history } = props;

    const [medias, setMedias] = useState([]);
    
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

    return (
        <div>
            <div className="w-100 d-flex justify-content-start align-items-center mb-4">
                <BsArrowLeft style={{ cursor: 'pointer' }} size={35} fill="grey" onClick={() => history.goBack()} />
            </div>
            <div className="dash-container-right bg-white">
                <div className="d-flex flex-column align-items-center py-5">
                    <div className="mb-2" style={{ width: "70%" }}>
                        <h3 className="fw-bolder">Nouveau message</h3>
                    </div>
                    <FormControl sx={{ m: 1, width: "70%" }}>
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Objet de votre message"
                            placeholder="Objet"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "70%" }}>
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Message"
                            placeholder="Message"
                            multiline
                            rows={10}
                        />
                    </FormControl>
                    <div className="pt-2" style={{ width: "70%" }}>
                        <h5>Ajouter des pieces jointes</h5>
                        <label htmlFor="media-files">
                            <Input multiple id="media-files" type="file" onChange={changeMedia} />
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
                    <div className="d-flex flex-column align-items-center" style={{ width: "70%" }}>
                        <Button className="btn-default" variant="contained">Envoyer</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NouveauMessagesPorteurProjet;