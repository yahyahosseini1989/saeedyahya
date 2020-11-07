import { ISignup } from './../model/model.signup';
import Axios from "axios";

export class SignupService {
    getAll() : Promise<{data:Array<ISignup>}> {
        return Axios.get("")
    }
}
