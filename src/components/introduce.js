import React from "react";
import styled from "styled-components";

const IntroBox = styled.section`
	padding: 100px 0 150px 0;
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
	& > p:hover a {
		color: #cc0000;
		font-weight: bold;
	}
`;
const VideoBox = styled.div`
	max-width: 860px;
	margin: 50px auto;
`;
const VideoRatio = styled.div`
	height: 0;
	padding-top: 56.25%;
	position: relative;
	& > iframe {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
`;
function Intro() {
	return (
		<IntroBox>
			<Inner>
				<TitleBox>
					<h1> [시:반] 일상 공유 </h1>
					<p>
						<a
							href="https://www.youtube.com/channel/UCLXAm23QnEYE_WNyjUK3qyQ/featured"
							target="_blank"
							rel="noreferrer"
						>
							Youtube
						</a>
					</p>
				</TitleBox>
				<VideoBox>
					<VideoRatio>
						<iframe
							title="Siban Youtube"
							width="640"
							hegiht="360"
							src="https://www.youtube.com/embed/qrNDKumU_tI"
							frameBorder="0"
						></iframe>
					</VideoRatio>
				</VideoBox>
			</Inner>
		</IntroBox>
	);
}

export default Intro;
