import React from "react";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { categories, category } from "../../../../shared/config/constants.ts";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../app/stories/store.ts";
import { getProducts, setSearch } from "../../../../domain/slices/filterSlice.ts";
import "./_filter.scss";


export const Filter: React.FC = () => {
	const dispatch = useAppDispatch();
	const searchValue = useSelector<RootState, string>(
		(state) => state.filter.searchValue
	);

	const totalPrice = useSelector<RootState, number>(
		(state) => state.cart.totalPrice
	);

	const updateSearch = React.useCallback(
		debounce((value) => {
			dispatch(setSearch(value));
		}, 400),
		[]
	);

	const onHandleChange = (e) => {
		const { value } = e.target;
		updateSearch(value);
	};


	return (
		<div className="filter">
			<div className="filter__search">
				<Link to={"/"} className="filter__search-logo">
					<img
						src={require("../../../../shared/icons/logo.png")}
						alt="logo"
					/>
				</Link>
				<span className="filter__search-number">+7(495)765-00-00</span>
				<div className="filter__search-search">
					<input
						type="text"
						className="filter__search-input"
						onChange={onHandleChange}
						placeholder="Что будем искать?"
					/>
					<IoSearchOutline size={24} />
				</div>

				<div className="filter__search-cart">
					<span>{totalPrice} руб.</span>

					<Link to="/cartitem">
						<IoCartSharp size={24} color="black" />
					</Link>
				</div>
			</div>
			<div className="filter__category">
				{category.map((item: string, index: number) => {
					return (
						<Link key={index} to={`categories/${categories[index]}`}>
							{item}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
