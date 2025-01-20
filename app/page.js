import { Button } from "@/components/ui/button";
import { SlidersIcon } from "lucide-react";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobleApi from "./_utils/GlobleApi";
import CategoryList from "./_components/CategoryList";


export default async function Home() {
  
  const sliderList = await GlobleApi.getSliders();

  const categoryList = await GlobleApi.getCategoryList();

  return (
  <div className="p-10  px-16">
    {/* Sliders */}
    <Slider sliderList={sliderList}/>
    {/* Category List */}
    <CategoryList categoryList={categoryList} />
    </div>
  );
}
