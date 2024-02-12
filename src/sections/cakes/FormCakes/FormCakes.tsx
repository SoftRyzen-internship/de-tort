import { OrderForm } from "@/components/ui/OrderForm/OrderForm";
import React from "react";

export const FormCakes: React.FC = () => {
  return (
    <section>
      <div className="container bg-white py-10 rounded-3xl border-2 border-topping-card">
        <h2 className="text-title mb-8 text-[20px] md:text-[28px] leading-normal text-center">
          Онлайн замовлення
        </h2>
        <OrderForm />
      </div>
    </section>
  );
};

export default FormCakes;
