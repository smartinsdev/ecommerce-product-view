import Link from "next/link";

const itens = ["collections", "men", "women", "about", "contact"];

export function NavItens() {
  return (
    <ul className="hidden md:flex items-center space-x-2">
      {itens.map((item) => (
        <li key={item}>
          <Link
            href={`/${item}`}
            className="py-7 px-1 block text-neutral-300 transition-colors duration-300 hover:text-neutral-400 relative nav-link"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
