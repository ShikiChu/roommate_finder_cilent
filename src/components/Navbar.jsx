
import Home from './Home';
import { Link, Route, Routes } from "react-router-dom";
import NotFound from './NotFound';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Login from './Login';
import Signup from './Signup';
import UserDashboard from './UserDashboard';
import Logout from './Logout';


const Navbar = () => {
  const isLoggedIn = sessionStorage.getItem('username') ? true : false;
  console.log(`**** in Navbar component *********`);
  console.log(`isLoggedIn = ${isLoggedIn}!`);
    return (
      <div className="router">
        <nav className="navbar">
          <Link to="/" >
            <h1>Roommates Finder</h1>
          </Link>
          <div className="links">
            <Link to="/" >
              Home
            </Link>
            <Link to="/userDashboard" >
              Dashboard
            </Link>
            {/* <Link to="/Login" >
              Login
            </Link> */}
            {
              isLoggedIn ? (<Link to="/Logout" >Logout</Link>)
              :(<Link to="/Login" >Login</Link>)
            }
            <Link to="/Signup" >
              Sign up
            </Link>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/posts/:id' element={<PostDetail/>} />
            <Route path = "/create" element = {<CreatePost/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/userDashboard' element={<UserDashboard/>} />
            {/* for page not found */}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
      );
}
 
export default Navbar;
