import { Switch, Route } from "react-router-dom";
import { HomeScreen, LoginScreen } from "../screens";

const AppNavigator = () => {
  return ( 
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/Login" component={LoginScreen} />
    </Switch>
   );
}
 
export default AppNavigator;