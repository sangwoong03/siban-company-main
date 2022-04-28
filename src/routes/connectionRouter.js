import React from "react";
import LocationSiban from "../components/locationSiban";
import styled from "styled-components";

const CorpsWrapper = styled.div`
	max-width: 1200px;
	padding: 50px 0;
	margin: 50px auto 0 auto;
`;
const CorpsInfo = styled.div`
	max-width: 860px;
	margin: 0 auto;
`;
const P = styled.div`
	font-size: 1rem;
`;
const H2 = styled.div`
	font-size: 1.7rem;
`;

function ConnectionRouter() {
	return (
		<div>
			<LocationSiban />
			<CorpsWrapper>
				<CorpsInfo>
					<H2> 사업자정보 </H2>
					<P> 시반 컴퍼니 </P>
				</CorpsInfo>
			</CorpsWrapper>
		</div>
	);
}

export default ConnectionRouter;
