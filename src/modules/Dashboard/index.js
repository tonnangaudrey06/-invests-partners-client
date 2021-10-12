import * as React from "react";
import Sidebar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { logout } from '../../core/reducers/auth/actions'
import { AuthService } from '../../core/services';

import { connect } from "react-redux";

import '../../styles/dashboard.scss';

import { ProjetAdd, ProjetList, ProjectDetails } from './pages/Project'
import ProfilPorteurProjet from './pages/Profile'
import MessagesPorteurProjet from "./pages/Message";

const Dashboard = (props) => {
    const { match, history, location, removeUser, auth } = props;

    const [sectionCss, setSectionCss] = React.useState({ marginLeft: "15%" });

    const goBack = () => {
        history.goBack();
    }

    const handleChangeActive = (value) => {
        if (!value) {
            setSectionCss({ marginLeft: "6%" })
        } else {
            setSectionCss({ marginLeft: "15%" })
        }
    };

    const logoutUser = async () => {
        try {
            await AuthService.logout()
            removeUser()
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="dashboard-section">
            <div className="nav-top d-flex align-items-center justify-content-around p-3">
                <Chip className="me-3" onClick={() => { history.push(`${match.url}/profil`) }} avatar={<Avatar sx={{ width: 30, height: 30 }}>M</Avatar>} label={auth.user.nom_complet} color="primary" variant="outlined" />
                <IconButton className="me-3">
                    <Badge variant="dot" color="primary">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
                <IconButton onClick={logoutUser}>
                    <LogoutIcon />
                </IconButton>
            </div>
            <Router>
                <Sidebar location={location} history={history} rootUrl={match.url} onChangeActive={handleChangeActive} />
                <div className="dashboard-section-content" style={sectionCss}>
                    <div className="mb-5">
                        <Button onClick={goBack} variant="contained" startIcon={<KeyboardReturnIcon />}>
                            Retour
                        </Button>
                    </div>
                    <div className="my-3 pt-5">
                        <Switch history={history}>
                            <Route exact path={`${match.path}/projets/add`} render={(props) => <ProjetAdd history={history} rootUrl={match.url} />} />
                            <Route exact path={`${match.path}/projets`} component={ProjetList} />
                            <Route exact path={`${match.path}/projets/:id`} component={ProjectDetails} />
                            <Route exact path={`${match.path}/messages`} component={MessagesPorteurProjet} />
                            <Route exact path={`${match.path}/profil`} component={ProfilPorteurProjet} />
                            <Redirect from={match.path} to={`${match.path}/projets`} />
                            <Route>
                                <ProjetAdd />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

const mapStateToProps = (state) => ({ auth: state.auth })

const mapDispatchToProps = (dispatch) => {
    return {
        removeUser: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);