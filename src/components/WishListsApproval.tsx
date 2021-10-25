import React from "react";
import "./WishListsApproval.css";
import WishLists from "./WishLists";
import SideBar from "./SideBar";

function WishListsApproval() {
  return (
    <div className="container">
      <WishLists />
      <SideBar />
    </div>
  );
}

export default WishListsApproval;
