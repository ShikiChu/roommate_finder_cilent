import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [houseType, setHouseType] = useState("");
    const [price, setPrice] = useState();
    const [loading, setLoading] = useState(false);
    const redirect = useNavigate();


    const submitHandler = (e) => {
        // prevent the page reload when the submit button is clicked.
        e.preventDefault();
        const post = { title, body, houseType, price };

        setLoading(true);
        console.log(loading);

        setTimeout(()=>{
            fetch("http://localhost:8080/post",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(post)
            }).then(
                ()=>{
                    console.log("Post Added.")
                    setLoading(false);
                    redirect('/');
                }
            )
        },1000)
    }

    return (
        <div className="create">
            <h2>New Post to find Roommates</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="body">Details</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label htmlFor="price">Rent</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <label htmlFor="houseType">Type</label>
                <select
                    value={houseType}
                    onChange={(e) => setHouseType(e.target.value)}
                    required
                >
                    <option value="">Select...</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                </select>
                {loading && <button disabled type="submit">Adding...</button>}
                {!loading && <button type="submit">Add Post</button>}
            
            </form>
        </div>
    );
}

export default CreatePost;
