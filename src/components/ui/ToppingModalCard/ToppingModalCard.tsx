export const ToppingModalCard: React.FC = () => {
  return (
    <li className="shrink-0 w-[310px] h-[404px] px-3 py-[15px] font-unbounded border-px rounded-3xl group hover:border-color-accent-primary focus-visible:border-color-accent-primary uppercase">
      <p className="text-color-text-primary group-hover:text-color-accent-primary focus:text-color-accent-primary">
        Мак-полуниця- чізкейк
      </p>
      <p className="font-fixel text-color-text-secondary capitalize">
        Шоколад-ягоди (на вибір: вишня, малина, чорниця чи полуниця) -
        шоколадний бісквіт, шоколадний крем-чіз, ганаш на молочному шоколаді та
        ягідне конфі
      </p>
      <p className="text-color-text-primary group-hover:text-color-accent-primary focus:text-color-accent-primary">
        <span>1000</span>/<span>100</span>
      </p>
    </li>
  );
};
