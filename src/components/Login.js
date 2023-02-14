import { useState, useEffect } from "react"

export default function Login() {
  // States to handle the form
  const [userList, setUserList] = useState( JSON.parse(localStorage.getItem("userList")) || [])  
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: ""
  })
  const [showSignupSignup, setSignupSignup] = useState(false)

  // Handle the display of the Sign up/Sign in 
  const handleSigninSignup = () => {
    setSignupSignup(!showSignupSignup)
  }
 
  // Functions to handle the input changes and manage its state
  const handleChangeLogin = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value} );
  }
  
  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(userList));
  }, [userList]);

  // Function to handle the form submission when user is registered
  const handleSubmit = (e) => {
    e.preventDefault();

    setUserList([...userList, { name, username, password }]);
    localStorage.setItem('userList', JSON.stringify(userList));
    
    alert('User has been added to local storage');
    setName('');
    setUsername('');
    setPassword('');
  }

  // Function to handle the Login
  let isUserAuth   
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("userList"));
    isUserAuth = storedUsers.some(user => user.username === userLogin.username && user.password === userLogin.password);
    if (isUserAuth) {
      console.log("Login successfull");
      setUserLogin({
        username: "",
        password: ""
      })
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/home";
    } else {
      console.log("Login failed");
      setUserLogin({
        username: "",
        password: ""
      })
    }
    console.log(isUserAuth)
    return isUserAuth
  }

    return (
      <div className="login--container">
        {showSignupSignup ? <div className="login--modal">
          <h3>CREATE AN ACCOUNT</h3>
          <form onSubmit={handleSubmit}>
            <div className="login--input-space">
              <input 
              type="text"
              value={name}
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="login--input-space">
              <input 
              type="text"
              value={username}
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="login--input-space">
            <input 
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="cta-button">
              Sign up
            </button>
            <a href="#" onClick={handleSigninSignup} className="toggle-login-link">I'm already a member</a>
          </form>
          </div> : <div className="login--modal">
          <form onSubmit={handleLogin}>
            <div className="login--input-space">
              <input
              type="text"
              name="username"
              placeholder="Username"
              value={userLogin.username}
              onChange={handleChangeLogin}/>
            </div>
            <div className="login--input-space">
              <input
              type="password"
              name="password"
              placeholder="Password"
              value={userLogin.password}
              onChange={handleChangeLogin}/>
            </div>
            <button className="cta-button">
              Sign in
            </button>
            <a href="#" onClick={handleSigninSignup} className="toggle-login-link">Create an account</a>
          </form>
        </div>}
      </div>
    );
  }