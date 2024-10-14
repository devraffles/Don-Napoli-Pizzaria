import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserServices {
    async execute({email, password}: AuthRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        });

        if(!user){
            throw new Error("User/password incorrect");
        }

        const passswordMatch = await compare(password, user.password);

        if(!passswordMatch){
            throw new Error("User/password incorrect");
        }
        
        const token = sign(
            {
                name: user.name,
                email: user.email

            },
            process.env.JWT_SCRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        );

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserServices }