import response from "../../../../middlewares/response-middleware";
import prisma from "../../../../lib/db-config";
import { NextResponse } from "next/server";

export const GET = async (_, res: NextResponse) => {
  try {
    const skippedUser = await prisma.user.findMany({
      where: {
        status: 2
      },
      select:{
        userId: true
      }
    })
    await prisma.user.updateMany({
      where: {
        userId: {
          in: skippedUser.map((user)=> user.userId)
        }
      },
      data:{
        status: 0
      }
    })
    return response.success({
      message: "user data updated as skip"
    })
  } catch (err) {
    console.log("Error in updating the user data as skip", err);
    response.error({
      message: "Unable to update user data as skip"
    })
  }
};
