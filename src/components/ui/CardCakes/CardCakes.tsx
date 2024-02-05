export type CardCakesProps = {
  title: string;
};

export const CardCakes: React.FC<CardCakesProps> = ({ title }) => {
  return (
    <li>
      <h3>{title}</h3>
    </li>
  );
};
