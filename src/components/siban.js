import React from "react";
import styled from "styled-components";

const HomeSiban = styled.section`
	background: #000000;
	color: #ffffff;
	text-align: center;
`;
const Inner = styled.div`
	max-width: 1200px;
	height: 650px;
	margin: 0 auto;
	display: flex;
	background: url("../assets/main_photo.png") no-repeat;
	background-size: cover;
	position: relative;
`;
const Cover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		to right,
		rgba(0, 0, 0, 0.5),
		rgba(0, 0, 0, 0.1),
		rgba(0, 0, 0, 0.5)
	);
	& > div {
		position: absolute;
		top: 15%;
		left: 5%;
	}
	& > div > p {
		font-size: 1rem;
		margin 10px 0;
	}
	& > div > h2 {
		font-size: 4rem;
	}
`;

function Siban() {
	return (
		<HomeSiban>
			<Inner>
				<Cover>
					<div>
						<p> 예 술 창 작 집 단</p>
						<h2> [ 시 : 반 ] </h2>
						<p> 시 작 이 &nbsp; 반 이 다</p>
					</div>
				</Cover>
			</Inner>
		</HomeSiban>
	);
}

export default Siban;
