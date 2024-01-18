import styled from "styled-components";


import cat01Img from "../../assets/img/categories/cat-01.jpg"
import cat02Img from "../../assets/img/categories/cat-02.jpg"
import cat03Img from "../../assets/img/categories/cat-03.jpg"
import { Card } from '../card/Card';

export const Arrivals = () => {
    return (
        <ArrivalsSection>
            <ArrivalsContainer className="container">
                <ArrivalsHeader>
                    <h2 className="title-2">NEW ARRIVALS</h2>
                </ArrivalsHeader>
                <ArrivalsCards>
                    <Card title="Hoodies & Sweetshirt" img={cat01Img} />
                    <Card title="Coats & Parkas" img={cat02Img} />
                    <Card title="Tees & T-Shirt" img={cat03Img} />
                </ArrivalsCards>
            </ArrivalsContainer>
        </ArrivalsSection>
    );
};
const ArrivalsSection = styled.section`
    padding-top: 120px;
    padding-bottom: 143px;
`;

const ArrivalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ArrivalsHeader = styled.div`
    margin-bottom: 100px;
`;

const ArrivalsCards = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
`;

