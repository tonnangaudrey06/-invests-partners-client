import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NouveauMessagePorteurProjet from './New';
import ChatMessagesPorteurProjet from './Chat';
import RepondMessagePorteurProjet from './Answer'
import ConversationMessagesInvestisseur from './Conversation'

const MessagesPorteurProjet = ({ match, history }) => {
    return (
        <Router>
            <Switch>
                <Route exact path={`${match.path}`} component={ConversationMessagesInvestisseur} />
                <Route exact path={`${match.path}/:receiver/:conversation/:projet/chat`} component={ChatMessagesPorteurProjet} />
                <Route exact path={`${match.path}/new`} component={NouveauMessagePorteurProjet} />
                <Route exact path={`${match.path}/:id/read`} component={RepondMessagePorteurProjet} />
            </Switch>
        </Router>
    )
}

export default MessagesPorteurProjet;