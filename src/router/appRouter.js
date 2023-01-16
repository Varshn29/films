import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import FilmDetails from "../compoments/FilmDetails/FilmDetails";
import FilmList from "../compoments/FilmList/FilmList";

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact={true} />
                <Route path='/film-list' component={FilmList} exact={true} />
                <Route path='/flim-details' component={FilmDetails} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;