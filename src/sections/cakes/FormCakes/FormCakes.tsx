import { CakesOrderForm } from "@/components/ui/CakesOrderForm";

import { FormCakesProps } from "./types";

export const FormCakes: React.FC<FormCakesProps> = ({ toppings = [] }) => {
  return (
    <section className="section bg-color-bg-primary" id="orderForm">
      <div className="container">
        <CakesOrderForm toppings={toppings} />
      </div>
    </section>
  );
};
