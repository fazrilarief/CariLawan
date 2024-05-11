import { prisma } from "@/db/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const getAllTeams = await prisma.teams.findMany();

    return NextResponse.json({ data: getAllTeams });
  } catch (err) {
    return NextResponse.error();
  } finally {
    prisma.$disconnect();
  }
}
