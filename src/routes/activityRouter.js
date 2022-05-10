import React from "react";
import styled from "styled-components";
import ActivityMainSection from "./activitySection";

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
	width: 1200px;
	margin: 0 auto 100px auto;
	display: flex;
`;

function ArtistRouter() {
	return (
		<>
			<ActivityHeader>[시: 반] 일 상 </ActivityHeader>
			<ActivityWrapper>
				<ActivityMainSection />
			</ActivityWrapper>
		</>
	);
}

export default ArtistRouter;
