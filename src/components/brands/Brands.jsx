import styled from 'styled-components';

import hm from "../../assets/img/brands/HM.png";
import obey from "../../assets/img/brands/Obey.png";
import shopify from "../../assets/img/brands/Shopify.png";
import lacoste from "../../assets/img/brands/Lacoste.png";
import levis from "../../assets/img/brands/Levis.png";
import amazon from "../../assets/img/brands/Amazon.png";

export const Brands = () => {
    return (
        <BrandsSection>
            <BrandsContainer className="container">
                <BrandsList className="brands__list">
                    <BrandItem><BrandLink href="#!"><BrandImage src={hm} alt="" /></BrandLink></BrandItem>
                    <BrandItem><BrandLink href="#!"><BrandImage src={obey} alt="" /></BrandLink></BrandItem>
                    <BrandItem><BrandLink href="#!"><BrandImage src={shopify} alt="" /></BrandLink></BrandItem>
                    <BrandItem><BrandLink href="#!"><BrandImage src={lacoste} alt="" /></BrandLink></BrandItem>
                    <BrandItem><BrandLink href="#!"><BrandImage src={levis} alt="" /></BrandLink></BrandItem>
                    <BrandItem><BrandLink href="#!"><BrandImage src={amazon} alt="" /></BrandLink></BrandItem>
                </BrandsList>
            </BrandsContainer>
        </BrandsSection>
    );
}
const BrandsSection = styled.section`
    padding: 60px 0 55px;
    background-color: var(--yellow);
`;

const BrandsContainer = styled.div`
   
`;

const BrandsList = styled.ul`
   display: flex;
    align-items: center;
    column-gap: 120px;
    mix-blend-mode: multiply;
`;

const BrandItem = styled.li`
    margin: 0;
    padding: 0;
`;

const BrandLink = styled.a``;

const BrandImage = styled.img``;




