'use client';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constants/navlinks';
import MobileMenu from './mobile/MobileMenu';
import { Button } from './ui/button';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-light-100">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link href="/" aria-label="Nike Home" className="flex items-center">
          <Image src="/logo.svg" alt="Nike" width={28} height={28} priority className="invert" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-body font-medium text-dark-900 transition-colors hover:text-dark-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="items-center gap-6 md:flex">
          <Button variant="ghost" className="text-body font-medium text-dark-900">
            Buscar
          </Button>
          <Button variant="ghost" className="text-body font-medium text-dark-900">
            Mi Carrito (2)
          </Button>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}

export default Navbar