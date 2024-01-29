import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-green-100 p-4">
      <h1 className="bg-color-bg-white mb-4 p-4">Home Page</h1>
      <div className="bg-red-100 w-[300px] mb-4 p-4">
        <LinkButton label="Каталог тортів" href="/single-label" />
      </div>
      <div className="bg-blue-100 w-[500px] mb-4 p-4">
        <LinkButton
          label="Primary Label"
          secondaryLabel="Secondary Label"
          href="/dual-label"
          styles="mx-auto"
        />
        <Image
          src="/public/images/tort-sliced-test.webp"
          // src="/public/images/tort-sliced.png"
          alt="sdg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
