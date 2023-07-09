import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ItemList {
  item: string
  isDone: boolean
}

interface ListProps {
  items: Array<ItemList>
  addItem: (item: ItemList) => void
  removeItem: (id: string) => void
  isDone: (item: string) => void
}

export const useListStore = create(
  persist<ListProps>(
    (set) => {
      return {
        items: [{ item: 'Banana', isDone: false }],

        addItem: (item: ItemList) => {
          set((state) => {
            const itemAlreadyExist = state.items.findIndex(
              (itemInList) => itemInList.item === item.item
            )
            if (itemAlreadyExist >= 0) {
              return {
                items: state.items,
              }
            }
            return {
              items: [...state.items, item],
            }
          })
        },

        removeItem: (itemSelected: string) => {
          set((state) => {
            return {
              items: state.items.filter((item) => item.item !== itemSelected),
            }
          })
        },

        isDone: (itemToDone: string) => {
          set((state) => {
            const newList = state.items.map((item) => {
              if (item.item === itemToDone) {
                return {
                  ...item,
                  isDone: !item.isDone,
                }
              }
              return item
            })
            return {
              items: newList,
            }
          })
        },
      }
    },

    { name: 'list-items' }
  )
)
