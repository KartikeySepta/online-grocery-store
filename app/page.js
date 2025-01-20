import { Button } from "@/components/ui/button";
import { SlidersIcon } from "lucide-react";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobleApi from "./_utils/GlobleApi";


export default async function Home() {
  
  const sliderList = await GlobleApi.getSliders();
  return (
  <div className="p-10 px-16">

    <Slider sliderList={sliderList}/>

    </div>
  );
}
