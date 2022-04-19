import React, { Fragment } from "react";
import Acitvity from "../components/activiti";
import Artist from "../components/artists";
import Siban from "../components/siban";
import Location from "../components/location";

function Home() {
	return (
		<Fragment>
			<Siban />
			<Artist />
			<Acitvity />
			<Location />
		</Fragment>
	);
}

export default Home;
