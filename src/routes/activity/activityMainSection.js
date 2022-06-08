import React, { useState } from "react";
import styled from "styled-components";

const BasicInfo = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	@media only screen and (max-width: 480px) {
		width: 100%;
		margin: 30px auto 0 auto;
	}
`;
const PosterBox = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	& > img {
		width: 300px;
	}
	@media only screen and (max-width: 480px) {
		width: 120px;
		& > img {
			width: 100%;
		}
	}
`;
const DescriptionBox = styled.div`
	flex: 1;
	display: flex;
`;
const LeftList = styled.ul`
	width: 10%;
	font-size: 1.2rem;
	font-weight: bold;
	text-align: end;
	margin-right: 20px;

	& > li {
		margin-bottom: 20px;
	}

	@media only screen and (max-width: 480px) {
		font-size: 0.7rem;
		width: 15%;
		margin-left: 10px;
		margin-right: 10px;
	}
`;
const RightList = styled.ul`
	flex: 1;
	font-size: 1.2rem;
	& > li {
		margin-bottom: 20px;
	}
	@media only screen and (max-width: 480px) {
		font-size: 0.7rem;
	}
`;
const PosterSub = styled.div`
	width: 100%;
	margin-top: 100px;
	& > img {
		width: 800px;
		margin: 0 auto;
	}
	@media only screen and (max-width: 480px) {
		margin-top: 30px;
		& > img {
			width: 100%;
			margin: 0 auto;
		}
	}
`;

function ActivityMainSection() {
	const [overflow, setOverflow] = useState("hidden");
	const [height, setHeight] = useState("1000px");
	const [gradient, setGradient] = useState(
		"linear-gradient(to top, #fff 10%, rgba(0, 0, 0, 0.05))",
	);
	const [text, setText] = useState("자세히 보기");

	const showPoster = () => {
		if (overflow === "hidden") {
			setOverflow("none");
			setHeight("auto");
			setGradient("transparent");
			setText("닫기");
		} else {
			setOverflow("hidden");
			setHeight("1000px");
			setGradient("linear-gradient(to top, #fff 10%, rgba(0, 0, 0, 0.05))");
			setText("자세히 보기");
		}
	};

	const MainSection = styled.section`
		width: 1200px;
		height: ${height};
		overflow: ${overflow};
		position: relative;
		@media only screen and (max-width: 480px) {
			width: 90%;
			margin: 0 auto;
		}
	`;
	const MoreInfoBtnBox = styled.div`
		width: 800px;
		height: 400px;
		background: ${gradient};
		z-index: 5;
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		& > span {
			position: absolute;
			bottom: 10px;
			z-index: 10;
			background: rgba(0, 0, 0, 0.1);
			font-weight: bold;
			padding: 12px 20px;
			border-radius: 5px;
			cursor: pointer;
		}
		& > span:hover {
			background: rgba(0, 0, 0, 0.2);
		}

		@media only screen and (max-width: 480px) {
			width: 100%;
			height: 200px;
			& > span {
				font-size: .7rem;
		}
	`;
	return (
		<>
			<MainSection className="activitiy--main--section">
				<BasicInfo>
					<PosterBox>
						<img src="../assets/poster_main.jpg" alt="main-poster" />
					</PosterBox>
					<DescriptionBox>
						<LeftList>
							<li> 제목 </li>
							<li> 장르 </li>
							<li> 기간 </li>
							<li style={{ height: "50px" }}> 시간 </li>
							<li style={{ height: "55px" }}> 장소 </li>
							<li> 줄거리 </li>
						</LeftList>
						<RightList>
							<li>
								그대 내 곁에 <span style={{ color: "red" }}> (공연 종료) </span>
							</li>
							<li> 드라마극 (80분) </li>
							<li> 2022-05-14.(토) ~ 2022-05-15.(일) </li>
							<ul
								className="right-list--time"
								style={{ height: "50px", marginBottom: "20px" }}
							>
								<li style={{ marginBottom: "10px" }}>토요일 19시</li>
								<li> 일요일 15시, 19시 </li>
							</ul>
							<ul
								className="right-list--place"
								style={{ height: "50px", marginBottom: "20px" }}
							>
								<li style={{ marginBottom: "10px" }}>작은공연장 단</li>
								<li>강원도 강릉시 경강로2046번길 5</li>
							</ul>
							<li>
								<p style={{ lineHeight: "1.7rem" }}>
									저승으로 가게 된 만수. 세명의 저승사자들의 안내에 따라
									저승에서의 마지막 여정을 떠나려는데.. 이승에서의 못다한 미련
									때문에 쉽게 발걸음을 떼지 못한다. 이에 저승사자들은 만수가
									가지고 있는 미련이 어떤 미련인지 살펴보기로 한다.
								</p>
							</li>
							{/* <li>
								<ButtonBox>
									<a
										href="https://booking.naver.com/booking/12/bizes/686227"
										target="_blank"
										rel="noreferrer"
									>
										네이버 예약
									</a>
									<a
										href="https://map.naver.com/v5/entry/place/1133394578?c=14347808.2782850,4544333.2361852,15,0,0,0,dh"
										target="_blank"
										rel="noreferrer"
									>
										공연장 위치
									</a>
								</ButtonBox>
							</li> */}
						</RightList>
					</DescriptionBox>
				</BasicInfo>
				<PosterSub>
					<img src="../assets/poster_sub.jpg" alt="sub-poster" />
				</PosterSub>
				<MoreInfoBtnBox>
					<span onClick={showPoster}> {text} </span>
				</MoreInfoBtnBox>
			</MainSection>
		</>
	);
}

export default ActivityMainSection;
