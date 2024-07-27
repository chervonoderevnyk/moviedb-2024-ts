import {IRes} from "../types/IRes";
import {IUser} from "../interfaces/IUser";
import {apiService, urls} from "../constants/urls";

const meService ={
    me():IRes<IUser>{
        return apiService.get(urls.me.base)
    }
}

export {
    meService
}
