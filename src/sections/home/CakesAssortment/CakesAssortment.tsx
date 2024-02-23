import Image from "next/image";

import { LinkButton } from "@/components/ui/LinkButton";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { convertImage, getBase64 } from "@/utils/helpers";

import data from "@/data/cakes-assortment.json";

export const CakesAssortment: React.FC = () => {
  const { heading, links, image } = data;
  return (
    <section className="section">
      <div className="container xl:flex items-center justify-between">
        <Image
          src={image.path}
          alt={image.alt}
          width={592}
          height={519}
          className="hidden xl:block w-[592] h-[519]"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${getBase64(
            convertImage(592, 519, "#fff8f2"),
          )}`}
          sizes="(min-width: 1280px) 592px"
          quality={100}
        />

        <div className="flex flex-col gap-6 md:gap-10 xl:w-[592px]">
          <SectionTitle
            text={heading}
            className="max-w-[400px] xl:max-w-[575px]"
          />

          <ul className="flex flex-col gap-3 md:gap-4">
            {links.map(({ slug, label, caption }) => (
              <li key={slug}>
                <LinkButton
                  label={label}
                  secondaryLabel={caption}
                  href={`/cakes/${slug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
