
export default async function getAllCategories() {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`,{
      method:"GET",
    })
    let payload = await res.json();
    return payload;
}
