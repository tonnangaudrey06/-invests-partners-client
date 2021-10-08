import { Button, Container } from '../../components';

// import '../../styles/Register.css';

import event from '../../assets/img/events.png';
import ene from '../../assets/img/ene.png';
import image1 from '../../assets/img/imag22.png';
import image2 from '../../assets/img/imag28.png';
import image3 from '../../assets/img/imag27.png';
// import logo from '../../assets/img/logo.png';

import '../../styles/event.scss';

import { HomeData } from '../../data';
import { GoCalendar, GoLocation } from 'react-icons/go';
import { Box, LinearProgress } from '@mui/material';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { TiCalendar } from 'react-icons/ti';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Event = () => {
    return (
        <Container header active="events" footer>
            <div className="d-flex flex-column align-items-center justify-content-center event-header text-white" style={{ backgroundImage: `url(${event})` }}>
                <h1 className="fw-default-title" style={{ fontSize: '3.5em' }}>Title of project or category presentation</h1>
                <p className="my-4">Lorem ipsum dolor sit amet.</p>
                <Button title="Voir les evenements" borderColor='#c5473b' fontColor="white" />
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <h3 className="fw-default-title" style={{ fontSize: '3em' }}>
                            Creez votre reseau d'affaire en prenant part nos sessions.
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                    </div>
                    <div className="col-md-12 col-lg-6 d-flex justify-content-end">
                        <img src={ene} className="img-fluid rounded shadow" alt="" width="600" />
                    </div>
                </div>
                <div className="title-events mt-5">
                    Ce mois
                </div>
                <ResponsiveMasonry>
                    <Masonry columnsCount={3} gutter="20px" className="event-month">
                        <div className="rounded event-month-item">
                            <img src={image1} className="img-fluid rounded shadow" alt="1" />
                            <div className="rounded event-month-item-content">
                                <div style={{ fontWeight: 'bold' }}>
                                    Titre de l'evenement
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                    <div className="events-hover-button">
                                        Participer
                                    </div>
                                    <div style={{ cursor: 'pointer' }}>
                                        En savoir plus
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded event-month-item">
                            <img src={image2} className="img-fluid rounded shadow" alt="2" />
                            <div className="event-month-item-content rounded">
                                <div style={{ fontWeight: 'bold' }}>
                                    Titre de l'evenement
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                    <div className="events-hover-button">
                                        Participer
                                    </div>
                                    <div style={{ cursor: 'pointer' }}>
                                        En savoir plus
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded event-month-item">
                            <img src={image3} className="shadow rounded img-fluid" alt="3" />
                            <div className="rounded event-month-item-content">
                                <div style={{ fontWeight: 'bold' }}>
                                    Titre de l'evenement
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                    <div className="events-hover-button">
                                        Participer
                                    </div>
                                    <div style={{ cursor: 'pointer' }}>
                                        En savoir plus
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded event-month-item">
                            <img src={image3} className="img-fluid rounded shadow" alt="4" />
                            <div className="rounded event-month-item-content">
                                <div style={{ fontWeight: 'bold' }}>
                                    Titre de l'evenement
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <TiCalendar size={20} fill="#c5473b" /> 25-06-2021 | 12H00
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                                    <div className="events-hover-button">
                                        Participer
                                    </div>
                                    <div style={{ cursor: 'pointer' }}>
                                        En savoir plus
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Masonry>
                </ResponsiveMasonry>
                <div className="title-events mt-5">
                    AUTRES ÉVÉNEMENTS
                </div>
                <ResponsiveMasonry>
                    <Masonry columnsCount={3} gutter="20px" className="events-autre">
                        {HomeData.eventsData.map((item, index) => (
                            <div key={index} className="events-autre-item shadow">
                                <div className="events-autre-item-img">
                                    <div className="position-relative" style={{height: 'inherit'}}>
                                        <img src={item.picture} className="shadow w-100" alt="" />
                                        <div className="event-autre-item-img-cover position-absolute">
                                            <div className="button-price-events-component">{item.price} XAF</div>
                                            <div className="button-free-events-component">{item.free ? 'Gratuit' : 'Payant'}</div>
                                            <div className="button-bookmark-events-component">{item.bookmark ? <BsBookmarkFill fill='#c5473b' size={15} /> : <BsBookmark fill='#c5473b' size={15} />}</div>
                                        </div>
                                    </div>
                                </div>
                                <small className="text-muted small" style={{fontSize: ".8em"}}>
                                    Organiser par INVEST AND PARTNERS
                                </small>
                                <h3 className="fw-default-title" style={{margin: '.5em 0'}}>
                                    {item.name}
                                </h3>
                                <div className="d-flex align-items-center w-100 mt-1">
                                    <GoCalendar />
                                    <p className="lh-sm fs-6 ml-1">{item.debut} | <small>De 08H00 à 04H00</small></p>
                                    {/* <p className="lh-sm fs-6 ml-4">Au{item.fin} <br /> <small>08H00-14H00</small></p> */}
                                </div>
                                <div className="d-flex align-items-center w-100 mt-1">
                                    <GoLocation />
                                    <p className="lh-sm fs-6 ml-1">{item.location}</p>
                                </div>
                                <Box sx={{ mb: 5 }}>
                                    <Box sx={{ my: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', color: 'grey' }}><div>Nombre de places</div><div>{item.places}</div></div>
                                        <LinearProgress sx={{ width: '100%' }} variant="determinate" value={(item.places * 100) / item.places} />
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', color: 'grey' }}><div>Places restantes</div><div>{item.remaining}</div></div>
                                        <LinearProgress sx={{ width: '100%' }} variant="determinate" value={100 - ((item.remaining * 100) / item.places)} />
                                    </Box>
                                </Box>
                                <div>

                                </div>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <div className="row">

                </div>
            </div>
        </Container>
    );
}

export default Event;