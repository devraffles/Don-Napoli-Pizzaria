import prismaClient from "../../prisma"

interface DetailResquest{
    order_id: string;
}

class DetailOrderServices{
    async execute({ order_id }: DetailResquest){

        const order = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{
                product: true,
                order: true
            }
        });
        
        return order;
    }
}

export { DetailOrderServices }