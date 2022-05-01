import React from "react";
import styled from "styled-components";

const ActivityHeader = styled.header`
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
const ActivityWrapper = styled.div`
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

const activitytInfo = [
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
			<ActivityHeader>[시: 반] 일 상 </ActivityHeader>
			<ActivityWrapper>
				<SideNav>
					<ul>
						<li> 공 연 </li>
						<li> 영 상 </li>
						<li> 레 슨 </li>
						<li> 일상모습 </li>
					</ul>
				</SideNav>
				<MainSection></MainSection>
			</ActivityWrapper>
		</>
	);
}

export default ArtistRouter;
