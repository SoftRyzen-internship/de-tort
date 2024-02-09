import { OrderForm } from "@/components/ui/OrderForm/OrderForm";
import { Hero } from "@/sections/home/Hero";
// import { Contacts } from "@/sections/home/Contacts";
// import { About } from "@/sections/home/About";
// import { Sweets } from "@/sections/home/Sweets";
// import { CakesAssortment } from "@/sections/home/CakesAssortment";
// import { QA } from "@/sections/home/QA";
// import { Achievements } from "@/sections/home/Achievements";
// import { Reviews } from "@/sections/home/Reviews";
// import { Toppings } from "@/sections/home/Toppings";

export default async function Home() {
  return (
    <>
      <Hero />
      <OrderForm />
      {/* <OrderForm /> */}
      {/* <CakesAssortment />
      <Sweets />
      <About />
      <Achievements />
      <Toppings />
      <QA />
      <Reviews />
      <Contacts /> */}
    </>
  );
}
