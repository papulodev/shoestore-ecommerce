'use client';
import { useMemo } from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import GroupCheckbox from '../GroupCheckbox'
import { removeParams } from '@/lib/utils/query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ActiveCounts, COLORS, GENDERS, PRICES, SIZES } from '../schema/filter';

function FiltersMobile({ activeCounts }: { activeCounts: ActiveCounts }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = useMemo(() => `?${searchParams.toString()}`, [searchParams]);

  const clearAll = () => {
    const url = removeParams(pathname, search, ["gender", "size", "color", "price", "page"]);
    router.push(url, { scroll: false });
  };

  return (
    <Sheet>
      <SheetTrigger asChild className='md:hidden w-28'>
        <Button variant="outline" className='cursor-pointer'>Filtros</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className='mb-2 flex items-center justify-between'>
            Filtros
            <Button variant="link" className="text-caption text-dark-700 cursor-pointer" onClick={clearAll}>
              Limpiar filtros
            </Button>
          </SheetTitle>
          <SheetDescription>
            Filtre por sus preferencias
          </SheetDescription>
        </SheetHeader>
        <aside className="min-w-60 bg-light-100 p-4">
          <GroupCheckbox title={`Genero ${activeCounts.gender ? `(${activeCounts.gender})` : ""}`} k="gender" group={GENDERS} />

          <GroupCheckbox title={`Tamaño ${activeCounts.size ? `(${activeCounts.size})` : ""}`} k="size" group={SIZES} />

          <GroupCheckbox title={`Color ${activeCounts.color ? `(${activeCounts.color})` : ""}`} k="color" group={COLORS} />

          <GroupCheckbox title={`Precio ${activeCounts.price ? `(${activeCounts.price})` : ""}`} k="price" group={PRICES} />
        </aside>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cerrar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default FiltersMobile