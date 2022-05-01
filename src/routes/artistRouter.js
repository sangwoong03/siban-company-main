import React from "react";
import styled from "styled-components";

const ArtistsHeader = styled.header`
	margin: 0 auto 20px auto;
	padding: 100px 0 0 0;
	border-bottom: 1px solid #e5e5e5;
	max-width: 860px;
	height: 70px;
	display: flex;
	align-items: center;
	font-size: 2.2rem;
	font-weight: bold;
`;
const ArtistsWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto 100px auto;
	height: 600px;
	display: flex;
`;
const SideNav = styled.div`
	width: 200px;
	height: 100%;
	border-right: 1px solid #c2c2c2;
	text-align: center;
	& > ul > li {
		font-size: 1.2rem;
		margin: 50px 0;
		cursor: pointer;
	}
	& > ul > li:hover {
		color: rgba(0, 0, 0, 0.4);
		text-decoration: underline;
	}
`;
const MainSection = styled.section`
	width: 100%;
	height: 100%;
	background: green;
`;

const artistInfo = [
	{
		title: "",
		name: "",
		age: "",
		where: "",
		desc: "",
		projects: "",
		url: "",
	},
	{
		title: "",
		name: "",
		age: "",
		where: "",
		desc: "",
		projects: "",
		url: "",
	},
];
function ArtistRouter() {
	return (
		<>
			<ArtistsHeader>[시: 반] 아티스트</ArtistsHeader>
			<ArtistsWrapper>
				<SideNav>
					<ul>
						<li> 최영광 </li>
						<li> 신락훈 </li>
						<li> 홍윤화 </li>
						<li> 김만중 </li>
						<li> 정재헌 </li>
						<li> 윤수영 </li>
					</ul>
				</SideNav>
				<MainSection></MainSection>
			</ArtistsWrapper>
		</>
	);
}

export default ArtistRouter;
