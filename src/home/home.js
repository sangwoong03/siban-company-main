import React, { Fragment } from "react";
import Acitvity from "../components/activiti";
import Artist from "../components/artists";
import Siban from "../components/siban";
import Location from "../components/location";
import Intro from "../components/introduce";
import SideButton from "../components/button/sideBtn";

function Home() {
	return (
		<Fragment>
			<Siban />
			<Artist />
			<Acitvity />
			<Intro />
			<Location />
			<SideButton />
		</Fragment>
	);
}

export default Home;
