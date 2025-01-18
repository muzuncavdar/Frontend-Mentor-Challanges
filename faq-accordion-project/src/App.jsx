import Header from './Header';
import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeaderContainer = styled.div`
  background: linear-gradient(to bottom, transparent 32%, #F8EEFF 32%), 
              url('../public/background-pattern-mobile.svg');
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
  background: linear-gradient(to bottom, transparent 32%, #F8EEFF 32%), 
              url('../public/background-pattern-desktop.svg');
  background-size: cover;
  background-position: center;
}
`;

function App() {
  return (
    <MainContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
    </MainContainer>
  );
}

export default App;
