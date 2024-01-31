import Image from "next/image";

import { ReviewCardProps } from "./types";

import data from "@/data/common.json";

const MAX_SYMBOLS = 456;

export const ReviewCard: React.FC<ReviewCardProps> = ({
  author,
  text,
  date,
}) => {
  const {
    reviews: { imageHeart },
  } = data;
  const normalizedText = text.slice(0, MAX_SYMBOLS);

  return (
    <div className="bg-white md:w-[336px] xl:w-[384px] shadow-3xl-a font-fixel rounded-3xl border border-color-accent-primary w-full text-base leading-normal">
      <h3 className="py-6 flex-center gap-2 border-b border-color-accent-primary text-[24px]">
        <span className="text-color-option-seven ">@</span>
        <span>{author}</span>
      </h3>
      <div className="py-6 px-4 xl:px-8 h-[404px]">
        <p className="text-center text-color-option-eight mb-2">{date}</p>
        <div className="text-white relative bg-gradient-to-r whitespace-pre-line from-color-option-nine py-6 px-4 xl:px-6 to-color-option-ten rounded-3xl ">
          <p>{normalizedText}</p>
          <div className="w-[38px] md:w-10 text-center h-8 border-white border-2 rounded-full absolute  bottom-0  bg-color-bg-grey right-6 translate-y-1/2 flex-center text-[16px]">
            <Image
              src={imageHeart.path}
              alt={imageHeart.alt}
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
