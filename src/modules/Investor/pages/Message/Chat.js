import * as React from 'react';
import '../../../../styles/dashboard.scss';
import { BiPlusMedical } from 'react-icons/bi';
import { HomeData } from '../../../../data';
import { Button } from '@mui/material';

const ChatMessagesPorteurProjet = ({ match, history }) => {

    return (
        <div>
            <div className="w-100 d-flex justify-content-end align-items-center mb-4">
                <Button
                    onClick={() => history.push(`${match.url}/new`)}
                    variant="contained"
                    startIcon={<BiPlusMedical />}
                >Nouveau message</Button>
            </div>
            <div className="dash-container-right bg-white">
                {HomeData?.messagesData.map((item, index) => (
                    <div onClick={() => history.push(`${match.url}/${index}/read`)} key={index} className="message-line">
                        <div className="message-status" style={{ backgroundColor: item.read ? "green" : "#c5473b" }}></div>
                        <div className="message-title">
                            {item.name}
                        </div>
                        <div className="message-content">
                            {item.object}
                        </div>
                        <div className="message-time">
                            {item.date} | {item.hour}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChatMessagesPorteurProjet;