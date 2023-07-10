import { FormEvent } from 'react'
import { useListStore } from '../../../../store/list'
import {
  Button,
  ContainerInput,
  Input,
  ListHeaderContainer,
  Title,
} from './styles'

export function ListHeader() {
  const { addItem } = useListStore((state) => {
    return {
      addItem: state.addItem,
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

  return (
    <ListHeaderContainer>
      <Title>List Grocery</Title>
      <ContainerInput
        onSubmit={(e) => {
          handleAddItemInList(e)
        }}
      >
        <Input id='item' required type='text' />
        <Button>Add item</Button>
      </ContainerInput>
    </ListHeaderContainer>
  )
}
