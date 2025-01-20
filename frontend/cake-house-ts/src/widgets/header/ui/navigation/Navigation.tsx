import React from "react";
import { navigationLinks } from "../../../../shared/config/constants.ts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../app/stories/store.ts";
import { CgProfile } from "react-icons/cg";
import { setUser } from "../../../../domain/slices/accessSlice.ts";
import { UserType } from "../../../../shared/config/types.ts";
import "./_navigation.scss";

export const Navigation: React.FC = () => {
	const user = useSelector<RootState, UserType>((state) => state.access.user);
	const dispatch = useAppDispatch();
	const [auth, setAuth] = React.useState<boolean>(false);

	const switchAuth = (e: React.MouseEvent) => {
		if (e.target.parentNode.className !== "navigation__access") {
			setAuth(false);
		} else {
			setAuth(true);
		}
	};

	React.useEffect(() => {
		if (localStorage.getItem("user") !== null) {
			dispatch(setUser(JSON.parse(localStorage.getItem("user")!)));
		}
	}, []);

	React.useEffect(() => {
		document.body.addEventListener("click", switchAuth);
		return () => document.body.removeEventListener("click", switchAuth);
	}, []);

	return (
		<div className="navigation">
			<nav className="navigation__links">
				{navigationLinks.map((item: string, index: number) => {
					return (
						<Link key={index} to={`navigation/${item}`}>
							{item}
						</Link>
					);
				})}
			</nav>

			<div className="navigation__access">
				{user.email !== "" ? (
					<>
						<span
							onClick={() => {
								localStorage.clear();
								dispatch(
									setUser({
										email: "",
										name: "",
										password: "",
									})
								);
							}}
						>
							Выйти
						</span>
						<div className="access__icon">
							<CgProfile />
						</div>
					</>
				) : (
					<>
						<span>Авторизация</span>
						<div className="access__icon">
							<img
								src={require("./../../../../shared/icons/profile.png")}
								alt="authorization"
							/>
						</div>
					</>
				)}

				{auth && (
					<div className="accessTo">
						<Link to={"/login"}>Вход</Link>
						<Link to={"/register"}>Регистрация</Link>
					</div>
				)}
			</div>

			<div className="navigation__favourite">
				<span>Избранное</span>
				<img
					src={require("./../../../../shared/icons/love.png")}
					alt="favourite"
				/>
			</div>
		</div>
	);
};
