import iconStar from './assets/icon-star.svg'
import Faq from './FAQ'
import styled from 'styled-components';

const Article = styled.article`
    display: flex;
    padding: 0px 24px;
    max-width: 648px;
`

const FaqHeading = styled.div`
    display: flex;
    gap: 24px;
    text-align: center;
    align-items: center;
    margin-bottom: 24px;
    box-sizing: border-box
    @media (min-width: 768px) {
        margin-bottom: 32px;
    }
`;

const IconImage = styled.img`
  display: flex;
  justify-content: center;
  max-width: 20px;
  max-height: 20px;

@media (min-width: 768px) {
    min-width: 28px;
    min-height: 28px;
  }

  @media (min-width: 1024px) {
    min-width: 35px;
    min-height: 35px;
  }
`;

const HeaderContainer = styled.main`
    display: flex;
    justify-content: center; 
    align-items: center; 
`
const FaqContainer = styled.nav`
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    max-width: 565px
    @media (min-width: 768px) {
        padding: 40px;
    }
`

const FaqHeadingFont = styled.h2`
  font-family: "Work Sans", serif;
  font-weight: 700;
  font-size: 32px;
@media (min-width: 768px ) {
        font-size: 44px;     
    }
  @media (min-width: 1024px ) {
        font-size: 56px;     
    }
`

function Header() {
    return(
        <Article>
            <HeaderContainer> 
            <FaqContainer>
                <FaqHeading>
                    <IconImage src={iconStar} alt="icon-star" />
                    <FaqHeadingFont>FAQs</FaqHeadingFont>
                </FaqHeading>
                <Faq />
            </FaqContainer> 
            </HeaderContainer>
        </Article>
    )
}

export default Header;
