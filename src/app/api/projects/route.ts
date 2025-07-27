import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("Attempting to connect to database...");
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("Successfully fetched projects:", projects.length);
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      {
        error: "Unable to fetch projects",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
