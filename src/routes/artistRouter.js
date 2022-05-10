import React from "react";
import styled from "styled-components";
import ArtistMainSection from "./artistSection";

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

function ArtistRouter() {
	return (
		<>
			<ArtistsHeader>[시: 반] 아티스트</ArtistsHeader>
			<ArtistsWrapper>
				<ArtistMainSection />
			</ArtistsWrapper>
		</>
	);
}

export default ArtistRouter;
