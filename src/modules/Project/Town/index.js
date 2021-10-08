// import { HomeData } from '../../../data';
import '../../../styles/projet.scss'

import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { SecteurService } from '../../../core/services';
import projetimg from "../../../assets/img/projet.jpg";

import { AiFillLike, AiOutlineHeart } from 'react-icons/ai';
import { MdPlace } from 'react-icons/md';
import { GiHistogram } from 'react-icons/gi';

import { Container } from '../../../components';
import { Link } from 'react-router-dom';

const ProjetTown = ({ match, location, history }) => {

    const { params: { section, town } } = match;

    const [ville, setVille] = React.useState('');
    const [pays, setPays] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [projets, setProjets] = React.useState([]);

    const handleChange = (event) => {
        if (event.target.name === "ville") {
            setVille(event.target.value);
        } else if (event.target.name === "pays") {
            setPays(event.target.value);
        } else if (event.target.name === "level") {
            setLevel(event.target.value);
        }
    };

    React.useEffect(() => {
        async function fetchData() {
            const rs = await SecteurService.getSecteurProjet(section, town);
            setProjets(rs.data.data);
        }
        fetchData();
    }, [section, town]);

    return (
        <Container header headerActive active="projets" footer>
            <div className="projects-top-all-projet bg-light pb-5">
                <div className="search-bar-container-all-projet">
                    <div className="container">
                        <div className="row gy-3">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <div className="search-bar">
                                    <select className="projects-input-button" type="button" value="OK">
                                        <option>Catégories</option>
                                    </select>
                                    <input placeholder="Rechercher" className="projects-text-input" type="text" name="search" id="" />
                                </div>
                            </div>
                            <div className="col-12 row pt-5">
                                <div className="col-sm-12 col-md-4">
                                    <FormControl sx={{ m: 1, minWidth: "100%" }}>
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            name="pays"
                                            variant="filled"
                                            label="Pays"
                                            value={pays}
                                            onChange={handleChange}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <MdPlace />
                                                    </InputAdornment>
                                                ),
                                                shrink: true,
                                                style: { border: '1px solid rgba(0, 0, 0, 0.42)', borderBottom: 'none', background: 'transparent', borderRadius: '4px' }
                                            }}
                                        >
                                            <MenuItem value=""></MenuItem>
                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <FormControl sx={{ m: 1, minWidth: "100%" }}>
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            name="ville"
                                            variant="filled"
                                            label="Ville"
                                            value={ville}
                                            onChange={handleChange}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <MdPlace />
                                                    </InputAdornment>
                                                ),
                                                shrink: true,
                                                style: { border: '1px solid rgba(0, 0, 0, 0.42)', borderBottom: 'none', background: 'transparent', borderRadius: '4px' }
                                            }} >
                                            <MenuItem value=""></MenuItem>
                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <FormControl sx={{ m: 1, minWidth: "100%" }}>
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            name="level"
                                            variant="filled"
                                            label="Niveau d'evolution"
                                            value={level}
                                            onChange={handleChange}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <GiHistogram />
                                                    </InputAdornment>
                                                ),
                                                shrink: true,
                                                style: { border: '1px solid rgba(0, 0, 0, 0.42)', borderBottom: 'none', background: 'transparent', borderRadius: '4px' }
                                            }} >
                                            <MenuItem value="">Tous</MenuItem>
                                            <MenuItem value={'IDEE'}>Idée</MenuItem>
                                            <MenuItem value={'PROTOTYPE'}>Prototype</MenuItem>
                                            <MenuItem value={'SUR_MARCHE'}>Sur le marché</MenuItem>
                                        </TextField>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="container-md my-5">
                <div className="row g-5">
                    {projets.map((item, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                            <Card classes={{ root: 'projects-cards bg-light' }} sx={{ borderTopLeftRadius: '1em', borderTopRightRadius: '1em', position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    image={item.logo ? item.logo : projetimg}
                                    alt={item.intitule}
                                />
                                <CardContent>
                                    <div className="projects-cards-title-container mb-1">
                                        <Link to={`${match.url}/${item.id}/details`} className="text-decoration-none text-dark">
                                            <h5 className="fw-bold">{item.intitule}</h5>
                                        </Link>
                                        <AiOutlineHeart fill={"#c5473b"} size={25} />
                                    </div>
                                    <p className="projects-cards-content mb-1">{item.description}</p>
                                    <p className="mb-1 text-primary fw-bold">{item.financement} XAF déjà investi</p>
                                    <div className="projects-cards-bottom">
                                        <div>{item.investisseur?.lenght} contributions</div>
                                        <div className="d-flex align-items-center"><AiFillLike className="me-1" />4</div>
                                    </div>
                                </CardContent>
                                <div className="projects-cards-plus">
                                    <Link to={`${match.url}/${item.id}/details`} className="projects-cards-plus-button text-decoration-none text-white">
                                        En savoir plus
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

        </Container>
    );
}

export default ProjetTown;