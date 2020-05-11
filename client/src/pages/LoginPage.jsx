import React, { useState } from 'react';
import { connect } from 'react-redux';

const authData = {
    login: "Admin",
    password: "12345"
}

const LoginPage = (props) => {
  const [password, setPassword] = useState('12345');
  const [login, setLogin] = useState('Admin');

  const logIn = (e) => {
      e.preventDefault();

      if(String(password) === authData.password && login === authData.login){
        // this.props.onLogIn();
        props.history.push('/');
        localStorage.setItem('isAuth',true);
      }

      return false;
  }
    return (
      <div className="container">
        <h1>Login</h1>
        <div className="container w-50 mt-5">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Login: Admin</label>
              <input type="text" className="form-control" id="login" value={login} onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password: 12345</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" onClick={logIn} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
  );
}

export default connect(
  state => ({
    store:state
  }),
  dispatch => ({
    onLogIn : () =>{
      dispatch({
        type:"LOG_IN"
      })
    }
  })
)(LoginPage);
