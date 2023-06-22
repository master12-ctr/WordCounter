import IUsersData from '@/models/users';
import http from '../http-common'

const getAll=()=>{
    return http.get<Array<IUsersData>>("/users");
}
const get=(id:any)=>{
 return http.get(`/users/${id}`);
}
const create=(data:IUsersData)=>{
    return http.post("/users",data);
}
const update=(id:any,data:IUsersData)=>{
    return http.put(`/users/${id}`,data);
}
const Delete=(id:any)=>{
    return http.delete(`/users/${id}`);
}
const deleteAll=()=>{
    return http.delete(`users`);   
}


const UserDataService= {
getAll,get,create,update,
Delete,deleteAll
}
export default UserDataService;
