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
	cursor: pointer;
	padding: 10px;
	&:hover {
		text-decoration: underline;
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
	transition: 0.3s ease;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
		font-size: 1.4rem;
	}
`;

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
					{/* image 추가 */}
					<SocialLink>
						<LinkItem> Instagram </LinkItem>
						<LinkItem> Youtube </LinkItem>
					</SocialLink>
					<NavGroup>
						<NavItem>
							<Link to="/siban"> SIBAN </Link>
						</NavItem>
						<NavItem>
							<Link to="/activity"> ACTIVITY </Link>
						</NavItem>
						<NavItem>
							<Link to="/artists"> ARTISTS </Link>
						</NavItem>
						<NavItem>
							<Link to="/connection"> CONNECTION </Link>
						</NavItem>
						<NavItem>
							<Link to="/board"> BOARD </Link>
						</NavItem>
					</NavGroup>
				</MenuNav>
			</Inner>
		</HeaderSection>
	);
}

export default Header;
