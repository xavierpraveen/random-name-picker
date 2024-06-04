import { NextResponse } from "next/server";

interface Response {
  code?: number;
  message: string;
  data?: unknown;
}

export const success = ({ code = 200, message, data = {} }: Response) =>
  NextResponse.json({
    code,
    status: "success",
    message,
    data
  });

export const error = ({ code = 500, message, data = {} }: Response) =>
  NextResponse.json({
    code,
    status: "error",
    message,
    data
  });

const repsonses = {
  success,
  error
};

export default repsonses;
