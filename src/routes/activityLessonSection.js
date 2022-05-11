import React from "react";
import styled from "styled-components";

const MainSection = styled.section`
	width: 1200px;
`;
const TextWrapper = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	margin-top: 100px;
`;
function ActivityLessonSection() {
	return (
		<>
			<MainSection>
				<TextWrapper>
					다양한 [연기 연습 및 레슨] 모습으로 찾아뵙겠습니다.
				</TextWrapper>
			</MainSection>
		</>
	);
}

export default ActivityLessonSection;
