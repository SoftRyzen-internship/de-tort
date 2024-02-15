import { CakesOrderForm } from "@/components/ui/CakesOrderForm";

import { FormCakesProps } from "./types";

import { cakesFormData } from "@/components/ui/CakesOrderForm/cakesFormData";

export const FormCakes: React.FC<FormCakesProps> = ({
  slug,
  toppings = [],
}) => {
  return (
    <section className="section bg-color-bg-primary">
      <div className="container">
        <div className="relative bg-white py-10 px-[14px] md:px-[114px] xl:px-[122px] md:py-[60px] rounded-3xl border-2 border-topping-card-even">
          <h2 className="text-title mb-8 text-[20px] md:text-[28px] leading-normal text-center">
            {cakesFormData.title}
          </h2>
          <CakesOrderForm slug={slug} toppings={toppings} />
        </div>
      </div>
    </section>
  );
};
