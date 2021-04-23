import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UseContext } from "..";

const ProfileDetail = () => {
  const [student, setStudent] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:4000/students/${params.userId}`
      );
      const result = await data.json();
      // setStudents(await data.json());
      setStudent(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile Details</h1>
      <hr />
      {/* <pre>{JSON.stringify(params, null, 2)}</pre> */}
      <h1>{`${student.first_name} ${student.last_name}`}</h1>
      <p>
        <strong>Gender:</strong>
        {student.gender}
      </p>
      <p>
        <strong>Email:</strong>
        {student.email}
      </p>
      <p>
        <strong>Class:</strong>
        {student.class}
      </p>

      <button onClick={() => history.goBack()}>Go Back</button>
      <button onClick={() => history.push("/")}>Go Home</button>
    </div>
  );
};

export default ProfileDetail;
