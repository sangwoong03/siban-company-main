import React, { useState } from "react";
import styled from "styled-components";
import ActivityMainSection from "./activity/activityMainSection";
import ActivityVideoSection from "./activity/activityVideoSection";
import ActivityLessonSection from "./activity/activityLessonSection";
import ActivityDailySection from "./activity/activityDailySection";

const ActivityHeader = styled.header`
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

const ActivityWrapper = styled.div`
	width: 1200px;
	margin: 0 auto 100px auto;
	display: flex;
`;

const SideNav = styled.div`
	width: 200px;
	height: auto;
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
function ActivityRouter() {
	const [renderSection, setRenderSection] = useState(<ActivityMainSection />);
	const [subTitle, setSubTitle] = useState("공연");
	const ActivityNavList = ["공연", "영상", "레슨", "일상"];
	const sectionList = [
		<ActivityMainSection />,
		<ActivityVideoSection />,
		<ActivityLessonSection />,
		<ActivityDailySection />,
	];

	const changeRender = (e) => {
		const listId = parseInt(e.target.id);

		for (let i = 0; i < ActivityNavList.length; i++) {
			if (listId === i) {
				setRenderSection(sectionList[i]);
				setSubTitle(ActivityNavList[i]);
			}
		}
	};
	return (
		<>
			<ActivityHeader>[시: 반] 일 상 - {subTitle} </ActivityHeader>

			<ActivityWrapper>
				<SideNav>
					<ul>
						{ActivityNavList.map((item, index) => (
							<li key={index} id={index} onClick={changeRender}>
								{item}
							</li>
						))}
					</ul>
				</SideNav>
				{renderSection}
			</ActivityWrapper>
		</>
	);
}

export default ActivityRouter;
