import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const headerLogo = "../assets/header_logo.jpg";

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
	width: 80%;
	height: 80%;
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
	& > span {
		margin-right: 5px;
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
	margin-top: 50px;
`;
const NavItem = styled.li`
	margin-right: 10px;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 30px;
	width: 20%;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
		color: rgba(0, 0, 0, 0.5);
	}
`;

const socialLinkItems = [
	{
		name: "Youtube",
		url: "https://www.youtube.com/channel/UCLXAm23QnEYE_WNyjUK3qyQ/about",
		img: "youtube",
	},
	{
		name: "Instagram",
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
		name: "CONNECTION",
		url: "/connection",
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
							<LinkItem ket={index}>
								<span>
									<i class={`ri-${item.img}-line`}></i>
								</span>
								<a href={item.url} target="_blank" rel="noreferre noreferrer">
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
