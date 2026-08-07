import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/logo-main.png";
import menuList, { type MenuItem } from "@/app/data/menuList";

const desktopMenuLabels = ["Home", "Services", "Projects", "About Us", "Why Solar"];
const desktopMenu = desktopMenuLabels
  .map((label) => menuList.find((item) => item.label === label))
  .filter((item): item is MenuItem => item !== undefined);

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#287cd7] via-[#4b9ded] to-[#2d82dc] text-white shadow-sm">
      <div className="container flex h-14 items-center justify-between gap-5">
        <Link href="/" aria-label="GPS Solar Solutions home" className="flex shrink-0 items-center gap-1.5">
          <Image src={logo} alt="GPS Solar Solutions" className="h-7 w-7 object-contain" priority />
          <span className="text-xs font-semibold tracking-tight sm:text-sm">GPS Solar Energy</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1 text-xs font-medium">
            {desktopMenu.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="block rounded-full bg-white/10 px-4 py-1.5 transition hover:bg-white/20 group-first:bg-white group-first:text-[#357fd2]"
                >
                  {item.label}
                </Link>

                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-10 mt-2 min-w-52 rounded-xl bg-white p-2 text-slate-700 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-blue-50 hover:text-[#357fd2]">
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

        <div className="flex items-center gap-2 text-xs font-medium">
          <Link href="/login" className="hidden rounded-full border border-white/40 px-4 py-1.5 transition hover:bg-white/10 sm:block">
            Log in
          </Link>
          <Link href="/get-free-quote" className="rounded-full bg-white px-4 py-1.5 text-[#357fd2] shadow-sm transition hover:bg-blue-50">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
