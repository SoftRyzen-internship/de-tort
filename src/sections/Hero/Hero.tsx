import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-color-bg-hero py-[90px] md:py-[160px] md:relative">
      <div className="smOnly:pl-5 md:absolute md:bottom-0 md:right-0">
        <div className="relative mx-auto size-[81vw] md:w-[449px] md:h-[446px]">
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
          className="max-w-[694px] mb-4"
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
