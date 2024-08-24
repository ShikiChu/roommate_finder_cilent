import { Link } from "react-router-dom";
import MyPosts from "./MyPosts";

const UserDashboard = () => {
  const username = sessionStorage.getItem('username');
  console.log(`**** in UserDashboard component *********`);
  console.log(`username = ${username}!`);
  console.log(`sessionStorage = ${sessionStorage}!`);

  return (
    <div className="UserDashboard">
      <h2>Welcome, {username}!</h2>
      <div className="actions">
        <Link to="/create">Create post</Link>
      </div>
      <MyPosts></MyPosts>
    </div>
  );
};

export default UserDashboard;
