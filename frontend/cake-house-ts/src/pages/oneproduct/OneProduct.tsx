import React from "react";
import { useParams } from "react-router-dom";
import { Counter } from "../../shared/components/counter/Counter.tsx";
import { ProductType } from "../../shared/config/types";
import { useAppDispatch } from "../../app/stories/store.ts";
import { incrementProduct } from "../../domain/slices/CartSlice.ts";
import "./oneproduct.scss";

export const OneProduct: React.FC = () => {
	const { id } = useParams();
	const [product, setProduct] = React.useState<ProductType>({});
	const [count, setCount] = React.useState<number, (n:number)=>void>(1);
    const dispatch = useAppDispatch();

	React.useEffect(() => {
		
		const abortController = new AbortController();
		const signal = abortController.signal;
		fetch(`http://localhost:8000/products/?id=${id}`, { signal })
			.then((res) => res.json())
			.then((data) => setProduct(...data))
			.catch((err) => console.log(err));

		return () => {
			return abortController.abort("abort");
		};
	}, [id]);

	if (!product.image) {
		return (
			<>
				<p>...загрузка</p>
			</>
		);
	}

    const addToCart = ()=>{
        const obj = {
			product: { ...product },
			count,
			productPrice: product.price * count
		};
        dispatch(incrementProduct(obj));
    }

	return (
		<div className="oneProduct">
			<div className="container">
				<h2 className="oneProduct__title">
					Чизкейк "Арахисовый кранч" 2 порц
				</h2>
				<div className="oneProduct__about">
					<div className="oneProduct__img">
						<img
							src={require(`../../shared/icons/images/${product.image}`)}
							className="imgSmall"
							alt="images"
						/>
						<img
							src={require(`../../shared/icons/images/${product.image}`)}
							className="imgBig"
							alt="images"
						/>
					</div>
					<div className="oneProduct__right">
						<h3>Краткое описание товара</h3>
						<p>
							Классический сливочно-сырный чизкейк Нью-Йорк на
							подложке из песочного шоколадного теста с начинкой
							из шоколадного ганаша и карамельного кранча. Сверху
							чизкейк украшен карамельным кранчем, арахисом и
							карамелью. Без розочки.
						</p>
						<hr />

						<div className="addToCart">
							<Counter count={count} setCount={setCount} />
							<button type="button" onClick={addToCart}>
								В корзину
							</button>
						</div>

						<h4 className="characteristic__title">
							Характеристики
						</h4>
						<p className="characteristic__item">
							<span className="left">Производитель</span>
							<span className="center"></span>
							<span className="right">
								{product.characteristic.Производитель}
							</span>
						</p>
						<p className="characteristic__item">
							<span className="left">Единица измерения</span>
							<span className="center"></span>
							<span className="right">
								{product.characteristic["Единица измерения"]}
							</span>
						</p>
					</div>
				</div>
				<div className="oneProduct__description">
					<h3>Описание товара</h3>
					<p>{product.fulldescription}</p>
					<div>
						Пищевая и энергетическая ценность на 100 г: <br />
						{product.contents.map((item, index) => {
							return <p key={index}>{item}</p>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
