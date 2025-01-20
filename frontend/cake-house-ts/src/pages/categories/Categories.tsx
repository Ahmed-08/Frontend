import React from "react";
import { AsideFilter } from "../../shared/components/asidefilter/AsideFilter.tsx";
import { useParams } from "react-router-dom";
import { Cart } from "../../widgets/cart/Cart.tsx";
import { RootState, useAppDispatch } from "../../app/stories/store.ts";
import { useSelector } from "react-redux";
import { ProductType } from "../../shared/config/types.ts";
import { getProducts } from "../../domain/slices/filterSlice.ts";
import "./categories.scss";

export const Categories: React.FC = () => {
	const { category } = useParams();

	const dispatch = useAppDispatch();
	const error = useSelector<RootState, boolean>(state=>state.filter.error);
	const product = useSelector<RootState, ProductType[]>(
		(state) => state.filter.product
	);
	React.useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		
		dispatch(
			getProducts({
				url: `http://localhost:8000/products/?category=${category}`,
				signal
			})
		);

		return () => {
			return controller.abort("abort asidefilter");
		};
	}, [category]);

	if (error) return <h3>Что-то пошло не так!</h3>;

	return (
		<section className="cheesecake">
			<div className="container">
				<div className="left">
					<AsideFilter />
				</div>
				<div className="right">
					{product.map((item, index) => {
						return <Cart key={index} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
};
