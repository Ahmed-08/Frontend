import React from "react";
import { Cart } from "../../widgets/cart/Cart.tsx";
import { ProductType } from "../../shared/config/types.ts";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/stories/store.ts";
import { getProducts } from "../../domain/slices/filterSlice.ts";
import "./_home.scss";

export const Home = () => {
	const dispatch = useAppDispatch();
	const product = useSelector<RootState, ProductType[]>(
		(state) => state.filter.product
	);

	const searchValue = useSelector<RootState, string>(
		(state) => state.filter.searchValue
	);

	React.useEffect(() => {

		const abortController = new AbortController();
		const signal = abortController.signal;

		const params = {
			url: `http://localhost:8000/products/?q=${searchValue}`,
			signal,
		};

		dispatch(
			getProducts(params)
		);

		return ()=>{
			return abortController.abort('abort');
		}
	}, [searchValue]);

	return (
		<section className="home">
			<div className="container">
				<h2 className='home__title'>Популярные товары</h2>
				<div className="products">
					{product.map((item, index) => {
						return <Cart key={index} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
};
