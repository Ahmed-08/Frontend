import React from "react";
import { useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../app/stories/store.ts";
import { request } from "../../domain/slices/accessSlice.ts";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserType } from "../../shared/config/types.ts";
import "./login.scss";


export const Login = () => {
	const navigate = useNavigate();
	const user = useSelector<RootState, UserType>((state) => state.access.user);

	const dispatch = useAppDispatch();
	const actionSubmit = (data) => {
		dispatch(
			request({
				url: "http://localhost:8000/login",
				data,
			})
		);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

    React.useEffect(()=>{
        if (user.email !== '') navigate("/");
    }, [user]);

	return (
		<section className="login">
			<div className="container">
				<form action={handleSubmit(actionSubmit)} className="form">
					<p>
						<Link to="/">Главная</Link> / Вход
					</p>
					<h2 className="form__title">Вход</h2>
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

					<input type="submit" className="login__btn" value="Войти" />
				</form>

				<div className="login__about">
					<h2 className="title">Я – новый покупатель</h2>
					<p>
						Регистрация на сайте позволит быстро оформлять заказы,
						управлять заказами через личный кабинет, в полном объеме
						использовать возможности нашего интернет магазина.
					</p>
				</div>
			</div>
		</section>
	);
};
