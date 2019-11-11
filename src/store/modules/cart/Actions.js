export function AddToCart({ product }){
  return {
    type:'ADD_TO_CART',
    product,
  };
}

export function RemoveToCart(id){
  return {type: 'REMOVE_FROM_CART', id,}
}
