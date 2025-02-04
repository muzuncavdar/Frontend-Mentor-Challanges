import styled from "styled-components";
import iconStar from "./assets/images/icon-star.svg";
import { useState } from "react";
import ThankYou from "./ThankYou";

function RatingModal() {
  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const buttons = [1, 2, 3, 4, 5];

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #232a34 0%, transparent 100%);
  padding: 30px;
  border-radius: 15px;
  font-family: "Overpass", serif;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  max-height: 420px;
  height: auto;

  @media (min-width: 768px) {
    max-width: 420px;
    max-height: 420px;
  }
`;

  const WrapperStar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #262e38;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    
  `;

  const RatingTitle = styled.h2`
    margin-bottom: 17px;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  `;

  const RatingParagraph = styled.p`
    color: #969fad;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    margin-bottom: 24px;
  `;

  const PointButton = styled.button`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: ${({ isSelected }) => (isSelected ? "#979797" : "#262e38")};
    color: ${({ isSelected }) => (isSelected ? "white" : "#969fad")};
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #fc7614;
      color: white;
    }
  `;


  const SubmitButton = styled.button`
    border-radius: 22.5px;
    background: #fc7614;
    display: flex;
    padding: 14px 0px;
    justify-content: center;
    font-family: "Overpass", serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.87px;
    cursor: pointer;
    border: none;
    color: white;
    transition: 0.3s;

    &:hover {
      background: #ff8c42;
      cursor: pointer;
    }
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  `;

  return (
    <>
      {!submitted ? (
        <RatingContainer>
          <WrapperStar>
            <img src={iconStar} alt="icon-star" />
          </WrapperStar>
          <RatingTitle>How did we do?</RatingTitle>
          <RatingParagraph>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </RatingParagraph>
          <ButtonContainer>
            {buttons.map((item) => (
              <PointButton
                key={item}
                onClick={() => setSelected(item)}
                isSelected={selected === item}
              >
                {item}
              </PointButton>
            ))}
          </ButtonContainer>
          <SubmitButton onClick={() => setSubmitted(true)}>SUBMIT</SubmitButton>
        </RatingContainer>
      ) : (
        <ThankYou selected={selected} />
      )}
    </>
  );
}

export default RatingModal;
