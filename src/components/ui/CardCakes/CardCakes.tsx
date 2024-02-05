import Image from "next/image";
import Link from "next/link";

export type CardCakesProps = {
  title: string;
  slug: string;
  bgSrc: string;
};

export const CardCakes: React.FC<CardCakesProps> = ({ title, slug, bgSrc }) => {
  return (
    <li>
      <Link href={slug} className="group block relative">
        <Image
          src={bgSrc}
          alt={title}
          width={592}
          height={480}
          className="object-cover"
        />
        <h3>{title}</h3>
      </Link>
    </li>
  );
};
