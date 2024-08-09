import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = sessionStorage.getItem('username') ? true : false;
  console.log(`**** in Navbar component *********`);
  console.log(`isLoggedIn = ${isLoggedIn}!`);
    return (
      <>
      {/* <div className="router"> */}
        <nav className="navbar">
          <Link to="/" >
            <h1>Roommates Finder</h1>
          </Link>
          <div className="links">
            <Link to="/" >
              Home
            </Link>
            {/* <Link to="/userDashboard" >
              Dashboard
            </Link> */}
            {/* <Link to="/Login" >
              Login
            </Link> */}
            {
              isLoggedIn && (<Link to="/userDashboard" >Dashboard</Link>)
            }
            {
              isLoggedIn ? (<Link to="/Logout" >Logout</Link>)
              :(<Link to="/Login" >Login</Link>)
            }
            <Link to="/Signup" >
              Sign up
            </Link>
          </div>
        </nav>
      {/* </div> */}
      </>
      );
}
 
export default Navbar;
