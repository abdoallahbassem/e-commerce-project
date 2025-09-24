
export default async function GetSpecificCategory(id:string) {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`,{
      method:"GET",
    })
    let payload = await res.json();
    return payload;
}
