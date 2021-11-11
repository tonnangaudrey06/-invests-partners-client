import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../core/guards/auth";
import {
  Auth,
  Home,
  Projet,
  ProjetSecteur,
  ProjetTown,
  Dashboard,
  ProjetDetails,
  About,
  Contact,
  DashboardInvestor,
  Event,
  ResetPassword,
  EventDetails
} from "../modules";

const AppNavigator = (props) => {
  const {history} = props;
  return (
    <Switch history={history}>
      <Route exact path="/" component={Home} />
      <Route path="/about-us" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/events" component={Event} />
      <Route exact path="/events/:id" component={EventDetails} />
      <ProtectedRoute exact path="/projets" component={Projet} role={4} />
      <ProtectedRoute exact path="/projets/:section" component={ProjetSecteur} role={4} />
      <ProtectedRoute exact path="/projets/:section/:town" component={ProjetTown} role={4} />
      <ProtectedRoute exact path="/projets/:section/:town/:projet/details" role={4} component={ProjetDetails} />
      <ProtectedRoute path="/dashboard" component={Dashboard} role={3} />
      <ProtectedRoute path="/investor" component={DashboardInvestor} role={4} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/auth/password/reset/:token" component={ResetPassword} />
      <Route component={Home} />
    </Switch>
  );
}

export default AppNavigator;