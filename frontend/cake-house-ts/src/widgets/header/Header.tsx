import React from "react";
import { Navigation } from "./ui/navigation/Navigation.tsx";
import { Filter } from "./ui/filter/Filter.tsx";
import "./_header.scss";

export const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="container">
				<Navigation />
				<Filter />
			</div>
		</header>
	);
};
