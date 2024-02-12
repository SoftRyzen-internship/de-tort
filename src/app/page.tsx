import { Hero } from "@/sections/home/Hero";
import { Contacts } from "@/sections/home/Contacts";
import { About } from "@/sections/home/About";
import { Sweets } from "@/sections/home/Sweets";
import { CakesAssortment } from "@/sections/home/CakesAssortment";
import { QA } from "@/sections/home/QA";
import { Achievements } from "@/sections/home/Achievements";
import { Reviews } from "@/sections/home/Reviews";
import { Toppings } from "@/sections/home/Toppings";

import {
  fetchAchievements,
  fetchCakeToppings,
  fetchContacts,
  fetchFAQ,
  fetchReviews,
} from "@/requests";

export default async function Home() {
  const contacts = await fetchContacts();
  const achievements = await fetchAchievements();
  const reviews = await fetchReviews();
  const faq = await fetchFAQ();

  const toppings = await fetchCakeToppings("bento-cakes");

  return (
    <>
      <Hero />
      <CakesAssortment />
      <Sweets home />
      <About />
      <Achievements achievements={achievements} />
      <Toppings toppings={toppings} />
      <QA faq={faq} />
      <Reviews reviews={reviews} />
      <Contacts contacts={contacts} />
    </>
  );
}
