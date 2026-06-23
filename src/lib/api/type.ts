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

export interface PropsForButton{
     name?: string;
    price?: number;
    imageUrl?: string;
    Url?:string;
    cost?:string
    iconLast?:string;
    label?: string;
    span?:string; 
    quantity?:number;
    onClick?: (event: MouseEvent) => void;
    onDelete?: (event: MouseEvent) => void;
}

export interface PropsForInput{
    label?:string,
    value?:string,
    checked?:boolean,
    placeholder?:string,
    required?:boolean,
    inputType?:'text' | "number" | "password" | 'checkbox'| 'email',
    text?:string
    className?:string
    iconLast?:string;
    iconFirst?:string;
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
       "id": string,
    "name": string,
    "slug": string,
    "description":  string,
    "imageUrl": null | string,
    "sortOrder": number,
    "createdAt": string,
    "updatedAt": string,
    "_count": {
      "products": number
    }
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

export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
