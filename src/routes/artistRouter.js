import React from "react";
import styled from "styled-components";

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
const SideNav = styled.div`
	width: 200px;
	height: 100%;
	border-right: 1px solid #c2c2c2;
	text-align: center;
	& > ul > li {
		font-size: 1.2rem;
		margin: 50px 0;
		cursor: pointer;
	}
	& > ul > li:hover {
		color: rgba(0, 0, 0, 0.4);
		text-decoration: underline;
	}
`;
const MainSection = styled.section`
	width: 100%;
	height: 100%;
	padding: 50px;
	display: flex;
	overflow: scroll;
	& > .image-box {
		width: 450px;
		margin-right: 50px;
	}
	& > .image-box > img {
		width: 450px;
	}
	& > .introduction-box {
		display: flex;
		font-size: 1.3rem;
	}
	& > .introduction-box .left-side {
		width: 300px;
		height: inherit;
	}
	& > .introduction-box > .left-side > ul > li {
		text-align: end;
		font-weight: bold;
		margin-right: 15px;
		margin-bottom: 15px;
	}
	& > .introduction-box > .right-side > ul:last-child li {
		margin-bottom: 15px;
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

function ArtistRouter() {
	let artistInfoKey = [];
	let artistInforValue = [];
	for (let i = 0; i < artistInfo.length; i++) {
		Object.keys(artistInfo[i]).forEach((key) => artistInfoKey.push(key));
	}
	for (let i = 0; i < artistInfo.length; i++) {
		Object.keys(artistInfo[i]).forEach((key) =>
			artistInforValue.push(artistInfo[i][key]),
		);
	}

	return (
		<>
			<ArtistsHeader>[시: 반] 아티스트</ArtistsHeader>
			<ArtistsWrapper>
				<SideNav>
					<ul>
						{artistInfo.map((item, index) => (
							<li key={index}> {item.이름} </li>
						))}
					</ul>
				</SideNav>
				<MainSection>
					<div className="image-box">
						{artistImages.map((item, index) => (
							<img src={item.src} alt="artist-profile" key={index} style={{}} />
						))}
					</div>
					<div className="introduction-box">
						<div className="left-side">
							<ul>
								{artistInfoKey.map((item, index) => (
									<li
										style={
											index === 5
												? { marginBottom: "160px" }
												: { marginBottom: "15px" }
										}
									>
										{" "}
										{item}{" "}
									</li>
								))}
							</ul>
						</div>
						<div className="right-side">
							<ul>
								{artistInforValue.map((item, index) => (
									<li key={index}>
										{index === 5 ? (
											artistInforValue[5].map((item, index) => (
												<li key={index}> {item} </li>
											))
										) : (
											<li> {item} </li>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</MainSection>
			</ArtistsWrapper>
		</>
	);
}

export default ArtistRouter;
