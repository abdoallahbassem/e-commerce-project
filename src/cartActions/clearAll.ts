import getMyToken from "@/utilites/getMyToken";

export default async function clearAll() {
    let token =  await getMyToken();
    if (!token) throw new Error("error");
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
      method:"DELETE",
      headers:{
          token ,
          "Content-Type": "application/json",
      }
    })
    let payload = await res.json();
    return payload;
}
