import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export interface Category {
	id: string;
	name: string;
	slug: string;
	description?: string;
	imageUrl?: string | null;
	sortOrder: number;
	createdAt: string;
	updatedAt: string;
}

export interface PropsForCard {
	name?: string;
	price?: number;
	imageUrl?: string;
	Url?: Component<SVGAttributes<SVGElement>> | string;
	cost?: string;
	iconFirst?: Component<SVGAttributes<SVGElement>> | string;
	iconLast?: Component<SVGAttributes<SVGElement>> | string;
	label?: string;
	span?: string;
	quantity?: number;
	class?: string;
	onClick?: (event: MouseEvent) => void;
	onDelete?: (event: MouseEvent) => void;
}

export interface PropsForInput {
	label?: string;
	value?: string;
	checked?: boolean;
	placeholder?: string;
	required?: boolean;
	inputType?: 'text' | 'number' | 'password' | 'checkbox' | 'email' | 'range';
	text?: string;
	className?: string;
	iconLast?: Component<SVGAttributes<SVGElement>> | string;
	iconFirst?: Component<SVGAttributes<SVGElement>> | string;
}

export interface Product {
	id: string;
	name: string;
	slug: string;
	description: string;
	price: number;
	imageUrl: string;
	gallery: string[];
	sizes: Sizes;
	color: string;
	stock: number;
	isFeatured: boolean;
	isActive: boolean;
	categoryId: string;
	category?: Category;
	createdAt: string;
	updatedAt: string;
}

export interface Categories {
	id: string;
	name: string;
	slug: string;
	description: string;
	imageUrl: null | string;
	sortOrder: number;
	createdAt: string;
	updatedAt: string;
	_count: {
		products: number;
	};
}

export interface CartItem {
	id: string;
	productId: string;
	size: Sizes;
	quantity: number;
	product: Product;
	createdAt: string;
	updatedAt: string;
}

export interface CartResponse {
	items: CartItem[];
}

export interface ProductsResponse {
	items: Product[];
	meta: {
		total: number;
		page: number;
		limit: number;
		totalPages: number;
	};
}
export type User = {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	phone: string;
	role: string;
	createdAt: string;
	updatedAt: string;
};
export type LoginResponse = {
	accessToken: string;
	tokenType: string;
	role: string;
	user: User;
};

export type loginBody = {
	email: string;
	password: string;
};

export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
