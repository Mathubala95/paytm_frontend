import axios  from "axios";
import { config } from "../config";

export async function login(cred){
    return await axios.post(`${config.api}/api/users/login`,cred);

}