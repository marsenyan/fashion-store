import styled from "styled-components";
import mobile from  "../../assets/img/images/vouchers-img.png"
import desc from "../../assets/img/images/desc.png"
import app from "../../assets/img/icons/app-store.png";
import google from "../../assets/img/icons/google-play.png";


export const Voucher = () => {
    return (
        <VoucherSection>
            <VoucherContainer className="container">
                <VoucherContent>
                    <VoucherLeft>
                        <img src={desc} alt="Description"/>
                        <ButtonWrapper>
                            <ImageButton src={app} alt="Button 1" />
                            <ImageButton src={google} alt="Button 2" />
                        </ButtonWrapper>
                    </VoucherLeft>
                    <VoucherRight>
                        <img src={mobile} alt="Voucher"/>
                    </VoucherRight>
                </VoucherContent>
            </VoucherContainer>
        </VoucherSection>
    );
};

const VoucherSection = styled.section`

`;

const VoucherContainer = styled.div`
    
`;

const VoucherContent = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin-bottom: 100px;
`;

const VoucherLeft = styled.div`
    position: relative;
    top: 200px;
`;

const VoucherRight = styled.div`
    
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  position: relative;
    top: 61px;
`;

const ImageButton = styled.img`
  /* Estilos para los botones de imagen si es necesario */
`;