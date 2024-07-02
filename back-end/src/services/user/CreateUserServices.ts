import prismaClient from "../../prisma"

interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserServices{
    async execute({ name, email, password }: UserRequest){
        if(!email){
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: password,
            },
            select:{
                name: true,
                email: true,
                password: true,
            }
        });
        
        return user;
    }
}

export { CreateUserServices }