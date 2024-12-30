import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

async function getData(){

    const query = "*[_type=='myImage'][0]";

    const data = await client.fetch(query);

    return data;
}

export default async function Mine(){

    const data = await getData()

return (

    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
           <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Brand for clothes
          </h1>
          <p>
            We sell the best shirts and pants brand for all sizes.
          </p>

          </div>
          <div className="mb-12 flex w-full md:mb-15 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image src={urlFor(data.image1).url()}
            alt="gym photo"
            className="h-full w-full object-cover object-center"
            priority
            width={500}
            height={500}
            />
                  </div> 
                  
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <Image src={urlFor(data.image2).url()} 
                alt="gym photo" 
                className="h-full w-full object-cover object-center"
                width={500}
                height={500}
                priority
                />
                
              </div>

            </div>

        </div>

    </section>
  
);

}