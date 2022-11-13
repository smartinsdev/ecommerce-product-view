import Link from "next/link";

const itens = ["collections", "men", "women", "about", "contact"];
type Props = {
  classesContainer: string;
  classesLink: string;
};

export function NavItens({ classesContainer, classesLink }: Props) {
  return (
    <ul className={classesContainer}>
      {itens.map((item) => (
        <li key={item}>
          <Link href={`/${item}`} className={classesLink}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
