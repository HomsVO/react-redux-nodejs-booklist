import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import NewsPage from '../pages/NewsPage';
import LoginPage from '../pages/LoginPage';

const useRoutes = (isAuth) => {


    if(isAuth){
        return (
            <Switch>
                <Route exact path="/" component={NewsPage} />
                <Redirect to="/" />
            </Switch>
        )
    }

    return ( 
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Redirect to="/login" />
        </Switch>
    )
} 
export default useRoutes;