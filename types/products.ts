export interface Product{
    _id: string;
    title: string;
    price: number;
    description: string;
    dicountPercentage: number;
    imageUrl: string;
    productImage: {
      assest: {
        _ref: string;
      };
    };
    tags: string[];
}