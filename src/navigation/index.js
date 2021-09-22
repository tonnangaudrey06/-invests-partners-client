import { Switch, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, ProjectsScreen } from "../screens";

const AppNavigator = () => {
  return ( 
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/Login" component={LoginScreen} />
      <Route exact path="/Projects" component={ProjectsScreen} />
    </Switch>
   );
}
 
export default AppNavigator;