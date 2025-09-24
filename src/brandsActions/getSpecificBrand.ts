
export default async function getSpecificBrand(id:string) {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`,{
      method:"GET",
    })
    let payload = await res.json();
    return payload;
}
