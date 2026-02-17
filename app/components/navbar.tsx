import Image from "next/image";
import Link from "next/link";
import search from "@/public/search.svg";
import cart from "@/public/cart.svg";
import { navLinks } from "../constants";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Image
          src="/logo.svg"
          width={24}
          height={24}
          alt="Apple Logo"
          color="#000000"
        />

        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.label}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <Image src={search} alt="Search" />
          </button>
          <button>
            <Image src={cart} alt="Search" />
          </button>
        </div>
      </nav>
    </header>
  );
}
