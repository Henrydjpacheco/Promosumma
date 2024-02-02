"use client";
import {
  BanknotesIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Inicio",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Créditos",
    href: "/dashboard/credits",
    icon: BanknotesIcon,
  },
  {
    name: "Ayuda",
    href: "/dashboard/help",
    icon: QuestionMarkCircleIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px]  w-full grow items-center justify-evenly gap-2 rounded-md  p-3 text-sm font-medium hover:bg-[#00A9BB] hover:text-white md:flex-none md:justify-around md:p-2 md:px-3",
              {
                "bg-[#262945] text-white": pathname === link.href,
              }
            )}
          >
            <LinkIcon className=" w-5    text-white" />
            <p className=" ">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
