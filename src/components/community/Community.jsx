import styled from "styled-components";
import backY from "../../assets/img/images/backgroundY.png"
import backB from "../../assets/img/images/backB.png"

import fb from "../../assets/img/socials/fb.svg";
import inst from "../../assets/img/socials/inst.svg";
import twit from "../../assets/img/socials/tw.svg";
import lin from "../../assets/img/socials/in.svg"

export const Community = () => {
  return (
    <CommunitySection>
      <CommunityContainer className="container">
        <CommunityContent>
          <CommunityUp>
            <BackgroundImage src={backY} alt="Backgroung"/>
            <TextWrapper>
              <TextBlock>
                <h2>JOIN SHOPPING COMMUNITY TO<br></br> GET MONTHLY PROMO</h2>
                <p>Type your email down below and be young wild generation</p>
                <Form>
                  <Input type="text" placeholder="Add your email here" />
                  <Button>Send</Button>
                </Form>
              </TextBlock>
            </TextWrapper>
            <ButtonWrapper>
            </ButtonWrapper>
          </CommunityUp>
          <CommunityDown>
            <BackgroundImageDown src={backB} alt="Backgroung"/>
            <SocialsContent>
              <h2>FASHION</h2>
              <p>Complete your style with awesome <br></br>clothes from us.</p>
              <ImagesWrapper>
                <img src={fb} alt="Facebook" />
                <img src={inst} alt="Instagram" />
                <img src={twit} alt="Twitter" />
                <img src={lin} alt="LinkedIn" />
              </ImagesWrapper>
            </SocialsContent>
            <FooterContent>
                <Column>
                <h3>Company</h3>
                <p>
                    About<br></br>
                    Contact us <br></br>
                    Support<br></br>
                    Careers
                </p>
                </Column>
                <Column>
                <h3>Quick Link</h3>
                <p>
                    Share Location<br></br>
                    Orders Tracking <br></br>
                    Size Guide<br></br>
                    FAQs
                </p>
                </Column>
                <Column>
                <h3>Legal</h3>
                <p>
                    Terms & conditions <br></br>
                    Privacy Policy<br></br>
                </p>
                </Column>
  </FooterContent>
          </CommunityDown>
        </CommunityContent>
      </CommunityContainer>
    </CommunitySection>
  );
};

const CommunitySection = styled.section`
  /* Estilos para la sección de la comunidad */
`;

const CommunityContainer = styled.div`
  /* Estilos para el contenedor de la comunidad */
`;

const CommunityContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CommunityUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const BackgroundImage = styled.img`
  width: 1920px;
  height: 623px;
  position: relative;
  z-index: 0; 
`;
const BackgroundImageDown = styled.img`
  width: 1920px;
  height: 525px;
  position: relative;
  z-index: 0; 
    position: relative;
    top: -208px;

`;
const TextWrapper = styled.div`
    margin-bottom: 20px;
    z-index: 1;
    position: relative;
    display: flex;
    bottom: 300px;
`;

const TextBlock = styled.div`
  text-align: center;
  color: white; 
  display: flex;
  flex-direction: column;
  position: relative;
    bottom: 177px;

  h2 {
    font-size: 52px; /* Establece el tamaño de fuente para h2 */
    margin-bottom: 20px; /* Añade margen inferior si es necesario */
  }
  p {
    font-size: 32px;
    color: white; /* Puedes aplicar estilos adicionales al texto si es necesario */
  }
`;

const Form = styled.form`
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    position: relative;
    top: 40px;
`;

const Input = styled.input`
  width: 574px;
  height: 87px;
  padding: 15px;
  color: black; /* Color del texto dentro del input */
  background-color: white; /* Color de fondo del input */
  border-radius: 10px;
  position: relative;
  left: 85px;
`;

const Button = styled.button`
    right: 92px;
    width: 167px;
    height: 67px;
    background-color: black;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: -143px;
`;

const CommunityDown = styled.div`
  display: flex;
  position: relative;
`;

const SocialsContent = styled.div`
      color: white;
    position: absolute;
    left: 16%;
    transform: translate(-50%, -50%);
    z-index: 1;
    top: 38px;

  h2 {
    font-size: 42px;
    margin-bottom: 20px;
  }

  p {
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }

  img {
    margin-right: 10px;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const FooterContent = styled.div`
  display: flex;
    justify-content: space-between;
    padding: 20px;
    position: absolute;
    top: -90px;
    right: 5%;
    gap: 60px;
`;
const Column = styled.div`
 font-size: 20px;
 h3 {
    color: #EAEAEA;
    padding: 0px 0px 20px 0px;

  }

  p {
    color: #787878;

  }
`;