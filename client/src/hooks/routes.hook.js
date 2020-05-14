import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import BooksPage from '../pages/BooksPage';
import BookAddPage from '../pages/BookAddPage';

const useRoutes = () => {

        return (
            <Switch>
                <Route exact path="/" component={BooksPage} />
                <Route exact path="/add" component={BookAddPage} />
                <Redirect to="/" />
            </Switch>
        )
} 
export default useRoutes;