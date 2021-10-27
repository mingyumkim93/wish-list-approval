import React, { useState } from "react";
import "./WishListItem.scss";
import WishList from "../types/WishList";
import ProductRow from "./ProductRow";
import CartPrice from "./CartPrice";

interface WishListProps {
  wishList: WishList;
}

function WishListItem({ wishList }: WishListProps) {
  const [open, setOpen] = useState(true);
  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <button className="list first-letter-capitalize" onClick={toggleOpen}>
        {wishList.userFirstName}
      </button>
      {open && (
        <div className="expanded-wish-list">
          {wishList.products.map((product) => (
            <ProductRow product={product} cartId={wishList.cartId} key={product.productDetail.id} />
          ))}
          <CartPrice wishList={wishList} />
        </div>
      )}
    </>
  );
}

export default WishListItem;
