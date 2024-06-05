import response from "../../../../middlewares/response-middleware";
import prisma from "../../../../lib/db-config";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { userData } = await req.json();
    await prisma.user.createMany({
      data: userData,
    });
    return response.success({
      message: "User created successfully ",
    });
  } catch (err) {
    console.log("Error in creating the user", err);
    response.error({
      message: "Unable to create user",
    });
  }
};
