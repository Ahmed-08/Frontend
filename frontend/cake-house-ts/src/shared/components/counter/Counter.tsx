import React from "react";
import './counter.scss';

export const Counter: React.FC = ({
	count,
	setCount,
}: {
	count: number;
	setCount: (n: number) => void;
}) => {
	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div className="counter">
			<button type="button" className="counter__btn" onClick={decrement}>
				-
			</button>
			<span className="count">{count}</span>
			<button type="button" className="counter__btn" onClick={increment}>
				+
			</button>
		</div>
	);
};
