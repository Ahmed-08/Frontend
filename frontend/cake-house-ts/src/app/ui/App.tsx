import React from "react";
import Root from "./Root.tsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home.tsx";
import { Register } from "../../pages/register/Register.tsx";
import { Login } from "../../pages/login/Login.tsx";
import { OneProduct } from "../../pages/oneproduct/OneProduct.tsx";
import { CartItem } from "../../shared/components/cartitem/CartItem.tsx";
import { Categories } from "../../pages/categories/Categories.tsx";
import { Mapsite } from "../../pages/mapsite/Mapsite.tsx";

function App(): React.FC {
	return (
		<Routes>
			<Route path="/" element={<Root />}>
				<Route path="" element={<Home />} />
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="product/:id" element={<OneProduct />} />
				<Route path="cartitem" element={<CartItem />} />
				<Route path="categories/:category" element={<Categories />} />
				<Route path="navigation/:page" element={<Mapsite />} />
			</Route>
		</Routes>
	);
}

export default App;
