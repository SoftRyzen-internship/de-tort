import { ContactLinks } from "@/components/ui/ContactLinks";
import { Logo } from "@/components/ui/Logo";
import { MenuButton } from "@/components/ui/MenuButton";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ contacts }) => {
  return (
    <header className="absolute top-0 left-0 py-3 w-full">
      <div className="container flex items-center gap-[60px]">
        <Logo className="mr-auto" />

        <ContactLinks variant="header" data={contacts} />

        <MenuButton />
      </div>
    </header>
  );
};
