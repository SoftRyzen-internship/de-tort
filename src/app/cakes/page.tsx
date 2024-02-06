import { Contacts } from "@/sections/Contacts";

export default async function Page() {
  return (
    <>
      <section className="pt-[500px] bg-color-bg-primary">
        <div className="container">
          <h1>Tesk Cakes</h1>
        </div>
      </section>
      <Contacts variant="cakes" />
    </>
  );
}
