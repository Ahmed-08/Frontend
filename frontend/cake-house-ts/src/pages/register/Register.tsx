import React from "react";
import { useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../app/stories/store.ts";
import { request } from "../../domain/slices/accessSlice.ts";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserType } from "../../shared/config/types.ts";
import "./register.scss";


export const Register: React.FC = () => {
	const navigate = useNavigate();
	const user = useSelector<RootState, UserType>((state) => state.access.user);

	const dispatch = useAppDispatch();
	const actionSubmit = (data) => {
		dispatch(
			request({
				url: "http://localhost:8000/register",
				data,
			})
		);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	React.useEffect(() => {
		if (user.email !== "") navigate("/");
	}, [user]);

	return (
		<section className="register">
			<div className="container">
				<form action={handleSubmit(actionSubmit)} className="form">
					<p>
						<Link to="/">Главная</Link> / Регистрация
					</p>
					<h2 className="form__title">Регистрация</h2>
					<label htmlFor="email">
						<input
							type="email"
							id="email"
							{...register("email", {
								required: {
									message: "email обязателен для регстрации",
									value: true,
								},
							})}
							style={
								errors.email && {
									boxShadow: "0px 0 3px 3px red",
								}
							}
							placeholder="email"
						/>
					</label>

					<label htmlFor="number">
						<input
							type="text"
							id="number"
							{...register("number", {
								required: {
									message: "это обязательное поле ввода",
									value: true,
								},
							})}
							style={
								errors.number && {
									boxShadow: "0px 0 3px 3px red",
								}
							}
							placeholder="телефон"
						/>
					</label>

					<label htmlFor="password">
						<input
							type="password"
							id="password"
							{...register("password", {
								required: {
									message: "это обязательное поле ввода",
									value: true,
								},
							})}
							style={
								errors.password && {
									boxShadow: "0px 0 3px 3px red",
								}
							}
							placeholder="пароль"
						/>
					</label>

					<input
						type="submit"
						className="register__btn"
						value="Зарегистрировать"
					/>
				</form>

				<div className="register__about">
					<h2 className="title">Зачем нужна регистрация?</h2>
					<p>
						Зарегистрировавшись на сайте, Вы сможете получить личный
						кабинет, что позволит Вам отслеживать историю заказов,
						быстрее оформлять заказы в нашем Интернет магазине. Вся
						информация о Вас будет доступна в любое время, и ее не
						нужно будет вводить повторно.
					</p>
				</div>
			</div>
		</section>
	);
};
