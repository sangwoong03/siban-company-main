import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./style.css";

const GlobalStlye = createGlobalStyle`
  ${reset}
  * {
  box-sizing: boerder-box;
  }
  body{
    font-size: 14px;
    background-color: #ffffff;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
  }
`;

function App() {
	return (
		<>
			<GlobalStlye />
			<div> 안녕하세요 </div>
		</>
	);
}

export default App;
