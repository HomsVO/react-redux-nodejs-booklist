import React from 'react';
import { connect } from 'react-redux';
import style from './index.module.scss';

class Login extends React.Component {

  state = {
    password:'',
    login:'',
  }

  passwordHandler = (e) => this.setState({password:e.target.value});

  loginHandler = (e) => this.setState({login:e.target.value});

  logIn = (e) => {
      e.preventDefault();

      if(String(this.state.password) === '12345' && this.state.login === 'Admin'){

        this.props.onLogIn();
        this.props.history.push('/profile');
        localStorage.setItem('isAuth',true);
        
      }else{
        
          let errorTag = document.getElementById('loginError');
          errorTag.style.display = 'block';

      }

      return false;
  }
  render(){
      return (
        <div className="container">
          <h1>Login</h1>
          <div className="container w-50 mt-5">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Login</label>
                <input type="text" className="form-control" id="login" value={this.state.login} onChange={this.loginHandler}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.passwordHandler}/>
              </div>
              <p id='loginError' className={style.loginError}>Имя пользователя или пароль введены не верно</p>
              <button type="submit" onClick={this.logIn} className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
    );
  }
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
)(Login);
