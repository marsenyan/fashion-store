import styled from 'styled-components';
import promoImg from "../../assets/img/images/header-img.jpg"


export const Promo = () => {
	return (
		<PromoSection>
			<div className="container">
				<PromoContent>
					<PromoText>
						<PromoTitle>
							<Highlight>
								<span>LET’S</span>
							</Highlight>
							EXPLORE
							<Highlight>
								<span>UNIQUE</span>
							</Highlight>
							CLOTHES.
						</PromoTitle>
						<PromoDesc>Live for Influential and Innovative fashion!</PromoDesc>
						<PromoBtnWrapper>
							<PromoBtn href="#!" >
								Shop Now
							</PromoBtn>
						</PromoBtnWrapper>
					</PromoText>
					<>
						<img src={promoImg} alt="Promo" />
					</>
				</PromoContent>
			</div>
		</PromoSection>
	);
};

const PromoSection = styled.section`
	margin-bottom: 63px;
`;

const PromoContent = styled.div`
	display: flex;
	column-gap: 24px;
	padding-top: 68px;
	padding-left: 120px;
	border-radius: 59px;
	background-color: #f4f6f5;
`;

const PromoText = styled.div``;

const PromoTitle = styled.div`
	max-width: 480px;
	margin-bottom: 40px;
	font-weight: 900;
	font-size: 96px;
	line-height: 1.25;
`;

const PromoDesc = styled.div`
	margin-bottom: 32px;
	font-weight: 400;
	font-size: 32px;
	line-height: calc(48 / 32);
	letter-spacing: -0.05em;
`;

const PromoBtnWrapper = styled.div`
	display: flex;
	column-gap: 34px;
	align-items: center;

	&::before {
		content: '';
		display: inline-block;
		width: 190px;
		height: 32px;
		background-image: url('../../assets/img/icons/decor-yellow.svg');
	}
`;

const PromoBtn = styled.a`
	padding: 18px 40px;
	background: #000000;
	border-radius: 10px;
	font-weight: 500;
	font-size: 30px;
	line-height: 1.5;
	letter-spacing: -0.05em;
	color: #fff;
`;

const Highlight = styled.span`
	position: relative;
	display: inline-block;

	& span {
		position: relative;
		z-index: 1;
	}

	&::before {
		content: '';
		display: block;
		position: absolute;
		top: -12px;
		bottom: 0px;
		left: -40px;
		right: -160px;
		background-color: #fff;
		transform: rotate(-2deg);
	}

	&.highlight--yellow::before {
		right: -110px;
		background-color: var(--yellow);
	}
`;
