import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";

async function getData(){

    const query = `*[_type == "product"][0...3] | order(_createdAt desc) {
  _id,
  name,
    "slug": slug.current,
    "categoryName":category->name,
    "imagesUrl":image[0].asset->url
}`;

const data = await client.fetch(query);

return data; 
}


export default async function Newest(){

const data:simplifiedProduct[] = await getData();

return (
<div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Newest items</h2>
          
         <Link className="text-primary flex items-center gap-x-1" href="/all"> See All <span> RightArrow</span> </Link>

        </div>

    </div>


</div>

)

}