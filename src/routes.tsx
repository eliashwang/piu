import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';
import Feed from './pages/Feed';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/feed" component={Feed}/>
        </BrowserRouter>
    )
}

export default Routes;