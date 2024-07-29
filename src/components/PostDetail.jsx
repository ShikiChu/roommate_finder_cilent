import { useNavigate, useParams } from "react-router-dom";
import useCustomHook from "../useCustomHook";
const PostDetail = () => {
    const {id} = useParams();
    const { data: post, loading, errorMsg } = useCustomHook('http://localhost:8080/post/' + id);
    const redirect = useNavigate();
    const DeletePost = () =>{
        fetch('http://localhost:8080/post/' + id, {
            method:'DELETE'
        }).then(
            redirect('/')
        )
    }
    return ( 
        <div className="post">
            <h3>Available Room: #{id}</h3>
            {loading && <p>loading</p>}
            {errorMsg && <p>{errorMsg}</p>}
            {post && 
            <div>
                <h3>Title: {post.title}</h3>
                <p>{post.body}</p>
                <p>Type: {post.houseType}</p>
                <small>Rent: {post.price}</small>
                <button onClick={DeletePost}>Delete </button>
            </div>
            }
        </div>
     );
}
 
export default PostDetail;