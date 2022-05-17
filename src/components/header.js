import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const headerLogo = "../assets/main_logo_white.jpg";

const HeaderSection = styled.header`
	height: 200px;
	text-align: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.75);
	box-shadow: 0 0 5px rgba(0 0 0 / 75);
`;
const Inner = styled.div`
	max-width: 1200px;
	height: 100%;
	margin: 0 auto;
	display: flex;
`;
const LogoBox = styled.div`
	width: 200px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Logo = styled.img`
	width: 100%;
	height: 100%;
	margin: 0 auto;
`;
const MenuNav = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;
const SocialLink = styled.ul`
	display: flex;
	flex-direction: row-reverse;
	margin-top: 25px;
`;
const LinkItem = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 10px;
	& > a > span {
		font-szie: 1rem;
	}
	&:hover {
		text-decoration: underline;
		color: rgba(0, 0, 0, 0.5);
	}
	:first-child {
		margin-left: 20px;
	}
`;
const NavGroup = styled.ul`
	display: flex;
	justify-content: space-around;
	margin-top: 50px;
`;
const NavItem = styled.li`
	font-size: 1.2rem;
	font-weight: bold;
	margin-top: 30px;
	width: 20%;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
		color: rgba(0, 0, 0, 0.5);
	}
	& a {
		padding: 20px;
	}
`;

const socialLinkItems = [
	{
		name: " Youtube",
		url: "https://www.youtube.com/channel/UCLXAm23QnEYE_WNyjUK3qyQ/featured",
		img: "youtube",
	},
	{
		name: " Instagram",
		url: "https://instagram.com/siban.company?utm_medium=copy_link",
		img: "instagram",
	},
];

const navRouterItems = [
	{
		name: "SIBAN",
		url: "/siban",
	},
	{
		name: "ACTIVITY",
		url: "/activity",
	},
	{
		name: "ARTISTS",
		url: "/artists",
	},
	{
		name: "LOCATION",
		url: "/location",
	},
	{
		name: "BOARD",
		url: "/board",
	},
];

function Header() {
	return (
		<HeaderSection>
			<Inner>
				<LogoBox>
					<Link to="/">
						<Logo src={headerLogo} />
					</Link>
				</LogoBox>
				<MenuNav>
					<SocialLink>
						{socialLinkItems.map((item, index) => (
							<LinkItem key={index}>
								<a href={item.url} target="_blank" rel="noreferre noreferrer">
									<span>
										<i className={`ri-${item.img}-line`}></i>
									</span>
									{item.name}
								</a>
							</LinkItem>
						))}
					</SocialLink>
					<NavGroup>
						{navRouterItems.map((item, index) => (
							<NavItem key={index}>
								<Link to={item.url}>{item.name}</Link>
							</NavItem>
						))}
					</NavGroup>
				</MenuNav>
			</Inner>
		</HeaderSection>
	);
}

export default Header;
