
interface dataType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating:{
        rate: number;
        count: number;
    }
}

interface cartType extends dataType {
    quantity: number;
}
export type {cartType};

export default dataType;