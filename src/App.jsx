import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Users />
                </Route>

                <Route exact path="/:id/details">
                    <UserDetails />
                </Route>

                <Route path="*"> 
                    <NotFound />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default App;

// * is called the wildcard operator. Any path other than the ones specified will lead to this. Can also be left out in this instance