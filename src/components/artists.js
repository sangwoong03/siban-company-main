import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SlideBtn from "./button/slideBtn";

const HomeArtist = styled.section`
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
	& > p {
		color: #333;
	}
`;
const ArtistBox = styled.div`
	max-width: 960px;
	height: 100%;
	margin: 0 auto;
	position: relative;
`;
const ProfileWrapper = styled.div`
	max-width: 100%;
	height: 100%;
	margin-top: 50px;
	overflow: hidden;
`;
const ProfileSlide = styled.ul`
	width: 1980px;
	position: abosolute;
	top: 0;
	left: 320px;
	display: flex;
	align-items: center;
	transition: 0.7s ease;
`;
const ProfileTiles = styled.li`
	width: 300px;
	height: 360px;
	& > div,
	img {
		width: 100%;
		height: 100%;
	}
	& > div > img {
		background-size: cover;
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

const artistProfile = [
	{
		name: "최영광",
		src: "../assets/younggwang_main.jpg",
		instaAc: "c.glory",
	},
	{
		name: "신락훈",
		src: "../assets/rakoon_main.jpg",
		instaAc: "raccoonee_",
	},
	{
		name: "김만중",
		src: "../assets/manjoong_main.jpg",
		instaAc: "joong_oong",
	},
	{
		name: "홍윤화",
		src: "../assets/yunhwa_main.jpg",
		instaAc: "yoonhwa_h",
	},
	{
		name: "정재헌",
		src: "../assets/jaehun_main.jpg",
		instaAc: "jung_jh9407",
	},
	{
		name: "윤수영",
		src: "../assets/suyoung_main.jpg",
		instaAc: "swimee",
	},
];

function Artist() {
	function slideBtn(e) {
		const id = e.target.id;
		const ul = document.querySelector(".slide--wrapper");

		if (id === "left-btn") {
			ul.style.transform = `translateX(0)`;
		} else if (id === "right-btn") {
			ul.style.transform = `translateX(-960px)`;
		}
	}
	return (
		<HomeArtist>
			<Inner>
				<TitleBox>
					<h1> [시:반] 아티스트 </h1>
					<p>
						<Link to="/artists">자세히 보기</Link>
					</p>
				</TitleBox>
				<ArtistBox>
					<ProfileWrapper>
						<ProfileSlide className="slide--wrapper">
							{artistProfile.map((item, index) => (
								<ProfileTiles key={index}>
									<div>
										<img src={item.src} alt={item.name} />
										<p> {item.name} </p>
										<a
											href={`{https://instagram.com/${item.instaAc}_?utm_medium=copy_link}`}
										>
											@{item.instaAc}
										</a>
									</div>
								</ProfileTiles>
							))}
						</ProfileSlide>
					</ProfileWrapper>
				</ArtistBox>
				<SlideBtn
					onClick={slideBtn}
					// (e) => {
					// if (e.target.id === "left-btn") {
					// 	const ul = document.querySelector(".slide--wrapper");
					// 	for (let i = 1; i <= artistProfile.length - 3; i++) {
					// 		ul.style.transform = `translateX(-320px)`; // 여기서 봐야됨
					// 	}
					// } else if (e.target.id === "right-btn") {
					// 	console.log("right");
					// }
				/>
			</Inner>
		</HomeArtist>
	);
}

export default Artist;
