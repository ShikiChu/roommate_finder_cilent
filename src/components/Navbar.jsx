
import Home from './Home';
import { Link, Route, Routes } from "react-router-dom";
import NotFound from './NotFound';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Login from './Login';
import Signup from './Signup';


const Navbar = () => {
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
          {/* <a href="#">Home</a> */}
          <Link to="/Login" >
          Login
         </Link>
          {/* <a href="#">New Blog</a> */}
          <Link to="/Signup" >
          Sign up
         </Link>
        </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/posts/:id' element={<PostDetail/>}></Route>
            <Route path = "/create" element = {<CreatePost/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            {/* for page not found */}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
      );
}
 
export default Navbar;
