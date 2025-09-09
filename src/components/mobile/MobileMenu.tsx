'use client';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { navLinks } from "@/constants/navlinks";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

function MobileMenu() {
  return (
    <Menubar className="md:hidden cursor-pointer">
      <MenubarMenu>
        <MenubarTrigger>
          <Menu />
        </MenubarTrigger>
        <MenubarContent>
          {navLinks.map((l) => (
            <div key={l.href}>
              <MenubarItem asChild>
                <Link
                  href={l.href}
                  className="text-body font-medium p-4 text-dark-900 hover:text-dark-700"
                  aria-label={l.label}
                >
                  {l.label}
                </Link>
              </MenubarItem>
              <MenubarSeparator />
            </div>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default MobileMenu