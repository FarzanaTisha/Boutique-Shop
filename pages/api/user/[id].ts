import { PrismaClient } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            const user = await prisma.user.findUnique({where: {id: parseInt(req.query.id)}});
            if (user) {
                return res.status(200).json(user);
            } else {
                return res.status(404).json({
                    succss: false,
                    message: "User not found"
                })
            }
        } catch (error) {
            return res.status(500).json({
                succss: false,
                message: "Something went wrong"
            });
        }

    }
}