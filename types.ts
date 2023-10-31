export interface ProductCategories extends Array<string> {}

export interface Product {
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

  export interface ProductResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
  }

  export interface SingleProduct {
    product: Product;
  }
  
 export interface ProductData {
    products: Product[];
  }

export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
  };

  export type Tab = {
    id: string;
    label: string;
    content: React.ReactNode;
  };