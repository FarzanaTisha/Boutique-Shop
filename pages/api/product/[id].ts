import { PrismaClient } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            const product = await prisma.product.findUnique({where: {id: parseInt(req.query.id)}})
            if(product){
                return res.status(200).json(product);
            } else {
                return res.status(404).json({
                    success : false,
                    message : 'Product not found'
                })
            }
    } catch (error) {
     return res.status(500).json({
         success : false,
         message : 'Something went wrong'
     })
    }
    }
}