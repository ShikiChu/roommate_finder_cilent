import { useState, useEffect} from "react";

const useCustomHook = (URL) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrMsg] = useState(null);

    useEffect(()=>{
        // test to see the loading msg using setTimeout for 1s
        setTimeout(() => {
            fetch(URL)
        .then(
            (resp)=>{
                if(resp.ok !== true){
                    throw Error ("Couldn't fetch data from API.");
                }
                return resp.json();
                
            }
        )
        .then(
            (data)=>{
                setData(data);
                setLoading(false);
                setErrMsg(null);
            }
        ).catch((err)=>{
            setErrMsg(err.message);
            setData(null);
            setLoading(false);
        })
        }, 1000);
    },[URL]);
    return {data, loading, errorMsg}
}

export default useCustomHook