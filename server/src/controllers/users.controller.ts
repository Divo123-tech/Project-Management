import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
//initialize prisma client
const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ message: "Error Retrieving Users: " + err.message });
  }
};
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const users = await prisma.user.findUnique({
      where: {
        cognitoId: cognitoId,
      },
    });
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ message: "Error Retrieving Users: " + err.message });
  }
};



export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const {
      username,
      cognitoId,
      profilePictureUrl = "i1.jpg",
      teamId = 1,
    } = req.body;
    const newUser = await prisma.user.create({
      data: {
        username,
        cognitoId,
        profilePictureUrl,
        teamId,
      },
    });
    res.json({ message: "New User Created Successfully", newUser });
  } catch (err: any) {
    res.status(500).json({ message: "Error Retrieving Users: " + err.message });
  }
};