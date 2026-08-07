import Image from "next/image";
import Link from "next/link";

import menuList, { type MenuItem } from "@/app/data/menuList";
import PrimaryButton from "../ui/PrimaryButton";

const desktopMenuLabels = [
  "Home",
  "Services",
  "Projects",
  "About Us",
  "Why Solar",
];
const desktopMenu = desktopMenuLabels
  .map((label) => menuList.find((item) => item.label === label))
  .filter((item): item is MenuItem => item !== undefined);

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <div className="container flex items-center justify-between gap-5 py-[15px]">
        <Link
          href="/"
          aria-label="GPS Solar Solutions home"
          className="shrink-0"
        >
          <Image
            src="/logo-white.png"
            alt="GPS Solar Solutions"
            width={120}
            height={120}
            className="h-auto w-[80px] object-contain"
            priority
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 justify-center lg:flex"
        >
          <ul className="flex items-center gap-1 text-[16px] font-medium">
            {desktopMenu.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="block rounded-full bg-white/10 px-4 py-1.5 transition hover:bg-white/20 group-first:bg-[var(--color-gold)] group-first:text-[var(--color-charcoal)]"
                >
                  {item.label}
                </Link>

                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-10 mt-2 min-w-52 rounded-xl bg-white p-2 text-slate-700 opacity-0  transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-[17px] hover:bg-[rgba(var(--color-gold-rgb),0.12)] hover:text-[var(--color-charcoal)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-[16px] font-medium">
          <PrimaryButton href="/contact">Contact Us</PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
