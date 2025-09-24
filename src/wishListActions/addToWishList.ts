
"use server";
import getMyToken from "@/utilites/getMyToken";

export default async function addToWishList(id:string) {
    let token = await getMyToken()
    if(!token){
     throw new Error("error")
    }
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      method: "POST",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: id }),
    }
  );
  let payload = await res.json();
  return payload;
}
