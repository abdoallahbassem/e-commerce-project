"use server"
import getMyToken from "@/utilites/getMyToken"

export default async function deleteItem(id:string){
   let token = await getMyToken()
   if(!token){
    throw new Error("error")
   }
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        method: "DELETE",
      headers:{
        token,
        "Content-Type": "application/json",
      }
    })
    let payload = res.json();
    return payload;
  }