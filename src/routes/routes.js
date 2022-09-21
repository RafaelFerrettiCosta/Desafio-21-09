import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from '../screens/Home';
import Details from '../screens/Details';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route 
          exact 
          path="/" 
          component={Home} 
        />

        <Route 
          exact
          path="/details"
          component={Details}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;