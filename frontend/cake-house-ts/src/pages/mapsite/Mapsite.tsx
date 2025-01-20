import React from "react";
import { useParams } from "react-router-dom";

export const Mapsite: React.FC = () => {
	const { page } = useParams();

	if (page === "О компании") {
		return <div className="about">
			<h2>{page}</h2>
			<p>Наша компания работает с 2010 года</p>
			<p>
				При производстве используются только качественные материалы
				фабричного производства.
			</p>
			<ul>
				<p>Преимущества нашей компании:</p>
				<li>доступные цены;</li>
				<li>
					качественная одежда, отвечающая самым высоким требованиям;
				</li>
				<li>постоянно обновляющийся ассортимент;</li>
				<li>широкий размерный ряд;</li>
				<li>удобные способы оплаты;</li>
				<li>доставка по РФ</li>
			</ul>
		</div>;
	}
	return (
		<section className="mapsite">
			<div className="container">
				<p>{page}</p>
			</div>
		</section>
	);
};
