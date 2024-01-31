import { AboutCardProps } from "./types";

export const AboutCard: React.FC<AboutCardProps> = ({ icon, text, color }) => {
  const divStyle = {
    backgroundColor: color,
  };

  return (
    <div
      style={divStyle}
      className="font-unbounded flex-start rounded-3xl px-4 xl:px-10 md:pl-6 md:pr-[18px] py-5 xl:py-8 gap-3 md:gap-4 md:w-[334px] xl:w-[488px]"
    >
      <div className="size-8 stroke-color-accent-primary shrink-0"> {icon}</div>
      <span className="text-color-text-primary font-semibold text-base xl:text-[20px] leading-normal">
        {text}
      </span>
    </div>
  );
};
