import React from "react";
import styled from "styled-components";

const footerLogo = "../assets/footer_logo.jpg";
const FooterSection = styled.footer`
	height: 200px;
	background: #000;
	color: #fff;
	text-align: center;
`;
const Inner = styled.div`
	max-width: 1200px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
`;
const LogoBox = styled.div`
	width: 200px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Logo = styled.img`
	width: 80%;
	height: 80%;
	margin: 0 auto;
`;
const LinkBox = styled.div`
	flex: 1;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: end;
	& > ul {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	& > ul > li {
		font-size: 2rem;
		cursor: pointer;
		padding: 10px;
		margin: 0 10px;
	}
	& > ul > li:hover {
		color: rgba(0, 0, 0, 0.3);
	}
`;
const InfoBox = styled.div`
	width: 300px;
	height: 80%;
	display: flex;
	align-items: center;
	font-size: 1rem;
	& > ul:first-child {
		text-align: end;
		margin-right: 10px;
	}
	& > ul:last-child {
		text-align: start;
	}
	& ul > li {
		padding: 5px 0;
	}
`;

const LinkList = [
	{
		name: "Instagram",
		img: "instagram",
		url: "https://instagram.com/siban.company?utm_medium=copy_link",
	},
	{
		name: "Youtube",
		img: "youtube",
		url: "https://www.youtube.com/channel/UCLXAm23QnEYE_WNyjUK3qyQ",
	},
];
const inforList = {
	tel: "010-6354-9756",
	Email: "cyg110@naver.com",
	Adr: "경기도 수원시 고색동 49-20 4층",
	Corp_No: "343-31-01201",
};
let infoKey = [];
let infoValue = [];
Object.keys(inforList).forEach((key) => infoKey.push(key));
Object.keys(inforList).forEach((key) => infoValue.push(inforList[key]));

function Footer() {
	return (
		<FooterSection>
			<Inner>
				<LogoBox>
					<Logo src={footerLogo} />
				</LogoBox>
				<LinkBox>
					<ul>
						{LinkList.map((item, index) => (
							<li key={index}>
								<a href={item.url} target="_blank" rel="noreferrer">
									<span>
										<i class={`ri-${item.img}-line`}></i>
									</span>
								</a>
							</li>
						))}
					</ul>
					<p>Copyright SIBAN All rights reserved.</p>
				</LinkBox>
				<InfoBox>
					<ul>
						{infoKey.map((item, index) => (
							<li key={index}> {item}</li>
						))}
					</ul>
					<ul>
						{infoValue.map((item, index) => (
							<li key={index}> {item}</li>
						))}
					</ul>
				</InfoBox>
			</Inner>
		</FooterSection>
	);
}

export default Footer;
