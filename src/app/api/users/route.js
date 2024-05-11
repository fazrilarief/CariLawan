import { prisma } from "@/db/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const getAllUser = await prisma.users.findMany();

    return NextResponse.json({ data: getAllUser });
  } catch (err) {
    console.error("Error getting users data", err);
    return NextResponse.error("Internal Server Error", 500);
  } finally {
    prisma.$disconnect();
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    const { nickname, email, password, phone } = data;
    const createNewUsers = await prisma.users.create({
      data: {
        nickname,
        email,
        password,
        phone,
      },
    });
    return NextResponse.json({
      createNewUsers,
    });
  } catch (err) {
    console.error("Error creating user", err);
    return NextResponse.error("Internal Server Error", 500);
  } finally {
    prisma.$disconnect();
  }
}
