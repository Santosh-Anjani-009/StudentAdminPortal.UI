import { Address } from "./address.uimodel";
import { Gender } from "./gender.uimodel";


export interface Student{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    dateOfBirth: string,
    profileImageUrl: string,
    mobile: number,
    genderId: string,
    gender: Gender,
    address: Address
}