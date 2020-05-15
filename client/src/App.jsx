import React, { useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Nav from './сomponents/Nav';
import useRoutes from './hooks/routes.hook';
import { fetchBooks } from './redux/actions/book'

const App = () => {
  const routes = useRoutes();

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);


  return (
    <div className="container">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
