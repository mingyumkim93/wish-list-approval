import WishList from "types/WishList";

export enum WishListsActionType {
  SET = "set",
  INCREASE = "increase",
  DECREASE = "decrease"
}

export interface WishListsAction {
  type: WishListsActionType;
  payload: {
    cartId?: number;
    productId?: number;
    wishLists?: WishList[];
  };
}

function changeQuantityByOne(wishLists: WishList[], action: WishListsAction) {
  return wishLists.map((wishList) => {
    if (wishList.cartId !== action.payload.cartId) return wishList;
    else {
      return {
        ...wishList,
        products: wishList.products.map((product) => {
          if (product.productDetail.id !== action.payload.productId) return product;
          else
            return {
              ...product,
              approvedAmount:
                action.type === WishListsActionType.INCREASE ? product.approvedAmount + 1 : product.approvedAmount - 1
            };
        })
      };
    }
  });
}

export const wishListsReducer: React.Reducer<WishList[], WishListsAction> = (state, action) => {
  switch (action.type) {
    case WishListsActionType.SET:
      return action.payload.wishLists ? action.payload.wishLists : state;
    case WishListsActionType.INCREASE: {
      return changeQuantityByOne(state, action);
    }
    case WishListsActionType.DECREASE:
      return changeQuantityByOne(state, action);
    default:
      return state;
  }
};
