import { PrismaClient } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const productData = JSON.parse(req.body);
        const savedProduct = await prisma.product.create({
            data: productData
        })
        return res.status(200).json(savedProduct);
    }

    if (req.method === "GET") {
        const productList = await prisma.product.findMany()
        return res.status(200).json(productList);
    }

}