import { prisma } from "@/db/client";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);

    const uniqueUser = await prisma.users.findUnique({
      where: { id },
    });

    return NextResponse.json(uniqueUser);
  } catch (err) {
    console.error("Error viewing user", err);
    return NextResponse.error("Internal Server Error", 500);
  } finally {
    prisma.$disconnect();
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    console.log(data);

    const { nickname, email, password, phone } = data;

    const id = parseInt(params.id);

    const updateUser = await prisma.users.update({
      where: { id },
      data: {
        nickname,
        email,
        password,
        phone,
      },
    });
    return NextResponse.json(updateUser);
  } catch (err) {
    console.error("Error updating user", err);
    return NextResponse.error("Internal Server Error", 500);
  } finally {
    prisma.$disconnect();
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    const deleteUser = await prisma.users.delete({
      where: { id },
    });
    return NextResponse.json(`User with id: ${id} deleted`, deleteUser);
  } catch (err) {
    console.error("Error deleting user", err);
    return NextResponse.error("Internal Server Error", 500);
  } finally {
    prisma.$disconnect();
  }
}
