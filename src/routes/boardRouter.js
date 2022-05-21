import React from "react";
import styled from "styled-components";
import HeaderForRouter from "./RouterHeader";
import WrapperForRouter from "./RouterWrapper";

const Board = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	margin: 200px auto 0 auto;
	text-align: center;
`;

function BoardRouter() {
	return (
		<div>
			<HeaderForRouter page={"[시: 반] 소통"} />
			<WrapperForRouter>
				<Board>준비 중입니다.</Board>
			</WrapperForRouter>
		</div>
	);
}

export default BoardRouter;
