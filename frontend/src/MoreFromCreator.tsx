import { useCallback } from 'react'
import styled from 'styled-components'

const MoreFromCreator = () => {
  const openSSP = useCallback(() => {
    window.open('https://sillysideprojects.com', '_blank')
  }, [])

  const openGH = useCallback(() => {
    window.open('https://github.com/TravisBumgarner/Whats-the-Temp', '_blank')
  }, [])

  return (
    <Wrapper>
      <Button
        onClick={openGH}
      >
        GitHub
      </Button>
      <Button
        onClick={openSSP}
      >
        More from the Creator
      </Button>
    </Wrapper>
  )
}


const Button = styled.button`
  border: 0;
  margin-left: 1rem;
  background-color: transparent;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: "Comfortaa", cursive;
  border: #4b80c0 2px solid;
  color: #4b80c0;
  background-color: #4b80c033;
  border-radius: 0.5rem;
  cursor: pointer;

  &: hover {
    background-color: #4b80c0;
    color: white;
  }
`

const Wrapper = styled.div`
    box-sizing: border-box;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
`
export default MoreFromCreator
