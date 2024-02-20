import Image from "next/image";

import { ReviewCardProps } from "./types";

import data from "@/data/reviews.json";
import { getBase64, convertImage } from "@/utils/helpers";

const MAX_SYMBOLS = 456;

export const ReviewCard: React.FC<ReviewCardProps> = ({
  author,
  text,
  date,
}) => {
  const { imageHeart } = data;
  const normalizedText = text.slice(0, MAX_SYMBOLS);

  return (
    <div className="bg-white shadow-3xl-a font-fixel rounded-3xl border border-color-accent-primary w-full text-base leading-normal">
      <h3 className="py-6 flex-center gap-2 border-b border-color-accent-primary text-[24px]">
        <span className="text-color-option-seven ">@</span>
        <span>{author}</span>
      </h3>
      <div className="py-6 px-4 xl:px-8 h-[404px]">
        <p className="text-center text-color-option-eight mb-2">{date}</p>
        <div className="text-white relative bg-gradient-to-r whitespace-pre-line from-color-option-nine py-6 px-4 xl:px-6 to-color-option-ten rounded-3xl ">
          <p>{normalizedText}</p>
          <div className="w-[38px] md:w-10 text-center h-8 border-white border-2 rounded-full absolute  bottom-0 bg-color-bg-grey right-6 translate-y-1/2 flex-center text-[16px]">
            <Image
              src={imageHeart.path}
              alt={imageHeart.alt}
              width={512}
              height={544}
              className="object-cover w-[16px] h-auto"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${getBase64(
                convertImage(16, 16),
              )}`}
              sizes="16px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
