import React from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import resumebanner2 from '../resumebanner2.png';

const LoginButton: React.FC = () => {
  const navigate = useNavigate();


  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      await instance.loginPopup({
        scopes: ['User.Read'], // Define the scopes required for your app
      });
      navigate('/addcandidate'); // Navigate to dashboard on successful login
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return<div> 
     
     <img src={resumebanner2} alt="" style={{width:500, height: 170, marginTop:35, marginLeft:270, borderRadius:20}} />
    
    <div className="rectangle"> 
        </div> 
        
    <header style={{backgroundColor:"#ffffff",
                      height:50 , 
                      width:400, 
                      marginLeft:310, 
                      marginTop:50, 
                      alignContent:'center', 
                      textAlign:'center' ,
                      color:"Black", 
                      borderRadius:5,
                      font:'Book Antiqua', 
                      fontSize:30,
                      stroke:"black",
                      strokeWidth:100, fontWeight:'1100' }}> Login </header>

<h5 style={{marginLeft:165 , textAlign:'center',paddingTop:80, textDecoration:'underline'}}>Login Via Microsoft <br></br></h5>
    
    <button onClick={handleLogin} style={{borderRadius:10 ,
                                         width:350, 
                                         height:40,
                                         backgroundColor:"#0f0d74",
                                         color:"White",
                                         marginLeft:337, 
                                         fontSize:15                                     
                                        }}>Sign In</button>    
    </div>
};

export default LoginButton;