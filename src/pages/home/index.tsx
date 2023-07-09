import { CheckCircle, MinusCircle } from 'lucide-react'
import { FormEvent } from 'react'
import { useListStore } from '../../store/list'
import {
  Button,
  ContainerInput,
  Input,
  Item,
  ItemButtons,
  ItemName,
  List,
  ListContainer,
  ListContent,
  ListHeader,
  MainContainer,
  Title,
} from './styles'

export function Home() {
  const { items, addItem, removeItem, isDone } = useListStore((state) => {
    return {
      items: state.items,
      addItem: state.addItem,
      removeItem: state.removeItem,
      isDone: state.isDone,
    }
  })

  function handleAddItemInList(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newItem = {
      item: (e.target as any).item.value,
      isDone: false,
    }

    const input = document.getElementById('item') as HTMLInputElement

    input.value = ''

    addItem(newItem)
  }

  function handleRemoveItemInList(item: string) {
    removeItem(item)
  }

  return (
    <MainContainer>
      <ListContainer>
        <ListHeader>
          <Title>List Grocery</Title>
          <ContainerInput
            onSubmit={(e) => {
              handleAddItemInList(e)
            }}
          >
            <Input id='item' required type='text' />
            <Button>Add item</Button>
          </ContainerInput>
        </ListHeader>
        <ListContent>
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
                    <button onClick={() => handleRemoveItemInList(item.item)}>
                      <MinusCircle color='red' />
                    </button>
                  </ItemButtons>
                </Item>
              )
            })}
          </List>
        </ListContent>
      </ListContainer>
    </MainContainer>
  )
}
