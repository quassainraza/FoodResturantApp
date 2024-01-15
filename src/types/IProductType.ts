




export interface IProductType{
id?: number,
foodName?:string,
foodType?:string,
foodDesc?:string,
foodPrice?: string,
foodQuantity?: string,
foodImageUrl?:string

}


export interface CartContextType{
    cartItems: IProductType[];
    addToCart: (product: IProductType) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
  }