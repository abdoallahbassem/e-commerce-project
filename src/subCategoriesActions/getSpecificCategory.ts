
export default async function getSpecificCategory(id: string) {
let res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
let payload = await res.json()
return payload;
}
