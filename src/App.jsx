import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UserInfo from './pages/UserInfo';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/userinfo">
                    <UserInfo />
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