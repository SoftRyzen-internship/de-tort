import { OrderForm } from "@/components/ui/OrderForm/OrderForm";
import { SectionTitle } from "@/components/ui/SectionTitle";
import React from "react";

export const FormCakes: React.FC = () => {
  return (
    <section>
      <div className="container bg-white py-10 rounded-3xl border-2 border-topping-card">
        <SectionTitle
          text="Онлайн замовлення"
          className="max-w-[694px] mb-8 !text-[20px] !leading-normal"
        />
        <OrderForm />
      </div>
    </section>
  );
};

export default FormCakes;
