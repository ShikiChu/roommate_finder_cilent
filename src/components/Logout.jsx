import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const isLoggedIn = sessionStorage.getItem('username') ? true : false;
    console.log(`**** in Logout component *********`);
    console.log(`isLoggedIn = ${isLoggedIn}!`);
    console.log(`sessionStorage = ${sessionStorage.getItem('username')}!`);
    
    const redirect = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const DeleteSession = () => {
        try {
            sessionStorage.clear();
            if(sessionStorage.length === 0){
                redirect('/Login');

            }else{
                setErrorMessage('Cannot logout you ');
            }
            
        } catch (error) {
            console.error('Error deleting session strage data:', error);
            setErrorMessage('An error occurred. Please try again later.');
            
        }

    }
    return (
        <>
            <div className="Logout">
                <h2>Are you sure you want to logged out?</h2>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button onClick={() => {DeleteSession();}}>Logout</button>
            </div>                      
        </>
    );
};

export default Logout;