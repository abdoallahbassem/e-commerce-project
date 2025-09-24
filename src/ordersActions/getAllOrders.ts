
export  default async function getAllOrders(id:string) {
 let res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,{
    method:"GET",
 })
    let payload = await res.json()
    return payload;
}
