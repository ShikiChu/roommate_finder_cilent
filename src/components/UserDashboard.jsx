import { Link, Route, Routes } from "react-router-dom";
import CreatePost from './CreatePost';

const UserDashboard = () => {
  const username = sessionStorage.getItem('username');

  return (
    <div className="UserDashboard">
      <h2>Welcome, {username}!</h2>
      <div className="actions">
        <Link to="/create">Create post</Link>
        <Routes>
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
