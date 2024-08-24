import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload  from "./ImageUpload";


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [houseType, setHouseType] = useState("");
    const [price, setPrice] = useState();
    const [files, setFiles] = useState();
    const [area, setArea] = useState();
    const [city, setCity] = useState();
    
    const [loading, setLoading] = useState(false);
    // status would be one of these
    // 'initial' | 'uploading' | 'success' | 'fail'
    const [status, setStatus] = useState('initial');
    const redirect = useNavigate();

    const getInputFiles = (inputFiles) => {
        setStatus('initial');
        setFiles(inputFiles)

    }

    // const packFiles = (files)=> {
    //     const fileData = new FormData();
    //     [...files].forEach((file, i) => {
    //         fileData.append(`file-${i}`, file, file.name)
    //     })
    //     return fileData
    // }


    // const submitHandler = (e) => {
    const submitHandler = async(e) => {
        // prevent the page reload when the submit button is clicked.
        let post = { title, body, houseType, price };
        if(files){
            setStatus('uploading');
            console.log(files);
            const fileData = new FormData();
            [...files].forEach((file, i) => {
                fileData.append(`file-${i}`, file, file.name)
            })
            post = { title, body, houseType, price, fileData };

        }

        e.preventDefault();

        setLoading(true);
        console.log(loading);

        // !!!! ************************************
        // !!!! need to be fixed for file uploading
        // !!!! ************************************
        try {
            const result = await fetch('http://localhost:8080/post', {
              method: 'POST',
              body: post,
            });
    
            const data = await result.json();
    
            console.log(data);
            setStatus('success');
          } catch (error) {
            console.error(error);
            setStatus('fail');
          }

        // setTimeout(()=>{
        //     fetch("http://localhost:8080/post",{
        //         method: "POST",
        //         headers: { "Content-Type": "application/json"},
        //         body: JSON.stringify(post)
        //     }).then(
        //         ()=>{
        //             console.log("Post Added.")
        //             setLoading(false);
        //             redirect('/');
        //         }
        //     )
        // },1000)
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
                <label htmlFor="area">Area</label>
                <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                />
                <label htmlFor="city">city</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <label htmlFor="photos">Photos</label>
                <ImageUpload getInputFiles={getInputFiles} />


                {loading && <button disabled type="submit">Adding...</button>}
                {!loading && <button type="submit">Add Post</button>}
            
            </form>
        </div>
    );
}

export default CreatePost;
