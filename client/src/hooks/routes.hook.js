import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import BooksPage from '../pages/BooksPage';
import BookAddPage from '../pages/BookAddPage';
import BookChangePage from '../pages/BookChangePage';

const useRoutes = () => {

        return (
            <Switch>
                <Route exact path="/" component={BooksPage} />
                <Route exact path="/add" component={BookAddPage} />
                <Route exact path="/change/:id" component={BookChangePage} />
                <Redirect to="/" />
            </Switch>
        )
} 
export default useRoutes;