import React from "react";
import styled from "styled-components";

const SideNav = styled.div`
	width: 200px;
	height: 100%;
	text-align: center;
	background: rgba(0, 0, 0, 0.05);
	& > ul > li {
		font-size: 1.1rem;
		font-weight: bold;
		margin: 50px 0;
		cursor: pointer;
	}
	& > ul > li:hover {
		color: rgba(0, 0, 0, 0.4);
		text-decoration: underline;
	}
`;
const ProfileWrapper = styled.section`
	max-width: 1200px;
	height: 600px;
	overflow: hidden;
`;
const ArtistProfile = styled.article`
	width: 100%;
	height: 600px;
	display: flex;
	padding: 50px 80px;
	margin: 0 auto 100px auto;
	box-sizing: border-box;
`;
const ImageBox = styled.div`
	width: 400px;
	margin-right: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	& > img {
	}
`;
const DescBox = styled.div`
	width: 500px;
	display: flex;
`;
const LeftSide = styled.div`
	text-align: end;
	font-size: 1.1rem;
	font-weight: bold;
	margin-right: 20px;
	width: 150px;
	& li {
		margin: 15px 0;
	}
`;
const RightSide = styled.div`
	font-size: 1.1rem;
	& li {
		margin: 15px 0;
	}
	& .roleplay-list {
		height: 150px;
	}
`;

const artistInfo = [
	{
		name: "최영광",
		age: "27세 (만 25세)",
		email: "cyg110@naver.com",
		represent: "-",
		rolePlay: [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		musical: "난리부르스 - 수혁 역",
		shortCut: "새로고침 - 우진 역",
		musicVideo: "끝맺음(prod.임석원)",
		Vision: "내 꿈은 축구왕",
		src: "../assets/younggwang_main.jpg",
	},
	{
		name: "신락훈",
		age: "27세 (만 25세)",
		email: "cyg110@naver.com",
		represent: "-",
		rolePlay: [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		musical: "난리부르스 - 수혁 역",
		shortCut: "새로고침 - 우진 역",
		musicVideo: "끝맺음(prod.임석원)",
		Vision: "내 꿈은 축구왕",
		src: "../assets/rakoon_main.jpg",
	},
	{
		name: "김만중",
		age: "27세 (만 25세)",
		email: "cyg110@naver.com",
		represent: "-",
		rolePlay: [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		musical: "난리부르스 - 수혁 역",
		shortCut: "새로고침 - 우진 역",
		musicVideo: "끝맺음(prod.임석원)",
		Vision: "내 꿈은 축구왕",
		src: "../assets/manjoong_main.jpg",
	},
	{
		name: "홍윤화",
		age: "27세 (만 25세)",
		email: "cyg110@naver.com",
		represent: "-",
		rolePlay: [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		musical: "난리부르스 - 수혁 역",
		shortCut: "새로고침 - 우진 역",
		musicVideo: "끝맺음(prod.임석원)",
		Vision: "내 꿈은 축구왕",
		src: "../assets/yunhwa_main.jpg",
	},
	{
		name: "정재헌",
		age: "27세 (만 25세)",
		email: "cyg110@naver.com",
		represent: "-",
		rolePlay: [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		musical: "난리부르스 - 수혁 역",
		shortCut: "새로고침 - 우진 역",
		musicVideo: "끝맺음(prod.임석원)",
		Vision: "내 꿈은 축구왕",
		src: "../assets/jaehun_main.jpg",
	},
	{
		name: "윤수영",
		age: "27세 (만 25세)",
		email: "cyg110@naver.com",
		represent: "-",
		rolePlay: [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		musical: "난리부르스 - 수혁 역",
		shortCut: "새로고침 - 우진 역",
		musicVideo: "끝맺음(prod.임석원)",
		Vision: "내 꿈은 축구왕",
		src: "../assets/suyoung_main.jpg",
	},
];

function ArtistMainSection() {
	return (
		<>
			<SideNav>
				<ul>
					{artistInfo.map((item, index) => (
						<li key={index}>
							<a href={`#${item.name}`} id={index}>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</SideNav>
			<ProfileWrapper className="profile--wrapper">
				{artistInfo.map((item, index) => (
					<ArtistProfile id={item.name} key={index}>
						<ImageBox>
							<img src={item.src} alt="profile" />
						</ImageBox>
						<DescBox>
							<LeftSide>
								<ul>
									<li> 이름 </li>
									<li> 나이 </li>
									<li> 이메일 </li>
									<li> [대표작품] </li>
									<li style={{ height: "150px" }}> 연극 </li>
									<li> 단편영화 </li>
									<li> 뮤지컬 </li>
									<li> M/V </li>
									<li> 소개글 </li>
								</ul>
							</LeftSide>
							<RightSide>
								<ul>
									<li> {item.name} </li>
									<li> {item.age} </li>
									<li> {item.email} </li>
									<li> &nbsp; </li>
									<ul style={{ height: "150px" }}>
										{item.rolePlay.map((play, index) => (
											<li key={index}> {play} </li>
										))}
									</ul>
									<li> {item.musical} </li>
									<li> {item.shortCut} </li>
									<li> {item.musicVideo} </li>
									<li> 아킬레스건 파열 </li>
								</ul>
							</RightSide>
						</DescBox>
					</ArtistProfile>
				))}
			</ProfileWrapper>
		</>
	);
}

export default ArtistMainSection;
