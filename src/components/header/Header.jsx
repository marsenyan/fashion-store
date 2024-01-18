import styled from "styled-components";
import logoImg from "../../assets/img/icons/logo.svg"

export const Header = ()  => {
  return (
    <HeaderContent>
      <div className="container">
        <HeaderRow>
          <Logo>
            <LogoImage src={logoImg} alt="Logo" />
            <LogoText>Fashion</LogoText>
          </Logo>
          <Nav>
            <NavList>
              <NavItem><NavLink href="#!">CATALOGUE</NavLink></NavItem>
              <NavItem><NavLink href="#!">FASHION</NavLink></NavItem>
              <NavItem><NavLink href="#!">FAVOURITE</NavLink></NavItem>
              <NavItem><NavLink href="#!">LIFESTYLE</NavLink></NavItem>
              <NavItem><NavButton className="header__nav-btn">SIGN UP</NavButton></NavItem>
            </NavList>
          </Nav>
        </HeaderRow>
      </div>
    </HeaderContent>
  );
};

const HeaderContent = styled.header`
  padding: 46px 0 56px;
`;

const HeaderRow = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 13px;
`;

const LogoImage = styled.img``;

const LogoText = styled.span`
  font-weight: 900;
  font-size: 40px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.01em;
`;

const NavList = styled.ul`
  display: flex;
  column-gap: 65px;
  align-items: center;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: var(--text-color);
`;

const NavButton = styled.a`
  padding: 13px 22px 17px;
  background-color: #000;
  border-radius: 7px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -0.03em;
  color: #fff;
`;
