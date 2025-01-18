import Data from './data';
import iconPlus from './assets/icon-plus.svg';
import iconMinus from './assets/icon-minus.svg';
import styled from 'styled-components';
import { useState } from 'react';

const Section = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
  background: none;
  border: none; 
  position: relative;
  cursor: pointer;
`

const ToggleIconButton = styled.img`
    width: 25px;
    height: 25px;    
`

const Question = styled.h3`
  font-family: "Work Sans", serif;
  font-weight: 600;
  font-size: 16px;
  color: #301534;
  @media (min-width: 768px ) {
        font-size: 18px;
    }        
`

const Paragraph = styled.p`
  font-family: "Work Sans", serif;
  font-weight: 400;
  font-size: 14px;
  color: #8B6990;
  padding-top: 24px;
  justify-content: flex-start;
  @media (min-width: 768px ) {
    font-size: 16px;
    padding-top: 28.5px;
}        
`

const FaqLine = styled.hr`
    margin: 20px 0px;
    background-color: #F8EEFF;
    height: 1px;
    border: none;
    @media (min-width: 768px) {
        margin: 24px 0px;
    }
`

function Faq() {
    const [isExpanded, setIsExpanded] = useState(0);
    return (
        <div>
            {Data.map(({ question, answer }, index) => (
                <div key={index}>
                    <Section>
                        <Question>{question}</Question>
                        <Button onClick={() => {
                            setIsExpanded(isExpanded === index ? null : index)}
                        }>
                            <ToggleIconButton
                                src={isExpanded === index ? iconMinus : iconPlus}
                                alt={isExpanded === index ? "Collapse" : "Expand"}
                            />
                        </Button>
                    </Section>
                    {isExpanded === index && <Paragraph>{answer}</Paragraph>}
                    {index !== Data.length - 1 && <FaqLine />}
                </div>
            ))}
        </div>
    );
}

export default Faq;
