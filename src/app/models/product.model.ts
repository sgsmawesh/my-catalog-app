export interface ProductModel {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ProductResponseModel{
    limit:number;
    skip:number;
    total:number;
    products: ProductModel[];
}