import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const ments = await prisma.ment.findMany();
  return NextResponse.json(ments);
}
