import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import Nav from './сomponents/Nav';
import useRoutes from './hooks/routes.hook';
import { fetchBooks } from './redux/actions/book'
import Loader from './сomponents/Loader';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = () => {
  const routes = useRoutes();
  const { loadings } = useSelector(state => state.book);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);


  return (
    <div className="container">
      <Nav />
      {!loadings.books && routes}
      {loadings.books && <Loader />}
    </div>
  );
}

export default App;
