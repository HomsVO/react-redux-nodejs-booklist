import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import BooksPage from '../pages/BooksPage';

const useRoutes = () => {

        return (
            <Switch>
                <Route exact path="/" component={BooksPage} />
                <Redirect to="/" />
            </Switch>
        )
} 
export default useRoutes;