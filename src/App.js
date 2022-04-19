import React from "react";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./style.css";
import Header from "./components/header";
import Siban from "./components/siban";
import SibanRouter from "./routes/sibanRouter";
import ActivityRouter from "./routes/activityRouter";
import ArtistRouter from "./routes/artistRouter";
import ConnectionRouter from "./routes/connectionRouter";
import BoardRouter from "./routes/boardRouter";
import Home from "./home/home";
import Footer from "./components/footer";

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
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/siban" element={<SibanRouter />} />
				<Route path="/activity" element={<ActivityRouter />} />
				<Route path="/artists" element={<ArtistRouter />} />
				<Route path="/connection" element={<ConnectionRouter />} />
				<Route path="/board" element={<BoardRouter />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
