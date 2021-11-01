import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatMessagesPorteurProjet from './Chat';
import ConversationMessagesPorteurProjet from './Conversation'

const MessagesPorteurProjet = ({ match, history }) => {
    return (
        <Router>
            <Switch>
                <Route exact path={`${match.path}`} component={ConversationMessagesPorteurProjet} />
                <Route exact path={`${match.path}/:receiver/:conversation/:projet/chat`} component={ChatMessagesPorteurProjet} />
                <Route exact path={`${match.path}/:receiver/:conversation/chat`} component={ChatMessagesPorteurProjet} />
            </Switch>
        </Router>
    )
}

export default MessagesPorteurProjet;