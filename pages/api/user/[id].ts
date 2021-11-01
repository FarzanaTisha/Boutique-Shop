import { PrismaClient } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const product = await prisma.user.findUnique({where: {id: parseInt(req.query.id)}})
        res.status(200).json(product);
    }
}