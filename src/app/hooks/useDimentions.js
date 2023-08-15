import React from "react";
const { useEffect, useState } = require("react");

const useDimensions = () => {
	const [dimension, setDimensions] = useState({ width: 0, height: 0 });

	const upDateDimensions = () => {
		const { innerWidth, innerHeight } = window;
		setDimensions({ width: innerWidth, height: innerHeight });
	};
	useEffect(() => {
		upDateDimensions();

		window.addEventListener("resize", upDateDimensions);

		return () => {
			window.removeEventListener("resize", upDateDimensions);
		};
	}, []);
};

export default useDimensions;
