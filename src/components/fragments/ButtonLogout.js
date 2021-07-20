import React from 'react';
import { useHistory } from "react-router-dom";

const ButtonLogout = ({keycloak}) => {

    const history = useHistory();

    function logout(){
        history.push("/");
        keycloak.logout();
    }
    
    return(
        <button onClick={logout}>
            Logout
        </button>
    )
}

export default ButtonLogout