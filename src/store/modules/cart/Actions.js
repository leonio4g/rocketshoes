export function AddToCartRequest(id){
  return {
    type:'@Cart/ADD_REQUEST',
    id,
  };
}
export function AddToCartSuccess(product){
  return {
    type:'@Cart/ADD_SUCCESS',
    product,
  };
}
export function RemoveFromCart(id){
  return {type: '@Cart/REMOVE', id,}
}

export function updateAmount(id, amount){
  return {
    type: '@Cart/UPDATE_AMOUNT',
    id,
    amount,
  }
}
