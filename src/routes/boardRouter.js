import React, { useState } from "react";
import styled from "styled-components";
import HeaderForRouter from "./RouterHeader";
import WrapperForRouter from "./RouterWrapper";
import SideNavForRouter from "./RouterSideNav";

const Board = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	width: 1200px;
	height: 600px;
	text-align: center;
	& p {
		padding-top: 200px;
	}
`;

function BoardRouter() {
	const boardNavList = ["공지사항", "배우에게", "레슨문의", "대관문의"];

	const [boardSubTitle, setBoardSubTitle] = useState(boardNavList[0]);

	const changeBoard = (e) => {
		const navId = parseInt(e.target.id);

		for (let i = 0; i < boardNavList.length; i++) {
			if (navId === i) {
				setBoardSubTitle(boardNavList[i]);
			}
		}
	};
	return (
		<div>
			<HeaderForRouter page={`[시: 반] 소통 - ${boardSubTitle}`} />
			<WrapperForRouter>
				<SideNavForRouter height={"100%"}>
					<ul>
						{boardNavList.map((item, index) => (
							<li key={index} id={index} onClick={changeBoard}>
								{item}
							</li>
						))}
					</ul>
				</SideNavForRouter>
				<Board>
					<p>준비 중입니다.</p>
				</Board>
			</WrapperForRouter>
		</div>
	);
}

export default BoardRouter;
