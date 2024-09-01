// src/LogoutButton.tsx
import React from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await instance.logoutPopup();
      navigate('/'); 
    } catch (error) {
      console.error('Logout failed', error);
    }
  };;

  return <button onClick={handleLogout} style={{float: "right", 
                                                marginTop:100 ,
                                                marginRight:-100,
                                                color:'white', 
                                                backgroundColor:'#0f0d74',
                                                width:90,
                                                height:30, marginBottom:50}}>
        Logout</button>;
};

export default LogoutButton;
