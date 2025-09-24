"use server"
export default async function relatedProducts(id:string) {

    let res =  await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`)
    let payload = await res.json();
    return payload;
}
