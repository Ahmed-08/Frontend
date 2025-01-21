import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import "./inputcheckbox.scss";

export const InputCheckbox = ({ text, value }: { text: string; value: string }) => {
	const [open, setOpen] = React.useState(false);
	return (
		<div className="item" onClick={() => setOpen(!open)}>
			<p>{text}</p>
			<div
				className="item-inner"
				style={open ? { display: "block" } : { display: "none" }}
			>
				<input type="checkbox" />
				<span>{value}</span>
			</div>
		</div>
	);
};
