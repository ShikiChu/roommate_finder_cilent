
import Home from './Home';
import { Link, Route, Routes } from "react-router-dom";
import NotFound from './NotFound';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';



const Navbar = () => {
    return (
      <div className="router">
        <nav className="navbar">
        <h1>Roommates Finder</h1>
        <div className="links">
         <Link to="/" >
          Home
         </Link>
          {/* <a href="#">Home</a> */}
          <Link to="/AllPost" >
          All Post
         </Link>
          {/* <a href="#">New Blog</a> */}
          <Link to="/Auth_page" >
          Signup/Login
         </Link>
        </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/posts/:id' element={<PostDetail/>}></Route>
            <Route path = "/create" element = {<CreatePost/>}/>

            {/* for page not found */}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
      );
}
 
export default Navbar;