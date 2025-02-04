import styled from "styled-components"
import RatingModal from "./RatingModal"

function App() {

const MainContainer = styled.main`
  background-color: #131518;
  min-width: 100%;
  min-height: 100vh; 
  padding: 0px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

  return (
    <MainContainer>
        <RatingModal />
    </MainContainer>
  )
}

export default App;
