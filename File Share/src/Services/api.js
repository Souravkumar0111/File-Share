import axios from 'axios';

const API_URI='https://file-share-s5xv.onrender.com';
export const uploadFile=async(data)=>{
try{
 const response=await axios.post(`${API_URI}/upload`,data);
 return response.data;
}
catch(error){
console.error('Error while calling the api',error.message);
}
}
