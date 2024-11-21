import './Login.css';
import loginImage from '../assets/images/img-login.png';
import logo from '../assets/images/logo.png'

function Login(){
    return(
    <>
      <div className='login-page'>
        <div className='container'>
            <div className='login-card'>
              <div className='card'>
                  <img className="img-login" src={loginImage} alt='img-login'/>
                    <div className="login-main">
                      <img className="img-logo" src={logo} alt="technimal-logo" width="141" />
                            <form>
                              <div className="form-control">
                                <input className="form-input" type="text" placeholder="Username" />
                                <input className="form-input" type="password" placeholder="Password"/>
                              </div>
                              <button className="form-button">Login</button>
                            </form>
                    </div>  
              </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Login;