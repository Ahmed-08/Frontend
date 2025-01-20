import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const logo = require("../../shared/icons/logo.png");
export const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="logo">
							<img src={logo} alt="logo" className="logo__img" />
							<p>© 2025 Интернет-магазин тортов и десертов</p>
							<p>Политика конфиденциальности</p>
							<Link to="">
								Согласие на обработку персональных данных
							</Link>
							<p>
								Используя данный сайт, вы автоматически
								принимаете условия пользовательского соглашения
								и соглашаетесь с политикой конфиденциальности.
							</p>
						</div>
					</div>
					<div className="col">
						<h2 className="title">О магазине</h2>
						<Link>Главная</Link>
						<Link>Акции</Link>

						<Link>О компании</Link>

						<Link>Доставка и оплата</Link>

						<Link>Контакты</Link>

						<Link>Новости</Link>
					</div>

					<div className="col">
						<h2 className="title">Каталог</h2>

						<Link>Чизкейки</Link>

						<Link>Торты</Link>

						<Link>Пироженные</Link>

						<Link>Мороженное</Link>

						<Link>Круассаны</Link>
					</div>

					<div className="col">
						<h2 className="title">Свяжитесь с нами</h2>

						<Link>
							<address>Чебоксары, ул. Ленина 1, офис 12</address>
						</Link>

						<Link>E-mail: support@addshop.ru</Link>

						<Link>+7(495)765-00-00</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
