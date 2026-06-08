import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Limpa os dados existentes
  await prisma.itemPedido.deleteMany()
  await prisma.pedido.deleteMany()
  await prisma.produto.deleteMany()

  // Amorosos
  await prisma.produto.createMany({
    data: [
      { nome: 'Templo de Afrodite', preco: 10, categoria: 'Amoroso', descricao: 'Tiragem amorosa com foco em relacionamentos' },
      { nome: 'Templo de Afrodite Completo', preco: 15, categoria: 'Amoroso', descricao: 'Tiragem amorosa completa e detalhada' },
      { nome: 'Templo do Diabo — Ficar ou Partir', preco: 10, categoria: 'Amoroso', descricao: 'Clareza sobre continuar ou encerrar um relacionamento' },
      { nome: 'Templo do Ex', preco: 12, categoria: 'Amoroso', descricao: 'Tiragem focada em ex-relacionamentos' },
      { nome: 'Taça do Amor', preco: 15, categoria: 'Amoroso', descricao: 'Revelações profundas sobre o amor' },
      { nome: 'Reconciliação', preco: 15, categoria: 'Amoroso', descricao: 'Possibilidades de reconciliação' },
    ]
  })

  // Autoconhecimento
  await prisma.produto.createMany({
    data: [
      { nome: 'Aparência', preco: 8, categoria: 'Autoconhecimento', descricao: 'Como você é visto pelos outros' },
      { nome: 'Autoconhecimento', preco: 10, categoria: 'Autoconhecimento', descricao: 'Mergulhe na sua essência e propósito' },
      { nome: 'Peladan', preco: 8, categoria: 'Autoconhecimento', descricao: 'Tiragem de autoconhecimento profundo' },
    ]
  })

  // Finanças
  await prisma.produto.createMany({
    data: [
      { nome: 'Ferradura', preco: 15, categoria: 'Financas', descricao: 'Clareza sobre abundância e prosperidade' },
    ]
  })

  // Vida Profissional
  await prisma.produto.createMany({
    data: [
      { nome: 'Profissional', preco: 15, categoria: 'Profissional', descricao: 'Sua carreira e missão no mundo' },
      { nome: 'Tomada de Decisão', preco: 10, categoria: 'Profissional', descricao: 'Clareza para decisões importantes' },
    ]
  })

  // Perguntas Avulsas
  await prisma.produto.createMany({
    data: [
      { nome: '1 Pergunta Objetiva', preco: 5, categoria: 'Perguntas', descricao: 'Clareza direta sobre uma questão específica' },
      { nome: '1 Pergunta Detalhada', preco: 10, categoria: 'Perguntas', descricao: 'Resposta aprofundada com contexto e nuances' },
      { nome: '2 Perguntas Objetivas', preco: 8, categoria: 'Perguntas', descricao: 'Duas respostas diretas em uma consulta' },
      { nome: '2 Perguntas Detalhadas', preco: 18, categoria: 'Perguntas', descricao: 'Duas respostas aprofundadas e completas' },
      { nome: '4 Perguntas Objetivas', preco: 16, categoria: 'Perguntas', descricao: 'Quatro respostas diretas' },
      { nome: '4 Perguntas Detalhadas', preco: 34, categoria: 'Perguntas', descricao: 'Quatro respostas completas e detalhadas' },
    ]
  })

  console.log('✅ Banco populado com sucesso!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => await prisma.$disconnect())