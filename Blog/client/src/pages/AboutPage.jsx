import {useContext} from "react";
import {UserContext} from '../Context/UserContext';

const AboutPage = () => {
  const [user, setUser] = useContext(UserContext);

  return(
    <div>
      <h1>About Page</h1>
      <h3>
        <strong>current user</strong>:{user}
      </h3>
      <button onClick={() => setUser("About")}>change user</button>
    </div>
  
  );
  
};

export default AboutPage;
