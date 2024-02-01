import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";

export default async function Home() {
  return (
    <>
      <section className="pt-[88px] md:pt-[160px] xl:pt-[204px] bg-color-bg-hero text-center">
        <h1>Home Page - hero section</h1>
      </section>
      {/* секція тут просто як обгортка, аби поглянути на слайдер */}

      <Slider section="advantages" />
      <SliderNav section="advantages" />
    </>
  );
}
