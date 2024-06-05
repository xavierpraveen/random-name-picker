import response from "../../../middlewares/response-middleware";
import prisma from "../../../lib/db-config";
import { NextRequest, NextResponse } from "next/server";

export const GET= async (_:NextRequest, res: NextResponse) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        status: 0
      },
      select:{
        userName: true,
        userId: true,
        level:true,
        sex: true
      }
    })
    const randomIndex = Math.floor(Math.random() * user.length);
    return response.success({
      message: "User data fetched successfully",
      data: user[randomIndex]
    })
  } catch (err) {
    console.log("Error in getting the user details", err);
    response.error({
      message: "Unable to get the user data"
    })
  }
};
