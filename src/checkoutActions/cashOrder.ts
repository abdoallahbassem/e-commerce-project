"use server";
import { CheckoutSchemaType } from "@/schema/checkout.schema";
import getMyToken from "@/utilites/getMyToken";

export default async function offlineCheckout(
  cartId: string,
  values: CheckoutSchemaType
) {
    let token = await getMyToken()
    if(!token){
     throw new Error("error")
    }
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
    {
      method: "POST",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddres: values }),
    }
  );
  let payload = await res.json();
  return payload;
}
