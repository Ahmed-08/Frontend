import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../app/stories/store.ts";
import { CartProductType } from "../../config/types";
import { IoCloseOutline } from "react-icons/io5";
import {
	decrementProduct,
	deleteProduct,
	incrementProduct,
} from "../../../domain/slices/CartSlice.ts";
import "./cartitem.scss";

export const CartItem: React.FC = () => {
	const dispatch = useAppDispatch();
	const items = useSelector<RootState, CartProductType[]>(
		(state) => state.cart.items
	);

	const totalPrice = useSelector<RootState, number>(
		(state) => state.cart.totalPrice
	);

	const incrementCount = (item) => {
		dispatch(incrementProduct(item));
	};
	const decrement = (item) => {
		if (item.count > 1) dispatch(decrementProduct(item));
	};

	const deleteItem = (item) => {
		dispatch(deleteProduct(item));
	};

	return (
		<div className="cartItem">
			<h2 className="cartItem__title">Корзина</h2>

			{items.map((item, index) => {
				return (
					<div className="row" key={index}>
						<div
							className="cartItem__delete"
							onClick={() => deleteItem(item)}
						>
							<IoCloseOutline size={24} color="red" />
						</div>
						<div className="col col-1">
							<h3>Наименование товара</h3>
							<div className="col__body">
								<img
									src={require("../../icons/images/" +
										`${item.product.image}`)}
									alt="images"
								/>
								<div className="text">
									<h4>{item.product.name}</h4>
									<p>Код товара {item.product.id}</p>
								</div>
							</div>
						</div>
						<div className="col col-2">
							<h4>Цена</h4>
							<p>{item.product.price}</p>
						</div>
						<div className="col col-3">
							<h4>Количество</h4>
							<div className="counter">
								<button
									type="button"
									className="counter__btn"
									onClick={() => decrement(item)}
								>
									-
								</button>
								<span className="count">{item.count}</span>
								<button
									type="button"
									className="counter__btn"
									onClick={() => incrementCount(item)}
								>
									+
								</button>
							</div>
						</div>
						<div className="col col-4">
							<h4>Стоимость</h4>
							{item.productPrice}
						</div>
					</div>
				);
			})}

			{items.length > 0 ? (
				<div className="totalPrice">
					<h4>Итоговая сумма: {totalPrice}.00 руб.</h4>
					<button type="button">Оформить заказ</button>
				</div>
			) : (
				<p className="empty">Товаров нет</p>
			)}
		</div>
	);
};
