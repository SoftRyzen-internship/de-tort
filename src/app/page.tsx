import LinkButton from "@/components/ui/LinkButton";

export default async function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <LinkButton label="Single Label Button" href="/single-label" />
      <LinkButton
        label="Primary Label"
        secondaryLabel="Secondary Label"
        href="/dual-label"
      />
    </>
  );
}
