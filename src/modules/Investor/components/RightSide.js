import { Box, ImageList, ImageListItem, Grid } from '@mui/material';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import FilePresent from '@mui/icons-material/FilePresent';
import React from 'react';

import logo from '../../../assets/img/logo.png'

import { CircularProgressbar } from 'react-circular-progressbar';

import '../../../styles/dashboard.scss';
import { moneyFormat, numberPercentage } from '../../../core/utils/helpers';

// import { BiPlusMedical } from 'react-icons/bi';

// import { Link } from 'react-router-dom';

const RightSide = ({ form, projet }) => {

    const ProjetsInformations = () => {
        return (
            <div className="p-4">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Projet</p>
                        <p className="fs-5">{projet?.intitule}</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={6} className="mt-3">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Secteur d'activite</p>
                        <p className="fs-5">{projet?.secteur_data?.libelle}</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={6} className="mt-3">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Niveau d'avancement</p>
                        <p className="fs-5">{projet?.avancement_complet}</p>
                        <Divider></Divider>
                    </Grid>
                    <Grid item xs={12} md={12} className="mt-4">
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Besoin d'un financement de</p>
                        <p className="fs-5">{moneyFormat(projet?.financement)} XAF</p>
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
                        {projet?.membres.length > 0 && (
                            <List sx={{ width: '100%' }}>
                                <ListItem disableGutters>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FilePresent />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={"Document presentation"} />
                                </ListItem>
                            </List>
                        )}
                    </Grid>

                    <Grid item xs={12} md={6} className="mt-4">
                        <Divider></Divider>
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Logo</p>
                        {logo && (
                            <List sx={{ width: '100%' }}>
                                <ListItem disableGutters>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={logo} />
                                </ListItem>
                            </List>
                        )}
                    </Grid>

                    <Grid item xs={12} md={6} className="mt-4">
                        <Divider></Divider>
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Document de presentation</p>
                        {projet?.doc_presentation && (
                            <List sx={{ width: '100%' }}>
                                <ListItem disableGutters>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FilePresent />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={"Document presentation"} />
                                </ListItem>
                            </List>
                        )}
                    </Grid>

                    <Grid item xs={12} md={12} className="mt-4">
                        <Divider></Divider>
                        <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Medias</p>
                        <List sx={{ width: '100%' }}>
                            {projet?.medias?.filter((file) => file?.type !== 'IMAGE' && file?.source === 'PP').map((file, index) => {
                                return (
                                    <>
                                        <ListItem
                                            key={index}
                                            disableGutters
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FilePresent />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={file?.nom} />
                                        </ListItem>
                                        <Divider />
                                    </>
                                )
                            })}
                        </List>
                        <Box className="mt-2" sx={{ width: "100%", maxHeight: 450, overflowY: 'scroll', overflow: "auto" }}>
                            <ImageList variant="masonry" cols={3} gap={7}>
                                {projet?.medias?.filter((file) => file?.type === 'IMAGE' && file?.source === 'PP').map((media) => {
                                    return (
                                        <ImageListItem key={media?.id}>
                                            <img className="rounded img-fluid shadow"
                                                src={`${media?.url}?w=248&fit=crop&auto=format`}
                                                srcSet={`${media?.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={media?.nom}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    )
                                })}
                            </ImageList>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const News = () => {
        return (
            <div className="container mt-3 mb-5">
                <div className="mt-5">
                    <p className="text-center w-100 fs-2 mb-5" style={{ fontFamily: 'building' }}>Toutes les actualites</p>
                </div>
                {/*  {HomeData.newsData.map((projet, index) => (
                    <div key={index} className="news-container">
                        <div className="header-news-container">
                            <div style={{ width: 35, height: 35, border: 'solid', borderWidth: 1, borderRadius: 80 }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ color: '#c5473b' }}>{projet?.titleP}</div>
                                <div style={{ fontSize: 15, color: 'gray' }}>{projet?.date} | {projet?.hour}</div>
                            </div>
                        </div>
                        <p style={{ fontFamily: 'building', fontSize: 18, color: 'gray' }}>{projet?.title}</p>
                        <p style={{}}>{projet?.content}</p>
                        <img src={projet?.image} />
                        <div style={{ display: 'flex', alignItems: 'center', color: '#c5473b', marginTop: 2, fontSize: 10 }}><AiOutlineLike fill='#c5473b' size={20} /> <div>{projet?.like}</div></div>
                    </div>
                ))} */}
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
                            text={projet?.iv_pourcent + '%'}
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
                        <p className="fs-4 text-primary">{moneyFormat(projet?.financement)} XAF</p>
                    </div>
                    <div className="mb-1">
                        <p className="fw-bolder fs-2 invest-text" style={{ fontFamily: 'building' }}>Montant investi</p>
                        <p className="fs-4 text-primary">{moneyFormat(projet?.iv_total)} XAF</p>
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
                            <p className="fs-4 lh-sm fw-bolder">{projet?.etat_complet}</p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Chiffre d'affaires previsionnel: </p>
                            <p className="fs-4 lh-sm fw-bolder">{moneyFormat(projet?.ca_previsionnel)} XAF</p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Duree du projet: </p>
                            <p className="fs-4 lh-sm fw-bolder">{moneyFormat(projet?.duree)}</p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Retour sur investissement: </p>
                            <p className="fs-4 lh-sm fw-bolder">{moneyFormat(projet?.rsi)} ans</p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Duree du projet: </p>
                            <p className="fs-4 lh-sm fw-bolder"></p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Taux de rentabilite</p>
                            <p className="fs-4 lh-sm fw-bolder">{numberPercentage(projet?.taux_rentabilite)}</p>
                            <Divider></Divider>
                        </div>
                        <div className="mb-1">
                            <p className="fw-bolder fs-3 text-primary" style={{ fontFamily: 'building' }}>Conseille en investissement</p>
                            <p className="fs-4 lh-sm fw-bolder">{projet?.secteur_data?.conseille_data?.nom}</p>
                            <p className="text-muted small lh-sm">Email: {projet?.secteur_data?.conseille_data?.email}</p>
                            <p className="text-muted small lh-sm">Téléphone: {projet?.secteur_data?.conseille_data?.telephone}</p>
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
        <div>
            {form === "/info" && <ProjetsInformations />}
            {form === "/analyse" && <Analyse />}
            {form === "/news" && <News />}
            {form === "/invest" && <Invest />}
        </div>
    )
}

export default RightSide;