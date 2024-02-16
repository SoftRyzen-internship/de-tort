import { CommonForm } from "@/components/ui/CommonForm";

import { FormCakesProps } from "./types";

export const FormCakes: React.FC<FormCakesProps> = ({ toppings = [] }) => {
  return (
    <section className="section bg-color-bg-primary" id="orderForm">
      <div className="container">
        <CommonForm toppings={toppings} />
      </div>
    </section>
  );
};
