import { ContactLinks } from "@/components/ui/ContactLinks";
import { Logo } from "@/components/ui/Logo";
import { MenuButton } from "@/components/ui/MenuButton";

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 py-3">
      <div className="container flex items-center gap-[60px]">
        <Logo className="mr-auto" />

        <ContactLinks variant="header" />

        <MenuButton />
      </div>
    </header>
  );
};
