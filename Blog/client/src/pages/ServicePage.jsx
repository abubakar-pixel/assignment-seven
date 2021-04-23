import { useContext } from "react";
import {UserContext} from '../Context/UserContext';


const ServicePage = () => {
  const [user, setUser] = useContext(UserContext);
    return(
        <div>
            <h1>Service Page</h1>;
            <h3>
                <strong>Current User</strong>: {user}
            </h3>
            <button onClick={() => setUser("Service")}>change user</button>
        </div>
    ); 

};

export default ServicePage;