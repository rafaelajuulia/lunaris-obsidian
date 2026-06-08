import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  nome: string
  preco: number
  quantidade: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantidade'>) => void
  removeItem: (id: string) => void
  clearCart: () => void
  total: () => number
  totalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const items = get().items
        const exists = items.find((i) => i.id === item.id)
        if (exists) {
          set({
            items: items.map((i) =>
              i.id === item.id
                ? { ...i, quantidade: i.quantidade + 1 }
                : i
            ),
          })
        } else {
          set({ items: [...items, { ...item, quantidade: 1 }] })
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) })
      },

      clearCart: () => set({ items: [] }),

      total: () =>
        get().items.reduce((sum, i) => sum + i.preco * i.quantidade, 0),

      totalItems: () =>
        get().items.reduce((sum, i) => sum + i.quantidade, 0),
    }),
    { name: 'lunaris-cart' }
  )
)