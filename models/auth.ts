export interface LoginPayload {
    username: string;
    password: string;
}

export interface RegisterPayload {
    company:string;
    district:string;
    email:string;
    password:string;
    positionWord:string;
    scale:number;
    username:string;
    phone:string;
 
}

export interface ChangePassByAdmin {
    UserId: string;
    NewPassword: string;
}
