import React from 'react';
import { Route , Switch} from 'react-router-dom';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Header from './Components/Header/index.jsx'
import Profile from './Components/Profile/index.jsx'
import Main from './Components/Main/index.jsx'
import Login from './Components/Login/index.jsx'
import News from './Components/News/index.jsx'

class App extends React.Component {
  state = {
    isAuth:false,
  }
  render(){
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/profile' component={(this.state.isAuth)?Profile:Login}/>
          <Route exact path='/news' component={News}/>
        </Switch>
      </div>
    );
  }

  componentDidMount(){
    let isAuth = false;
    isAuth = !!localStorage.getItem('isAuth');
    if(isAuth) this.setState({isAuth:isAuth});
  }
  
}

export default App;
