import { Hero } from "@/sections/home/Hero";
import { Contacts } from "@/sections/home/Contacts";
import { About } from "@/sections/home/About";
import { Sweets } from "@/sections/home/Sweets";
import { CakesAssortment } from "@/sections/home/CakesAssortment";
import { QA } from "@/sections/home/QA";
import { Achievements } from "@/sections/home/Achievements";
import { Reviews } from "@/sections/home/Reviews";
import { Toppings } from "@/sections/home/Toppings";

import { fetchContacts } from "@/requests/fetchContacts";
import { fetchAchievements } from "@/requests/fetchAchievements";
import { fetchReviews } from "@/requests/fetchReviews";
import { fetchFAQ } from "@/requests/fetchFAQ";

export default async function Home() {
  const contacts = await fetchContacts();
  const achievements = await fetchAchievements();
  const reviews = await fetchReviews();
  const faq = await fetchFAQ();

  return (
    <>
      <Hero />
      <CakesAssortment />
      <Sweets home />
      <About />
      <Achievements achievements={achievements} />
      <Toppings />
      <QA faq={faq} />
      <Reviews reviews={reviews} />
      <Contacts contacts={contacts} />
    </>
  );
}
