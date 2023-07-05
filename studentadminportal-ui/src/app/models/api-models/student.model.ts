import { Address } from "./address.model";
import { Gender } from "./gender.model";

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