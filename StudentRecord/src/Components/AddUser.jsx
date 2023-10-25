import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Services/api';



const Container = styled(FormGroup)`
   width:50%;
   margin: 5% auto 5% auto;
   & > div{
      margin-top: 22px;
   }
`;



const defaultValue = {
    name : '',
    course : '',
    mobile : '',
    gmail : ''
}


const AddUser = () => {

const [user , setUser] = useState(defaultValue);
let navigate = useNavigate();

const onValueChange = (e) => {
    setUser({...user , [e.target.name]:e.target.value});
    console.log(user);
}

const addUserDetails = async () => {
     await addUser(user);
     navigate('/all');
}

  return (
       
    <Container>
       <Typography variant='h4'>Add Students</Typography>

            <FormControl>
                  <InputLabel> Student Name </InputLabel>
                  <Input onChange={(e) => onValueChange(e) }  name='name' />
            </FormControl>

            <FormControl>
                  <InputLabel> Course </InputLabel>
                  <Input onChange={(e) => onValueChange(e)} name='course' />
            </FormControl>

            <FormControl>
                  <InputLabel> Mobile  </InputLabel>
                  <Input onChange={(e) => onValueChange(e)} name='mobile' />
            </FormControl>

            <FormControl>
                  <InputLabel> Gmail  </InputLabel>
                  <Input onChange={(e) => onValueChange(e)} name='gmail' />
            </FormControl>

            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
    </Container>

  )
}


export default AddUser;
