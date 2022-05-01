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
	& > div:first-child {
		width: 450px;
		margin-right: 50px;
	}
	& > div:last-child {
		display: flex;
		font-size: 1.3rem;
	}
	& > div:last-child > ul:first-child li {
		text-align: end;
		font-weight: bold;
		margin-right: 15px;
		margin-bottom: 15px;
	}
	& > div:last-child > ul:last-child li {
		margin-bottom: 15px;
	}
`;

const artistInfo = [
	{
		이름: "최영광",
		나이: "27세 (만 25세)",
		이메일: "cyg110@naver.com",
		사는곳: "경기도 오산시",
		비전: "",
		출연작품: "",
		src: "",
	},
];
function ArtistRouter() {
	return (
		<>
			<ArtistsHeader>[시: 반] 아티스트</ArtistsHeader>
			<ArtistsWrapper>
				<SideNav>
					<ul>
						<li> 최영광 </li>
						<li> 신락훈 </li>
						<li> 홍윤화 </li>
						<li> 김만중 </li>
						<li> 정재헌 </li>
						<li> 윤수영 </li>
					</ul>
				</SideNav>
				<MainSection>
					{/* 슬라이드 들어가야 됨 */}
					<div>
						<img src="../assets/younggwang_main.jpg" alt="사진" />
					</div>
					<div>
						<ul>
							<li> 이름: </li>
							<li> 나이: </li>
							<li> 사는곳: </li>
							<li> 이메일: </li>
							<li> 작품활동 </li>
							<li> [연극] </li>
							<li style={{ marginTop: "159px" }}> [뮤지컬] </li>
							<li> [단편영화] </li>
							<li> [M/V] </li>
						</ul>
						<ul>
							<li> 최영광 </li>
							<li> 27세 (만 25세) </li>
							<li> 경기도 오산시 </li>
							<li> cyg110@naver.com </li>
							<li> &nbsp; </li>
							<li> 그대 내 곁에 - 김차사 역</li>
							<li> 더 앵글러 - 최진서 역 </li>
							<li> 마리보의 연인들 - 블레즈 역</li>
							<li> 문 - 김과장 역</li>
							<li> 창고에서 - 덕배 역</li>
							<li> 난리부르스 - 수혁 역 </li>
							<li> 새로고침 - 우진 역 </li>
							<li> 끝맺음(prod.임석원) </li>
						</ul>
					</div>
				</MainSection>
			</ArtistsWrapper>
		</>
	);
}

export default ArtistRouter;
