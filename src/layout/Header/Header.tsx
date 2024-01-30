import { MenuButton } from "@/components/ui/MenuButton";

export const Header: React.FC = () => {
  return (
    <header className="bg-color-bg-hero">
      <div className="container py-8 border-b-[1px] flex">
        <MenuButton className="ml-auto" />
      </div>
    </header>
  );
};
