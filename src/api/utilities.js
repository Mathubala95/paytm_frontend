import axios  from "axios";
import { config } from "../config";

// export function paymentUtilities(uId,data)
export function paymentUtilities(data){
    //Restraunt Data(resData)
    return axios.post(`${config.api}/api/utilities/payment`,data, {
        headers : {
            Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}

export function listUtilities(data){
    return axios.get(`${config.api}/api/utilities/all`, {
        headers : {
            Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}