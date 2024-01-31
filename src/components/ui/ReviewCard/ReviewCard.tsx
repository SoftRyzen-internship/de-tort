import { ReviewCardProps } from "./types";

const text = `Доброго ранку,
я забула вам написати.

Тортик був дуже смачний, нам сподобався 🥰 тепер будемо щомісяця у вас замовляти та пробувати нові смаки 😊

Гарного дня 😉`;
const author = "Аліна";
const date = "18 cічня 2024";

export const ReviewCard: React.FC<ReviewCardProps> = () => {
  return (
    <div className=" font-fixel rounded-3xl border border-color-accent h-[500px] w-full text-base leading-normal">
      <h2 className="py-[23px] flex-center gap-2 border-b ">
        <span className="text-color-option-seven ">@</span>
        <span className="text-[24px]">{author}</span>
      </h2>
      <div className="py-6 px-8">
        <p className="text-center text-color-option-eight mb-2">{date}</p>
        <div className="bg-gradient">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
