import { Route, Routes } from "react-router-dom";

import Home from './Home';
import NotFound from './NotFound';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import UserDashboard from './UserDashboard';

const MyRouters = () => {

    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path = "/create" element = {<CreatePost/>}/>
            <Route path='/posts/:id' element={<PostDetail/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/userDashboard' element={<UserDashboard/>} />
            {/* <Route path="/create" element={<CreatePost />} /> */}
            {/* for page not found */}
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        </>
    );

}

export default MyRouters;