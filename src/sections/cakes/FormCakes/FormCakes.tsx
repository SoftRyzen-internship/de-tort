import { CakesOrderForm } from "@/components/ui/CakesOrderForm";

import { FormCakesProps } from "./types";

export const FormCakes: React.FC<FormCakesProps> = ({ slug, toppings }) => {
  return (
    <section>
      <div className="container bg-white py-10 rounded-3xl border-2 border-topping-card">
        <h2 className="text-title mb-8 text-[20px] md:text-[28px] leading-normal text-center">
          Онлайн замовлення
        </h2>
        <CakesOrderForm slug={slug} toppings={toppings} />
      </div>
    </section>
  );
};
