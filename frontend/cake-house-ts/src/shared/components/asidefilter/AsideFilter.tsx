import React from "react";
import "./asidefilter.scss";
import { InputCheckbox } from "../inputcheckbox/InputCheckbox.tsx";

const arr: Object[] = [
	{ "Цена руб.": "Товары на заказ" },
	{ Производитель: "Товары на заказ" },
	{ Материал: "Материал 5" },
	{ "Технология изготовления": "Handmade" },
];

export const AsideFilter: React.FC = () => {
	return (
		<aside className="asidefilter">
			<form className="asidefilter__form">
				<p className="asidefilter__title">Фильтр по параметрам</p>
				{arr.map((item, index) => {
					const [result] = Object.entries(item);
					return (
						<div key={index}>
							<InputCheckbox text={result[0]} value={result[1]} />
						</div>
					);
				})}
			</form>
		</aside>
	);
};
