import { Box, ImageList, ImageListItem, Grid } from '@mui/material';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';

import Avatar from '@mui/material/Avatar';
import FilePresent from '@mui/icons-material/FilePresent';
import React, { Fragment } from 'react';

import profil from '../../../assets/img/profil.jpg'

import { CircularProgressbar } from 'react-circular-progressbar';

import '../../../styles/dashboard.scss';
import { moneyFormat, numberPercentage } from '../../../core/utils/helpers';

import { RiDownload2Fill } from 'react-icons/ri';

import Post from "./Post";

const PostContent = (props) => { return (<Post {...props} />); };

const RightSide = ({ form, projet }) => {

    const downloadFile = (fileurl) => {
        window.open(fileurl, '_blank');
    }

    const ProjetsInformations = () => {
        return (
            <div className="p-4">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Logo</p>
                        {projet?.logo && (
                            <a download href={projet?.logo} rel="noreferrer" target="_blank" >
                                <img className="rounded img-fluid shadow"
                                    width="100"
                                    src={`${projet?.logo}?w=248&fit=crop&auto=format`}
                                    srcSet={`${projet?.logo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={projet?.logo}
                                    loading="lazy"
                                />
                            </a>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Projet</p>
                        <p className="fs-5">{projet?.intitule}</p>
                    </Grid>
                    <Grid item xs={12} md={6} className="mt-1">
                        <Divider></Divider>
                        <p className="fw-bolder fs-3 text-primary mt-3" style={{ fontFamily: 'building' }}>Secteur d'activite</p>
                        <p className="fs-5">{projet?.secteur_data?.libelle}</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={6} className="mt-1">
                        <Divider></Divider>
                        <p className="fw-bolder fs-3 text-primary mt-3" style={{ fontFamily: 'building' }}>Niveau d'avancement</p>
                        <p className="fs-5">{projet?.avancement_complet}</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={12} className="mt-4">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Besoin d'un financement de</p>
                        <p className="fs-5">{moneyFormat(projet?.financement)} FCFA</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={12} className="mt-4">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Site web</p>
                        <p className="fs-5">{projet?.site}</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={6} className="mt-4">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Pays d'activite</p>
                        <p className="fs-5">{projet?.pays_activite}</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={6} className="mt-4">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Ville d'activite</p>
                        <p className="fs-5">{projet?.ville_activite}</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={12} className="mt-4">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Description du projet</p>
                        <p className="fs-5">{projet?.description}</p>
                        <Divider></Divider>
                    </Grid>

                    <Grid item xs={12} md={12} className="mt-4">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Membres de votre equipe</p>
                        {projet?.membres.length > 0 &&
                            projet?.membres.map((membre, index) => (
                                <List key={index} sx={{ width: '100%' }}>
                                    <ListItem disableGutters>
                                        <ListItemAvatar>
                                            <Avatar alt={membre?.nom_complet} src={membre?.photo ? membre?.photo : profil} />
                                        </ListItemAvatar>
                                        <ListItemText primary={membre?.nom_complet} secondary={membre?.pivot?.statut} />
                                    </ListItem>
                                </List>
                            ))}
                    </Grid>

                    <Grid item xs={12} md={12} className="mt-4">
                        <Divider></Divider>
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Document de presentation</p>
                        {projet?.doc_presentation && (
                            <List sx={{ width: '100%' }}>
                                <ListItem
                                    disableGutters
                                    secondaryAction={
                                        <IconButton color="primary" onClick={() => downloadFile(projet?.doc_presentation)} edge="end">
                                            <RiDownload2Fill />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FilePresent />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Document presentation" />
                                </ListItem>
                            </List>
                        )}
                        <Divider />
                    </Grid>

                    <Grid item xs={12} md={12} className="mt-4">
                        {/* <Divider></Divider> */}
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Medias</p>
                        <List sx={{ width: '100%' }}>
                            {projet?.medias.map((file, index) => {
                                if (file?.type !== 'IMAGE' && file?.source === 'PP') {
                                    return (
                                        <Fragment key={index}>
                                            <ListItem
                                                disableGutters
                                                secondaryAction={
                                                    <IconButton color="primary" onClick={() => downloadFile(file?.url)} edge="end">
                                                        <RiDownload2Fill />
                                                    </IconButton>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <FilePresent />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={file?.nom} />
                                            </ListItem>
                                            <Divider />
                                        </Fragment>
                                    )
                                }
                                return null;
                            })}
                        </List>
                        <Box className="mt-2" sx={{ width: "100%", maxHeight: 450, overflowY: 'scroll', overflow: "auto" }}>
                            {projet?.medias.length > 0 &&
                                <ImageList variant="masonry" cols={3} gap={7}>
                                    {projet?.medias.map((media) => {
                                        if (media?.type === 'IMAGE' && media?.source === 'PP') {
                                            return (
                                                <ImageListItem key={media?.id} onClick={() => downloadFile(media?.url)}>
                                                    <img className="rounded img-fluid shadow"
                                                        src={`${media?.url}?w=248&fit=crop&auto=format`}
                                                        srcSet={`${media?.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={media?.nom}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                            )
                                        }
                                        return null;
                                    })}
                                </ImageList>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const News = () => {
        return (
            <div className="container mt-3 mb-5">
                <div className="d-flex flex-column align-items-center">
                    {(projet?.actualites || []).map((actualite, index) => (
                        <PostContent key={index} actualite={actualite} logo={projet?.logo} />
                    ))}
                </div>
            </div>
        )
    }

    const Invest = () => {
        return (
            <div className="row">
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbar
                            value={projet?.iv_pourcent}
                            text={ Number(projet?.iv_pourcent || 0).toFixed(2) + '%'}
                            styles={{
                                root: {},
                                path: {
                                    stroke: '#c5473b',
                                    strokeLinecap: 'butt',
                                },
                                trail: {
                                    stroke: '#c5463b8a',
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                text: {
                                    fill: '#c5473b',
                                    fontSize: '1.2em',
                                    fontWeight: '600',
                                    fontFamily: 'Karla'
                                },
                                background: {
                                    fill: 'green',
                                },
                            }}
                        />
                    </div>

                </div>
                <div className="col-md-5" style={{ borderLeft: 'solid', borderLeftWidth: 1, borderLeftColor: 'gray', paddingLeft: 10 }}>
                    <div className="mb-1">
                        <p className="fw-bolder fs-2 invest-text" style={{ fontFamily: 'building' }}>Montant cible</p>
                        <p className="fs-4 text-primary">{moneyFormat(projet?.financement)} FCFA</p>
                    </div>
                    <div className="mb-1">
                        <p className="fw-bolder fs-2 invest-text" style={{ fontFamily: 'building' }}>Montant investi</p>
                        <p className="fs-4 text-primary">{moneyFormat(projet?.iv_total)} FCFA</p>
                    </div>
                    <div className="mb-1">
                        <p className="fw-bolder fs-2 invest-text" style={{ fontFamily: 'building' }}>Nombre d'investisseurs</p>
                        <p className="fs-4 text-primary">{projet?.iv_count} investisseurs</p>
                    </div>
                    {/* <div className="mb-1">
                        <p className="fw-bolder fs-2 invest-text" style={{ fontFamily: 'building' }}>Nombre d'ajout aux favoris</p>
                        <p className="fs-4 text-primary">05</p>
                    </div> */}
                </div>
            </div>
        )
    }

    const Analyse = () => {
        return (
            <div className="container px-5 mt-3 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Etat du projet : </p>
                            <p className="fs-4 lh-sm fw-bolder mb-1">
                                {{
                                    'ATTENTE': <span className="badge bg-secondary p-1">{projet.etat_complet}</span>,
                                    'ATTENTE_VALIDATION_ADMIN': <span className="badge bg-secondary p-1">En attente d'approbation</span>,
                                    'REJETE': <span className="badge bg-danger p-1">{projet.etat_complet}</span>,
                                    'ATTENTE_DOCUMENT_SUP': <span className="badge bg-dark p-1">{projet.etat_complet}</span>,
                                    'ATTENTE_PAIEMENT': <span className="badge bg-warning p-1">{projet.etat_complet}</span>,
                                    'CLOTURE': <span className="badge bg-success p-1">{projet.etat_complet}</span>,
                                    'PUBLIE': <span className="badge bg-success p-1">{projet.etat_complet}</span>,
                                }[projet.etat] || <span className="badge bg-secondary p-1">En attente de publication</span>}
                            </p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Chiffre d'affaires previsionnel: </p>
                            <p className="fs-4 lh-sm fw-bolder">{moneyFormat(projet?.ca_previsionnel)} FCFA</p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Duree du projet: </p>
                            <p className="fs-4 lh-sm fw-bolder">{moneyFormat(projet?.duree)} Mois</p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Retour sur investissement: </p>
                            <p className="fs-4 lh-sm fw-bolder">{moneyFormat(projet?.rsi)} Mois</p>
                            <Divider></Divider>
                        </div>
                        {/* <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Duree du projet: </p>
                            <p className="fs-4 lh-sm fw-bolder"></p>
                            <Divider></Divider>
                        </div> */}
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Taux de rentabilite</p>
                            <p className="fs-4 lh-sm fw-bolder">{numberPercentage(projet?.taux_rentabilite)}</p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Conseiller en investissement</p>
                            <p className="fs-4 lh-sm fw-bolder">{projet?.secteur_data?.conseiller_data?.nom_complet}</p>
                            <p className="text-muted small lh-sm">Email: {projet?.secteur_data?.conseiller_data?.email}</p>
                            <p className="text-muted small lh-sm">Téléphone: {projet?.secteur_data?.conseiller_data?.telephone}</p>
                        </div>
                        {/* <div className="mb-1">
                        <p className="fw-bolder fs-2 invest-text" style={{ fontFamily: 'building' }}>Nombre d'ajout aux favoris</p>
                        <p className="fs-4 text-primary">05</p>
                    </div> */}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {form === "/info" && <ProjetsInformations />}
            {form === "/analyse" && <Analyse />}
            {form === "/news" && <News />}
            {form === "/invest" && <Invest />}
        </>
    )
}

export default RightSide;