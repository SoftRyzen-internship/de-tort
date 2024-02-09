import { SectionTitle } from "@/components/ui/SectionTitle";
import { SweetsList } from "@/components/base/SweetsList";

import sweets from "@/data/sweets.json";

import { SweetsProps } from "./types";

export const Sweets: React.FC<SweetsProps> = ({ home = false }) => {
  const { titleHome, titleCakes } = sweets;

  const styles = home ? "" : "pb-[60px] md:pb-[80px] xl:pb-[120px]";

  return (
    <section className={`section bg-color-bg-primary ${styles}`}>
      <div className="container">
        <SectionTitle
          text={home ? titleHome : titleCakes}
          className={
            home
              ? "sr-only"
              : "smOnly:max-w-[196px] mb-6 md:text-center md:mb-10 xl:mb-16"
          }
        />

        <SweetsList />
      </div>
    </section>
  );
};
