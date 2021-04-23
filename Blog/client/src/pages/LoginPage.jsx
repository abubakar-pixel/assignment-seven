import {useState} from "react";
import {useHistory} from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState({
      email:"",
      password:""
  })
   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Emma" && password === "password") {
      setAuth(true);
      history.push("/protected");
    } else {
      history.push("./login")
    }
  };


  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input 
          type="text"
          name="username"
          id="username"
          value={user.email}
          onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <label htmlFor="">password</label>
          <input 
            type="text"/>
      </form>
      <h3>
      <strong>Current User</strong>: {user}
     </h3>
     <button onClick={() => setUser("Service")}>change user</button>
    </div>
  );
};

export default LoginPage;
