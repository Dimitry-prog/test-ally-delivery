import { NextResponse } from "next/server";
import { UserType } from "@/features/auth/types";

export const POST = async (request: Request) => {
  const { email, password }: UserType = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing required data" });
  }

  const user = {
    data: {
      token: "some token",
    },
  };

  return NextResponse.json(user);
};
