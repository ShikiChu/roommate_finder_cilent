import useCustomHook from "../useCustomHook";
import { Link } from "react-router-dom";

  // usng this to create a json server to act like a api
    // npx json-server --watch data/dummy.json --port 8080 
    
const Home = () => {
    const { data: posts, loading, errorMsg } = useCustomHook('http://localhost:8080/post');

    return (
        <div className="home">
            <h2>Rooms for rent</h2>
            {/* loading msg */}
            {loading && <p>Loading...</p>}
            {/* error msg */}
            {errorMsg && <p>{errorMsg}</p>}
            {/* details of each posts */}
            {posts && posts.map((post) => (
                <div key={post.id} className="post">
                    <Link to = {`/posts/${post.id}`}>
                        <h3>Title: {post.title}</h3>
                        <p>{post.body}</p>
                        <img src={post.imageUrl} alt="room_img" ></img>
                        <p>Type: {post.houseType}</p>
                        <small>Rent: {post.price}</small>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Home;
