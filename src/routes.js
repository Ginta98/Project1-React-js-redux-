import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as page from './pages/rootPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={page.homePage} />
            <Route exact path="/login" component={page.loginPage} />
            <Route exact path="/register" component={page.registerPage} />
            <Route exact path="/intro" component={page.introPage} />
            <Route exact path="/posts" component={page.postPage} />
            <Route exact path="/adminHome" component={page.adminHomePage} />
            <Route exact path="/forumAccount" component={page.forumAccountPage} />
        </Switch>
    </BrowserRouter>

);
export default Routes;