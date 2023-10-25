// import React from 'react';
// import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'; 
// import { useEffect ,useState } from 'react'; 
// import { getUser } from '../Services/api';


// const AllUser = () => {

//   const [users ,setUsers] = useState([]);

//   useEffect(() => {
//     getUserDetails();
//   } , []);


//   const getUserDetails = async () => {
//     let response = await getUser();
//     console.log(response);
//     setUsers(response.data);
//   }


//   return (
//     <Table>
//        {/* creating an table head */}
//         <TableHead>
//                <TableRow>
//                   <TableCell>Id</TableCell>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Course</TableCell>
//                   <TableCell>Mobile</TableCell>
//                   <TableCell>Gmail </TableCell>
//                </TableRow>
//         </TableHead>

//         {/* creating an table body  */}

//         <TableBody>
//             {
//                console.log(users)
//             }
//         </TableBody>


        
//     </Table>
//   )
// }


// export default AllUser;



import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material';
// import { getUsers } from '../Service/api';
import { getUser } from '../Services/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    

    const getAllUsers = async () => {
        let response = await getUser();
        setUsers(response?.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users?.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.course}</TableCell>
                        <TableCell>{user.gmail}</TableCell>
                        <TableCell>{user.mobile}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}}>Edit</Button>
                            <Button color="secondary" variant="contained">Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;