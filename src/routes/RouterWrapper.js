import React from "react";
import styled from "styled-components";

function WrapperForRouter({ children, height }) {
	const RouterWrapper = styled.div`
		max-width: 1200px;
		margin: 0 auto 100px auto;
		height: ${height};
		display: flex;
	`;

	return <RouterWrapper> {children} </RouterWrapper>;
}

WrapperForRouter.defaultProps = {
	height: "600px",
};

export default WrapperForRouter;
