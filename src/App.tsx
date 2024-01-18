import './App.css';

function App() {
  return (
    <div className="background">
      <div className="login-form">
        <p className="title">Login Form</p>
        <div className="wrap-button">
          <button className="login-button">Login</button>
          <button className="sign-button">SignUp</button>
        </div>
        <input className="input" placeholder="Email Adress"/>
        <input className="input" placeholder="Password"/>
        <p className="forgot-password">Forgot Password?</p>
        <button className="login-submit">Login</button>
        <p className="not-a-member">Not a member? <span className="sign-sp">SignUp now</span></p>
      </div>
    </div>
  )
}

export default App;
