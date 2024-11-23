import { IsEnum, IsNotEmpty, IsString } from "class-validator";


enum typeUser {
    cuidador="cuidador",
    contratador="contratador"
}
export class userDtoForApi{

    id:string

    @IsString()
    @IsNotEmpty()
    @IsEnum(typeUser)
    tipo_usuario: string;
}

export class userData{
    id:string
    username:string;
}