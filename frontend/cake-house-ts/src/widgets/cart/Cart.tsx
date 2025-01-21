import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { ProductType } from "../../shared/config/types";
import { Link } from "react-router-dom";
import { incrementProduct } from "../../domain/slices/CartSlice.ts";
import { useAppDispatch } from "../../app/stories/store.ts";
import "./_cart.scss";

export const Cart: React.FC = (props: ProductType) => {
	const dispatch = useAppDispatch();

	const addToCart = () => {
		const obj = {
			product: {
				...props,
			},
			count: 1,
			productPrice: props.price,
		};

		dispatch(incrementProduct(obj));
	};
	return (
		<div className="cart">
			<div className="container">
				<img
					src={require(`../../shared/icons/images/${props.image}`)}
					alt="product"
				/>
				<p className="name">{props.name}</p>
				<p className="price">{props.price}.00 руб.</p>
				<div className="cart__btn">
					<Link
						to={`/product/${props.id}`}
						type="button"
						className="btn"
					>
						Подробнее
					</Link>
					<div className="cart__cart" onClick={addToCart}>
						<IoCartSharp size={36} />
					</div>
				</div>
			</div>
		</div>
	);
};
