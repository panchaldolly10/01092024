// src/Form.tsx
import React from 'react';
import { Label, Rectangle, TextField } from '@fluentui/react';
//import { useNavigate } from 'react-router-dom';
import LogoutButton from './signoutbutton';

const AddCandidate: React.FC = () => {
    /*const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');};*/

  return (

    <div style={{ width: '1300px', margin: '20px' }}>
        <h1 className='App-header'> Add Candidate </h1>
        
      {/* Label for the TextField */}
      <Label htmlFor="name-input">Name</Label>
      
      {/* TextField input */}
      <TextField id="name-input" placeholder="Enter your name" />

      <Label htmlFor="email-input" style={{ marginTop: '20px' }}>Email</Label>
      <TextField id="email-input" placeholder="Enter your email" />

      <Label htmlFor="mobile-input" style={{ marginTop: '20px' }}>Mobile</Label>
      <TextField id="mobile-input" placeholder="Enter your mobile no." />

      <Label htmlFor="experience-input" style={{ marginTop: '20px' }}>Experience</Label>
      <TextField id="experience-input" placeholder="Enter your Experience" />

      <Label htmlFor="skill-input" style={{ marginTop: '20px' }}>Additional Skills</Label>
      <TextField id="skill-input" placeholder="Enter your Additional Skills" />

      <Label htmlFor="noticeperiod-input" style={{ marginTop: '20px' }}>Notice Period</Label>
      <TextField id="noticeperiod-input" placeholder="Enter your Notice Period Duration"/>

      <button  style={{ float:'right',
                                                marginTop: '40px', 
                                                height: 40, 
                                                borderRadius:10 , 
                                                color:'white', 
                                                backgroundColor:'#0f0d74' }}> Add Candidate</button>
    <LogoutButton/>
    </div>
  );
};

export default AddCandidate;

