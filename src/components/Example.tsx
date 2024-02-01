import React from "react";
import { ReviewCard } from "./ui/ReviewCard";

export const Example: React.FC = () => {
  const text = `Доброго ранку,
  я забула вам написати.

  Тортик був дуже смачний, нам сподобався 🥰 тепер будемо щомісяця у вас замовляти та пробувати нові смаки 😊

  Гарного дня 😉`;
  const author = "Аліна";
  const date = "18 cічня 2024";

  return (
    <div className="container bg-red-100 p-10">
      <h2>Example ReviewCard component</h2>
      <ReviewCard author={author} text={text} date={date} />
    </div>
  );
};

export default Example;
