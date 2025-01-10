import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    image,
    "slug": slug.current,
    "categoryName": category->name
  }`;

  const data = await client.fetch(query, { slug }); // Use Sanity query parameters for safety
  return data;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const data: fullProduct | null = await getData(params.slug); // Handle cases where data might be null

  if (!data) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <p className="text-center text-gray-500">Product not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery image={data.image} /> 
          <div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-gray-500 mt-2">{data.categoryName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
