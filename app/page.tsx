import Image from "next/image";
import Mine from "./components/Mine";
import Newest from "./components/Newest";

export default function Home() {
  return (
   <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
   <Mine/>
   <Newest/>
   </div>
  );
}
