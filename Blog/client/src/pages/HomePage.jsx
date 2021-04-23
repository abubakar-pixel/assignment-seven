import {useContext} from "react";
  import {UserContext} from '../Context/UserContext';

const HomePage = () => {
  const [user, setUser] = useContext(UserContext);

  return (
  <div>
     <h1>Home Page</h1>
     <h3>
      <strong>Current User</strong>: {user}
     </h3>
     <button onClick={() => setUser("Home")}>change user</button>
  </div>  
  );

};

export default HomePage;
