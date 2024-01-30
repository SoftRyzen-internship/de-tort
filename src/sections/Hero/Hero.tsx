import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-color-bg-hero py-[90px]">
      <div className="pl-5">
        <div className="relative mx-auto size-[81vw]">
          <Image
            src="/images/tort-whole-@x2.webp"
            alt="whole tort"
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
      </div>

      <div className="container">
        <SectionTitle
          hero
          text="Онлайн-кондитерська"
          className="max-w-[694px]"
        />
        <p>
          Спеціалізується на виробництві тортиків та інших смаколиків по
          індивідуальним замовленням!
        </p>
        <Link href="/" className="bg-red-100 p-4 w-fit block">
          Каталог тортів
        </Link>
      </div>
    </section>
  );
};
