import React from 'react';
import { useSelector } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Nav from './сomponents/Nav';
import useRoutes from './hooks/routes.hook';


const App = () => {
  const routes = useRoutes();

  return (
    <div className="container">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
