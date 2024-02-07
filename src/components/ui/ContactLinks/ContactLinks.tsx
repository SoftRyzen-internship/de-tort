import { cn } from "@/utils/helpers";

import IconPhone from "~/icons/phone.svg";
import InstagramIcon from "~/icons/instagram.svg";

import data from "@/data/common.json";

import { TContacts } from "@/components/ui/ContactLinks/types";

export const ContactLinks: React.FC<TContacts> = ({
  className = "",
  variant = "header",
}) => {
  const styles = {
    header: "gap-10 flex items-center justify-end smOnly:hidden",
    footer: "gap-4 flex-col items-end",
  };

  const { contacts } = data;

  return variant === "phone" ? (
    <a
      className={`flex gap-2 text-color-text-primary transition-colors focus:text-color-accent-primary hover:text-color-accent-primary text-[16px] md:text-[20px] leading-[1.4] font-fixel items-center flex-shrink-0 ${className}`}
      href={`tel:${contacts.phone}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <IconPhone className="w-5 h-5 md:h-6 md:w-6 text-color-accent-primary " />
      <p className="text-center bg-color-bg-primary">{contacts.phone}</p>
    </a>
  ) : (
    <ul
      className={cn("inline-flex flex-shrink-0 ", styles[variant], className)}
    >
      <li>
        <a
          className="flex gap-2 text-color-text-secondary transition-colors focus:text-color-accent-primary hover:text-color-accent-primary text-[20px] leading-6 font-semibold font-fixel items-center flex-shrink-0"
          href={`tel:${contacts.phone}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <IconPhone className="h-6 w-6 text-color-accent-primary " />

          {contacts.phone}
        </a>
      </li>

      <li className="flex">
        <a
          className="flex gap-2 transition-colors focus:text-color-accent-primary hover:text-color-accent-primary text-color-text-secondary text-[20px] leading-6 font-semibold font-fixel items-center flex-shrink-0"
          href={contacts.instagramLink}
          target="_blank"
          title={contacts.instagramLink}
          aria-label={contacts.instagramLinkLabel}
          rel="noopener noreferrer nofollow"
        >
          <InstagramIcon className="h-6 w-6 text-color-accent-primary " />

          {contacts.instagramUser}
        </a>
      </li>
    </ul>
  );
};
