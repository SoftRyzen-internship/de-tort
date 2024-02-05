import { Slider } from "@/components/base/Slider";
import { SliderNav } from "@/components/base/SliderNav";
import { Hero } from "@/sections/Hero";
import { Contacts } from "@/sections/Contacts";
import { About } from "@/sections/About";
import { Sweets } from "@/sections/Sweets";
import { QA } from "@/sections/QA";

import { ReviewCard } from "@/components/ui/ReviewCard";

const defaultSlides = [
  <ReviewCard
    date="12.12.12"
    author="Супер"
    text="lorem ipsum lorem ipsum "
    key={1}
  />,
  <ReviewCard
    date="12.12.12"
    author="Супер"
    text="lorem ipsum lorem ipsum "
    key={2}
  />,
  <ReviewCard
    date="12.12.12"
    author="Супер"
    text="lorem ipsum lorem ipsum "
    key={3}
  />,
  <ReviewCard
    date="12.12.12"
    author="Супер"
    text="lorem ipsum lorem ipsum "
    key={4}
  />,
];

export default async function Home() {
  return (
    <>
      <Slider slides={defaultSlides} section="top" />
      <SliderNav section="top" />

      <Hero />
      <Sweets />
      <About />
      <QA />
      <Contacts />
    </>
  );
}
