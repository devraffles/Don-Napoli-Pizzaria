import prismaClient from "../../prisma"

interface CategoryRequest{
    name: string;
}

class ListCategoryServices{
    async execute(){
        const category = await prismaClient.category.findMany({
            select:{
                id: true,
                name:true,
            }
        });

        return category;
    }
}

export { ListCategoryServices }