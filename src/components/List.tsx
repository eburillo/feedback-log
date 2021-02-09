import styled from 'styled-components'
import { getColor } from '../theme'
import Button from './Button'
import { ADD_NEW_ITEM_TEXT } from '../constants'
import { IList } from '../interfaces'

export default function List(props: IList) {
  const {
    testId,
    headlineText,
    buttonOnClick,
    isButtonVisible = true,
    buttonTestId,
    children,
  } = props
  return (
    <ListSection>
      <ListHeader>
        <Headline>{headlineText}</Headline>
        {isButtonVisible && (
          <Button data-testid={buttonTestId} onClick={buttonOnClick}>
            {ADD_NEW_ITEM_TEXT}
          </Button>
        )}
      </ListHeader>
      <ListWrapper>
        <ListContainer data-testid={testId}>{children}</ListContainer>
      </ListWrapper>
    </ListSection>
  )
}

const Headline = styled.h2`
  font-size: 18px;
  margin: 0;
`

const ListSection = styled.section`
  flex: 1;
`
const ListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 76px;
`

const ListWrapper = styled.div`
  padding: 0 16px 16px;
`

const ListContainer = styled.div`
  padding: 16px;
  background-color: ${getColor('white')};
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 500px;
`
