import type { Category } from "./category";

export interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
	images: string[];
	colors: string[];
	categoryId: number;
	slug: string;
	stock: number;
	active: boolean;
	color: string;
	description: string;
	category: Category;
}
