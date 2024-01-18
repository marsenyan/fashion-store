import styled from "styled-components";
import { Card } from "../card/Card";

import prom1 from "../../assets/img/images/promo-01.jpg";
import prom2 from "../../assets/img/images/promo-02.jpg";

export const Favourite = () => {
    return (
        <FavouriteSection>
            <FavouriteContainer className="container">
                <FavouriteHeader>
                    <h2 className="title-2">Young’s Favourite</h2>
                </FavouriteHeader>
                <FavouriteCards>
                    <Card title="Trending on instagram" img={prom1} />
                    <Card title="All Under $40" img={prom2} />
                </FavouriteCards>
            </FavouriteContainer>
        </FavouriteSection>
    );
};
const FavouriteSection = styled.section`
    padding-top: 120px;
    padding-bottom: 143px;
`;

const FavouriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 50px;
`;

const FavouriteHeader = styled.div`
    margin-bottom: 100px;
`;

const FavouriteCards = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
`;

