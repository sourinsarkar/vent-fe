// app/api/tasks/getById.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const ment = await prisma.ment.findUnique({
    where: { id: params.id },
  });
  if (!ment) {
    return NextResponse.json({ error: 'Ment not found' }, { status: 404 });
  }
  return NextResponse.json(ment);
}
