import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/students");
      const result = await data.json();
      // setStudents(await data.json());
      //setStudents(()await data.json());
      setStudents(result);
    };

    fetchData();
  }, []);

  const [user, setUser] = useContext(userContext);

  return (
    <div>
      <h1>Students Page</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/profile/${student.id}`}>
              {`${student.first_name} ${student.last_name}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
