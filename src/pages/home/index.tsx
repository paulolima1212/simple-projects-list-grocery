import { ListContent } from './components/listContent/listContent'
import { ListHeader } from './components/listHeader/ListHeader'

import { ListContainer, MainContainer } from './styles'

export function Home() {
  return (
    <MainContainer>
      <ListContainer>
        <ListHeader />
        <ListContent />
      </ListContainer>
    </MainContainer>
  )
}
