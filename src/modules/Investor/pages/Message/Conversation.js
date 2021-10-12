import * as React from 'react';
import '../../../../styles/dashboard.scss';
import { BiPlusMedical } from 'react-icons/bi';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import moment from 'moment';
import 'moment/locale/fr'

import { MessageService } from '../../../../core/services';
import { connect } from "react-redux";

const ConversationMessagesInvestisseur = ({ match, history, user }) => {

    const [contacts, setContacts] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const fetchData = async () => {
        setLoading(true);
        try {
            const rs = await MessageService.getAllContacts(user?.id);
            setContacts(rs.data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchData();
    }, [user]);

    return (
        <>
            <div className="w-100 d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bolder">Vos conversations</h3>
                <div className="message-actions d-flex align-items-center">
                    <Button
                        onClick={fetchData}
                        variant="contained"
                        className="me-2"
                        startIcon={<RefreshIcon />}
                    >Actualiser</Button>
                    {/* <Button
                        onClick={() => history.push(`${match.url}/new`)}
                        variant="contained"
                        startIcon={<BiPlusMedical />}
                    >Répondre</Button> */}
                </div>
            </div>
            <div className="dash-container-right bg-white border overflow-hidden">
                {loading && (
                    <div className="d-flex align-items-center justify-content-center my-2">
                        <CircularProgress />
                    </div>
                )}
                {(contacts || []).map((item, index) => (
                    <div onClick={() => history.push(`${match.url}/${item.recepteur.id}/${item.conversation}/${item.projet.id}/chat`)} key={index} className="message-line border-bottom">
                        <div className="message-status" style={{ backgroundColor: item.vu === 1 ? "green" : "#c5473b" }}></div>
                        <div className="message-title border-end d-flex align-items-center">
                            <h4 className="fw-bolder">{item.recepteur?.nom} | {item.projet?.intitule}</h4>
                        </div>
                        <div className="message-content border-end">
                            {item.message}
                        </div>
                        <div className="message-time text-capitalize text-muted">
                            {moment(item.created_at).format("DD MMMM YYYY [à] HH:mm:ss")}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return ({ user: state.auth.user });
}

export default connect(mapStateToProps)(ConversationMessagesInvestisseur);