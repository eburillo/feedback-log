import { useRef, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { KEY_ESCAPE } from '../constants'

interface IInputProps {
  handleOnChange: (value: string) => void
  handleOnPress: (key: string) => void
  handleOnBlur: () => void
  testId?: string
}

export default function AddItemInput(props: IInputProps) {
  const { handleOnChange, handleOnPress, handleOnBlur, testId } = props

  const ref = useRef(null)

  const escapeListener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === KEY_ESCAPE) {
        handleOnBlur()
      }
    },
    [handleOnBlur]
  )
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current as any).contains(e.target)) {
        handleOnBlur()
      }
    },
    [handleOnBlur]
  )

  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  })

  return (
    <div ref={ref}>
      <Input
        data-testid={testId}
        autoFocus
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange(e.target.value)
        }
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleOnPress(e.key)
        }
      />
    </div>
  )
}

const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  border: 0;
`
