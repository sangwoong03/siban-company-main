import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SlideBtn from "./button/slideBtn";

const HomeActivity = styled.section`
	padding: 100px 0;
	text-align: center;
`;
const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	height: 500px;
	position: relative;
`;
const TitleBox = styled.div`
	max-width: 860px;
	padding-bottom: 10px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: end;
	border-bottom: 1px solid #2b2b2b;
	& > h1 {
		font-size: 2.5rem;
	}
`;
const AcitvityBox = styled.div`
	max-width: 960px;
	height: 100%;
	margin: 0 auto;
	position: relative;
`;
const ActivityWrapper = styled.div`
	max-width: 100%;
	height: 100%;
	margin-top: 50px;
	overflow: hidden;
`;
const ActivitySlide = styled.ul`
	width: 1980px;
	display: flex;
	align-items: center;
`;
const ActivityTiles = styled.li`
	width: 300px;
	height: 360px;
	& > div,
	img {
		width: 100%;
		height: 100%;
	}
	& > div > img {
		background-size: cover;
		cursor: pointer;
	}
	:not(last-child) {
		margin-right: 20px;
	}
	& p {
		font-size: 1.2rem;
		margin: 10px 0;
	}
	& a {
		font-size: 1rem;
		&:hover {
			color: rgba(0, 0, 0, 0.4);
		}
	}
`;

const activityItems = [
	{
		title: "그대 내곁에 (강릉)",
		des: "",
		src: "../assets/act_1.jpg",
		schedule: true,
	},
	{
		title: "그대 내곁에 (서울)",
		des: "",
		src: "../assets/act_1.jpg",
		schedule: false,
	},
	{
		title: "끝맺음 (prod. 임석원) - 김홍준",
		des: "",
		src: "../assets/act_2.jpg",
		schedule: true,
	},
	{
		title: "월드 2인극 페스티벌",
		des: "",
		src: "../assets/act_3.gif",
		schedule: false,
	},
];
function Activity() {
	return (
		<HomeActivity>
			<Inner>
				<TitleBox>
					<h1> [시:반] 일상 </h1>
					<p>
						<Link to="/activity">자세히 보기</Link>
					</p>
				</TitleBox>
				<AcitvityBox>
					<ActivityWrapper>
						<ActivitySlide>
							{activityItems.map((item, index) => (
								<ActivityTiles key={index}>
									<div>
										<img src={item.src} alt={item.title} title="이동" />
										<p> {item.title} </p>
									</div>
								</ActivityTiles>
							))}
						</ActivitySlide>
					</ActivityWrapper>
				</AcitvityBox>
				<SlideBtn color="white" />
			</Inner>
		</HomeActivity>
	);
}

export default Activity;
