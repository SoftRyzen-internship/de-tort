import React from "react";
import { ReviewCard } from "./ui/ReviewCard";
import { Logo } from "./ui/Logo";

export const Example: React.FC = () => {
  const text = `Доброго ранку,
  я забула вам написати.

  Тортик був дуже смачний, нам сподобався 🥰 тепер будемо щомісяця у вас замовляти та пробувати нові смаки 😊

  Гарного дня 😉`;
  const author = "Аліна";
  const date = "18 cічня 2024";

  return (
    <div className="container bg-red-100 p-10">
      <Logo />
    </div>
  );
};

export default Example;
