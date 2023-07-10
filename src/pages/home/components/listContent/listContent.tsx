import { CheckCircle, MinusCircle } from 'lucide-react'
import { useListStore } from '../../../../store/list'
import {
  Item,
  ItemButtons,
  ItemName,
  List,
  ListContentContainer,
} from './styles'

export function ListContent() {
  const { items, removeItem, isDone } = useListStore((state) => {
    return {
      items: state.items,
      removeItem: state.removeItem,
      isDone: state.isDone,
    }
  })

  return (
    <ListContentContainer>
      <List>
        {items.map((item) => {
          return (
            <Item key={item.item}>
              <ItemName
                onClick={() => {
                  isDone(item.item)
                }}
                isDone={item.isDone}
              >
                {item.item}
              </ItemName>
              <ItemButtons>
                {item.isDone && (
                  <button
                    onClick={() => {
                      isDone(item.item)
                    }}
                  >
                    <CheckCircle color='green' />
                  </button>
                )}
                <button onClick={() => removeItem(item.item)}>
                  <MinusCircle color='red' />
                </button>
              </ItemButtons>
            </Item>
          )
        })}
      </List>
    </ListContentContainer>
  )
}
