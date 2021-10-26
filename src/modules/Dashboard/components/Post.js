import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import projetimg from "../../../assets/img/projet.jpg";

import moment from 'moment';
import 'moment/locale/fr';

const Post = (props) => {

  const [actualite, setActualite] = React.useState(null);
  const [logo, setLogo] = React.useState(null);

  const downloadFile = (fileurl) => {
    window.open(fileurl, '_blank');
  }

  React.useEffect(() => {
    setActualite(props.actualite);
    setLogo(props.logo);
  }, [props])

  return (
    <>
      <div className="mb-2"></div>
      <Card sx={{ width: '60%' }} classes={{ root: 'shadow-lg rounded' }}>
        <CardHeader
          avatar={
            <Avatar src={logo ? logo : projetimg}></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={actualite?.libelle}
          subheader={moment(actualite?.created_at).format(" DD MMMM YYYY [à] HH:mm:ss")}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">{actualite?.description}</Typography>
        </CardContent>
        {actualite?.image && (
          <CardMedia
            className="cursor-pointer"
            onClick={() => downloadFile(actualite?.image)}
            component="img"
            height="200"
            image={actualite?.image}
            alt="Paella dish"
          />
        )}
      </Card>
    </>
  )
}

export default Post;