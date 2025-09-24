export default async function getAllBrands() {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`,{
      method:"GET",
    })
    let payload = await res.json();
    return payload;
}
