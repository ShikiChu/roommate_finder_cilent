import { Link, Route, Routes } from "react-router-dom";
import CreatePost from './CreatePost';
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
        <Routes>
          {/* <Route path="/create" element={<CreatePost />} /> */}
        </Routes>
      </div>
      <MyPosts></MyPosts>
    </div>
  );
};

export default UserDashboard;
