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
const ArtistsWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto 100px auto;
	box-sizing: border-box;
	padding: 50px 80px;
	height: 600px;
	display: flex;
	overflow: hidden;
`;
const ImageBox = styled.div`
	width: 500px;
	margin-right: 50px;
	display: flex;
	flex-direction: column;
	& img {
		margin-bottom: 100px;
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
	width: 85px;
	height: 600px;
	& li {
		margin: 10px 0;
	}
`;
const RightSide = styled.div`
	font-size: 1.1rem;
	& li {
		margin: 10px 0;
	}
	& .roleplay-list {
		height: 150px;
	}
`;

const artistImages = [
	{
		src: ["../assets/younggwang_main.jpg"],
	},
	{
		src: ["../assets/rakoon_main.jpg"],
	},
	{
		src: ["../assets/manjoong_main.jpg"],
	},
	{
		src: ["../assets/younhwa_main.jpg"],
	},
	{
		src: ["../assets/jaehun_main.jpg"],
	},
	{
		src: ["../assets/suyoung_main.jpg"],
	},
];

const artistInfo = [
	{
		이름: "최영광",
		나이: "27세 (만 25세)",
		이메일: "cyg110@naver.com",
		"사는 곳": "경기도 오산시",
		작품활동: "-",
		"[연극]": [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		"[뮤지컬]": "난리부르스 - 수혁 역",
		"[단편영화]": "새로고침 - 우진 역",
		"[M/V]": "끝맺음(prod.임석원)",
		한마디: "내 꿈은 축구왕",
	},
	{
		이름: "신락훈",
		나이: "27세 (만 25세)",
		이메일: "cyg110@naver.com",
		"사는 곳": "경기도 오산시",
		작품활동: "-",
		"[연극]": [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		"[뮤지컬]": "난리부르스 - 수혁 역",
		"[단편영화]": "새로고침 - 우진 역",
		"[M/V]": "끝맺음(prod.임석원)",
	},
	{
		이름: "김만중",
		나이: "27세 (만 25세)",
		이메일: "cyg110@naver.com",
		"사는 곳": "경기도 오산시",
		작품활동: "-",
		"[연극]": [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		"[뮤지컬]": "난리부르스 - 수혁 역",
		"[단편영화]": "새로고침 - 우진 역",
		"[M/V]": "끝맺음(prod.임석원)",
	},
	{
		이름: "홍윤화",
		나이: "27세 (만 25세)",
		이메일: "cyg110@naver.com",
		"사는 곳": "경기도 오산시",
		작품활동: "-",
		"[연극]": [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		"[뮤지컬]": "난리부르스 - 수혁 역",
		"[단편영화]": "새로고침 - 우진 역",
		"[M/V]": "끝맺음(prod.임석원)",
	},
	{
		이름: "정재헌",
		나이: "27세 (만 25세)",
		이메일: "cyg110@naver.com",
		"사는 곳": "경기도 오산시",
		작품활동: "-",
		"[연극]": [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		"[뮤지컬]": "난리부르스 - 수혁 역",
		"[단편영화]": "새로고침 - 우진 역",
		"[M/V]": "끝맺음(prod.임석원)",
	},
	{
		이름: "윤수영",
		나이: "27세 (만 25세)",
		이메일: "cyg110@naver.com",
		"사는 곳": "경기도 오산시",
		작품활동: "-",
		"[연극]": [
			"그대 내 곁에 - 김차사 역",
			"더 앵글러 - 최진서 역",
			"마리보의 연인들 - 블레즈 역",
			"문 - 김과장 역",
			"창고에서 - 덕배 역",
		],
		"[뮤지컬]": "난리부르스 - 수혁 역",
		"[단편영화]": "새로고침 - 우진 역",
		"[M/V]": "끝맺음(prod.임석원)",
	},
];

function ArtistMainSection({ id }) {
	let artistInfoKey = [];
	let artistInforValue = [[], [], [], [], [], []];

	Object.keys(artistInfo[0]).forEach((key) => artistInfoKey.push(key));
	for (let i = 0; i < artistInfo.length; i++) {
		Object.keys(artistInfo[i]).forEach((key) =>
			artistInforValue[i].push(artistInfo[i][key]),
		);
	}
	console.log(artistInforValue);

	return (
		<>
			<SideNav>
				<ul>
					{artistInfo.map((item, index) => (
						<li key={index}>
							<a href={`#${index}`}>{item.이름}</a>
						</li>
					))}
				</ul>
			</SideNav>
			<ArtistsWrapper>
				<ImageBox>
					{artistImages.map((img, index) => (
						<img src={img.src} alt="" key={index} />
					))}
				</ImageBox>
				<DescBox>
					<LeftSide>
						{artistInfoKey.map((item, index) => (
							<ul key={index}>
								{index === 5 ? (
									<li style={{ height: "150px" }}> {item} </li>
								) : (
									<li> {item} </li>
								)}
							</ul>
						))}
					</LeftSide>
					<RightSide>
						{artistInforValue[0].map((item, index) => (
							<ul key={index} id={index}>
								{index === 5 ? (
									<ul className="roleplay-list">
										{artistInforValue[0][5].map((item, index) => (
											<li key={index}> {item} </li>
										))}
									</ul>
								) : (
									<li> {item} </li>
								)}
							</ul>
						))}
					</RightSide>
				</DescBox>
			</ArtistsWrapper>
		</>
	);
}

export default ArtistMainSection;
