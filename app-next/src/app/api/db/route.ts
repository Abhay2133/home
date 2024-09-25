import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Attempt a simple query to check the connection
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json({ status: 'connected' }, { status: 200 });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ status: 'disconnected', error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
