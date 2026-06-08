import { NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

export async function POST(req: Request) {
  try {
    const { items } = await req.json()

    const preference = new Preference(client)

    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

    const result = await preference.create({
      body: {
        items: items.map((item: any) => ({
          id: item.id,
          title: item.nome,
          quantity: item.quantidade,
          unit_price: item.preco,
          currency_id: 'BRL',
        })),
        payment_methods: {
          excluded_payment_types: [
            { id: 'credit_card' },
            { id: 'prepaid_card' },
            { id: 'bank_transfer' },
            { id: 'atm' },
            { id: 'ticket' },
          ],
        },
        back_urls: {
          success: `${baseUrl}/checkout/sucesso`,
          failure: `${baseUrl}/checkout/erro`,
          pending: `${baseUrl}/checkout/pendente`,
        },
      },
    })

    return NextResponse.json({ url: result.init_point })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erro ao criar preferência de pagamento' },
      { status: 500 }
    )
  }
}