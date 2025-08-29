import { columns, socialLinks } from "@/constants/footer";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

function Footer() {
  return (
    <footer className="bg-dark-900 text-light-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex items-start col-span-1">
            <Image src="/logo.svg" alt="Nike" width={48} height={48} />
          </div>

          <div className="hidden md:grid lg:col-span-8 grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-heading-3 font-bold">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-body text-light-400 hover:text-light-200"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Accordion className="md:hidden" type="single" collapsible>
            {
              columns.map((col, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-bold">{col.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3">
                      {col.links.map((l) => (
                        <li key={l}>
                          <Link
                            href="#"
                            className="text-body text-light-400 hover:text-light-200"
                          >
                            {l}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>

          <div className="flex gap-4 col-span-1 lg:col-span-2 justify-center lg:justify-end">
            {socialLinks.map((s) => (
              <Link
                key={s.alt}
                href="#"
                aria-label={s.alt}
                className="social-links"
              >
                <Image src={s.src} alt={s.alt} width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-light-400 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-caption">
            <Image src="/globe.svg" alt="" width={16} height={16} />
            <span>Argentina</span>
            <span>© 2025 PapuloDev. All Rights Reserved</span>
          </div>
          <ul className="flex items-center gap-6 text-caption">
            {["Guides", "Terms of Sale", "Terms of Use", "Nike Privacy Policy"].map((t) => (
              <li key={t}>
                <Link href="#">{t}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer