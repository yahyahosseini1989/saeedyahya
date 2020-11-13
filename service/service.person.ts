import { IPerson } from '../model/model.person';
import Axios from "axios";

export class SPersonService {
    getAll() : Promise<{data:Array<IPerson>}> {
        return Axios.get("http://localhost:4444/person")
    }
    create(data:IPerson) : Promise<{data:Array<IPerson>}> {
        return Axios.post("http://localhost:4444/person", data) 
    }
    delete(id:string) : Promise<any> {
        return Axios.delete(`http://localhost:4444/person/${id}`) 
    }
    update(data:IPerson) : Promise<{data:Array<IPerson>}> {
        return Axios.put("http://localhost:4444/person", data) 
    }
    
    byId(id:string) : Promise<any> {
        return Axios.get(`http://localhost:4444/person/${id}`) 
    }
}
