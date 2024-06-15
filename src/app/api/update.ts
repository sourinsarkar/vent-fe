// app/api/tasks/update.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { title, description, completed } = await req.json();
  const updatedMent = await prisma.ment.update({
    where: { id: params.id },
    data: { title, description, completed },
  });
  return NextResponse.json(updatedMent);
}
