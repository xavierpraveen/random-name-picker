import response from "../../../../../middlewares/response-middleware";
import prisma from "../../../../../lib/db-config";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  _:NextRequest,
  { params }: { params: { userId: string } },
  res: NextResponse
) => {
  try {
     await prisma.user.update({
      where: {
        userId: Number(params.userId)
      },
      data: {
        status: 1
      }
    });
    return response.success({
      message: "User data updated as sold",
    });
  } catch (err) {
    console.log("Error in updating the user data as sold", err);
    response.error({
      message: "Unable to update the user data as sold",
    });
  }
};
