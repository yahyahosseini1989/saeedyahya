import { baseModel } from './model.base';
export interface IPerson extends baseModel {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    height: string;
    weight: string;
    color_of_body: string;
    color_of_hair: string;
}
export type TPersonCreate = Omit<IPerson, keyof baseModel>;
export type TPersonUpdate = TPersonCreate;