import { PrismaClient } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const userData = req.body;
        const savedUser = await prisma.user.create({
            data: userData
        })
        return res.status(200).json(savedUser);
    }
    if (req.method === "GET") {
        const userList = await prisma.user.findMany()
        return res.status(200).json(userList);
    }

}