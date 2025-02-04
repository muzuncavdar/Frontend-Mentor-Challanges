import thankYou from "./assets/images/illustration-thank-you.svg";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function ThankYou({ selected }) {
    const ThankYouContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 24px;
        border-radius: 15px;
        background-color: #232a34;
        color: #ffffff;
        font-family: "Overpass", serif;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        max-height: 420px; /* Yükseklik sınırı */
        height: auto; /* İçeriğe göre esneme */

        /* Tablet ve desktop için */
        @media (min-width: 768px) {
            max-width: 420px;
            max-height: 420px;
        }
    `;

    const MyPointDiv = styled.div`
        margin: 24px 0;
        padding: 12px 24px;
        border-radius: 22.5px;
        background-color: #262e38;
        color: #fc7614;
        font-size: 14px;
        font-weight: 700;
    `;

    const ThankYouTitle = styled.h2`
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: 700;
    `;

    const ThankYouDetails = styled.p`
        font-size: 14px;
        color: #969fad;
    `;

    return (
        <ThankYouContainer>
            <img src={thankYou} alt="thank-you" />
            <MyPointDiv>You selected {selected} out of 5</MyPointDiv>
            <ThankYouTitle>Thank you!</ThankYouTitle>
            <ThankYouDetails>
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </ThankYouDetails>
        </ThankYouContainer>
    );
}

export default ThankYou;
