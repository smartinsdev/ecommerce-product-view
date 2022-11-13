import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";

export function Logo() {
  return (
    <Link href="/" className="block w-28 h-5">
      <Image src={logo} alt="Sneakers Logo Maker " />
    </Link>
  );
}
