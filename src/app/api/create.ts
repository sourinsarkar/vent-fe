import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();
  const newMent = await prisma.ment.create({
    data: { title, description },
  });
  return NextResponse.json(newMent, { status: 201 });
}
