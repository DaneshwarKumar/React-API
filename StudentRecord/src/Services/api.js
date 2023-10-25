import axios from 'axios';


const API_URL = 'http://127.0.0.1:3002/users';


// function to add the user 
export const addUser = async (Data) => {
    try{
      await axios.post(API_URL, Data);
    }
    catch(error){
         console.log("Error while Saving the Data ", error.message);
    }
}


// function to get the user 
export const getUser = async () => {
    try{
       return await axios.get(API_URL);
    }
    catch(error){
      console.log("Error While Fetching the Data", error.message);
    }
}