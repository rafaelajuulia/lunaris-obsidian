import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const produtos = await prisma.produto.findMany({
      where: { ativo: true },
      orderBy: { criadoEm: 'asc' },
    })
    return NextResponse.json(produtos)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar produtos' },
      { status: 500 }
    )
  }
}