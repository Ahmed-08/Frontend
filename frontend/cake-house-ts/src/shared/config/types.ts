export type ProductType = {
	id?: number;
	category?: string;
	name: string;
	image: string;
	price: number;
	description?: string;
	fulldescription?: string;
	about?: { country: string; period: string; method: string };
	contents?: [];
	characteristic?: {
		Производитель?: string;
		"Единица измерения"?: "шт";
		Материал?: "Материал 5";
		"Технология изготовления"?: "Handmade";
	};
};

export type UserType = {
	name: string;
	email: string;
	password: string;
};

export type CartProductType = {
	product: ProductType;
	count: number;
	productPrice: number;
};