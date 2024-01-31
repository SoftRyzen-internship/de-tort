import { ReviewCardProps } from "./types";

export const ReviewCard: React.FC<ReviewCardProps> = ({
  author,
  text,
  date,
}) => {
  return (
    <div className="bg-white md:w-[336px] shadow-3xl-a font-fixel rounded-3xl border border-color-option-accent w-full text-base leading-normal">
      <h2 className="py-6 flex-center gap-2 border-b border-color-option-accent text-[24px]">
        <span className="text-color-option-seven ">@</span>
        <span>{author}</span>
      </h2>
      <div className="py-6 px-4 h-[404px]">
        <p className="text-center text-color-option-eight mb-2">{date}</p>
        <div className="text-white relative bg-gradient-to-r whitespace-pre-line from-color-option-nine py-6 px-4 to-color-option-ten rounded-3xl ">
          <p>{text}</p>
          <div className="w-[38px] text-center h-8 border-white border-2 rounded-full absolute  bottom-0  bg-color-bg-grey right-6 translate-y-1/2 flex-center text-[16px]">
            <div className="size-4 flex-center translate-y-[3px]">❤️</div>
          </div>
        </div>
      </div>
    </div>
  );
};
