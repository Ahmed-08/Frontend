import React from "react";
import { Header } from "../../widgets/index.ts";
import { Footer } from "../../widgets/index.ts";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
