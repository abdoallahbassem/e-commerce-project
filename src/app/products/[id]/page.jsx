import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import AddBtn from './../../_components/addBtn/AddBtn';
import ProductDetails from '../../_components/details/page';
import relatedProducts from "@/productCategActions/relatedProducts";
import RelatedProducts from '../../_components/relatedProducts/page';
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default async function page({params}) {
    let {id} = await params
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    let {data} = await res.json();
    console.log(data);
    if(!data) return <div>no products to show!</div>

    let related = await relatedProducts(data.category._id);
    console.log(related);
    
    
  return (
    <>
    <ProductDetails data={data} />
    <RelatedProducts data = {related.data}/>
    </>
  )
}
