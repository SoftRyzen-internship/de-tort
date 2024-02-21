import Markdown from "markdown-to-jsx";

import { OfferProps } from "./types";

export const PublicOffer: React.FC<OfferProps> = ({ data }) => {
  const styles = "prose ";

  const strong =
    "prose-h1:text-color-accent-primary prose-strong:font-bold prose-strong:md:tracking-base";

  const title =
    "prose-h1:mb-7 prose-h1:md:mb-9 prose-h1:text-center prose-h1:leading-base prose-h1:text-[28px] prose-h1:md:text-[40px] prose-h1:xl:text-[48px] prose-h1:xl:tracking-normal prose-h1:uppercase";

  const subtitle =
    "prose-h2:mb-4 prose-h2:mt-7 prose-h2:md:mt-9 prose-h2:text-xl prose-h2:text-xl prose-h2:leading-normal prose-h2:text-color-text-secondary prose-h2:font-fixel prose-h2:font-semibold prose-h2:md:text-[24px]";

  const paragrapgh =
    "prose-p:font-fixel prose-p:text-base prose-p:leading-normal prose-p:text-color-text-secondary prose-p:md:text-xl prose-p:md:leading-normal prose-p:text-justify";

  return (
    <section className="pt-[148px] pb-[60px] md:pt-[168px] md:pb-20 xl:pb-[120px] xl:pt-[208px]">
      <div className="container xl:px-60">
        <Markdown
          className={`${styles} ${strong} ${title} ${subtitle} ${paragrapgh}`}
        >
          {data}
        </Markdown>
      </div>
    </section>
  );
};
