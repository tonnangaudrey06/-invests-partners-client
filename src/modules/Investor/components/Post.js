import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

import projetimg from "../../../assets/img/projet.jpg";

import moment from 'moment';
import 'moment/locale/fr';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post = (props) => {

  const [actualite, setActualite] = React.useState(null);
  const [logo, setLogo] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <Card sx={{ width: '70%' }} classes={{ root: 'shadow-lg rounded' }}>
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
        <CardActions disableSpacing onClick={handleExpandClick} className="cursor-pointer">
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <p className="fs-5 text-muted cursor-pointer">Voir le contenu...</p>
          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className="text-muted" dangerouslySetInnerHTML={{ __html: actualite?.description }}></div>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default Post;