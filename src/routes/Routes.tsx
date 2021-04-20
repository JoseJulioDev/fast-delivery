import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from '../components/NavBar';
import Orders from '../components/Orders';
import Home from '../components/Home';

function Routes() {
    return(
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/orders" component={Orders} />
                <Route exact path="/"  component={Home} />
            </Switch>
        </BrowserRouter>   
    )
}

export default Routes;