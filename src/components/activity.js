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
	transition: 0.7s ease;
`;
const ActivityTiles = styled.li`
	width: 300px;
	height: 360px;
	margin-bottom: 10px;
	& div,
	img {
		width: 100%;
		height: 100%;
		margin-bottom: 20px;
	}
	& > div > img {
		background-size: cover;
	}
	:not(last-child) {
		margin-right: 20px;
	}
	& h2 {
		font-size: 1.2rem;
		font-weight: bold;
		margin: 10px 0;
	}
	& p:first-child {
		font-size: 1rem;
		padding: 10px 0;
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
		brief: "2022년 5월 14일 ~ (예정)",
		src: "../assets/siban_activity_Gangneung.jpg",
		schedule: true,
	},
	{
		title: "그대 내곁에 (서울)",
		brief: "2021년 12월 21일 ~ 26일 (완)",
		src: "../assets/act_1.jpg",
		schedule: false,
	},
	{
		title: "끝맺음 (prod. 임석원) - 김홍준",
		brief: "뮤직비디오 (완)",
		src: "../assets/act_2.jpg",
		schedule: false,
	},
	{
		title: "월드 2인극 페스티벌",
		brief: "2인극 (완)",
		src: "../assets/act_3.gif",
		schedule: false,
	},
];
function Activity() {
	function slideBtn(e) {
		const id = e.target.id;
		const ul = document.querySelector(".slide--wrapper--activities");

		if (id === "left-btn") {
			ul.style.transform = `translateX(0)`;
		} else if (id === "right-btn") {
			ul.style.transform = `translateX(-960px)`;
		}
	}
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
						<ActivitySlide className="slide--wrapper--activities">
							{activityItems.map((item, index) => (
								<ActivityTiles key={index}>
									<div>
										<p
											style={
												item.schedule
													? { fontWeight: "bold" }
													: { fontWeight: "regular", color: "#b2b2b2" }
											}
										>
											{" "}
											{item.brief}{" "}
										</p>
										<img src={item.src} alt={item.title} title="이동" />
										<h2> {item.title} </h2>
									</div>
								</ActivityTiles>
							))}
						</ActivitySlide>
					</ActivityWrapper>
				</AcitvityBox>
				<SlideBtn onClick={slideBtn} />
			</Inner>
		</HomeActivity>
	);
}

export default Activity;
