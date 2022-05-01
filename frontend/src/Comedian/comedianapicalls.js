import {API} from "../backend";
export const createComedian = (userId,token,comedian)=>{

    return fetch(`${API}/comedian/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            
            Authorization:`Bearer ${token}`
        },
        body: comedian
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=> console.log(err));

}