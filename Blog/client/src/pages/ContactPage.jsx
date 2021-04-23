import {UseContext, useContext} from "react";
import {UserContext} from '../Context/UserContext';


const ContactPage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <h1>Contact Page</h1>;
      <h3>
        <strong>current user</strong>:{user}
      </h3>
      <button onClick={() => setUser("Contact")}>Change User</button>
    </div>
  );
};

export default ContactPage;
