"use cliet";
import addToCart from "@/cartActions/addToCart";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/cartContext";
import React, { useContext } from "react";
import toast from "react-hot-toast";

export default function AddBtn({ id }: { id: string }) {
  const {numOfCart,setnumOfCart}=useContext(CartContext)
  async function checkAddProduct(id: string) {
    let res = await addToCart(id);
    console.log(res);
    if (res.status === "success") {
      toast.success("product added successfully");
      setnumOfCart(numOfCart+1)
    } else {
      toast.error(res.message);
    }
  }
  return <Button className="cursor-pointer w-full" onClick={() => checkAddProduct(id)}>add to cart</Button>;
}
