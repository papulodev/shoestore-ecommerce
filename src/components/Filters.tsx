'use client';

import { getArrayParam, removeParams } from "@/lib/utils/query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Button } from "./ui/button";
import GroupCheckbox from "./GroupCheckbox";
import FiltersMobile from "./mobile/FiltersMobile";
import { COLORS, GENDERS, PRICES, SIZES } from "./schema/filter";

function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = useMemo(() => `?${searchParams.toString()}`, [searchParams]);

  const activeCounts = {
    gender: getArrayParam(search, "gender").length,
    size: getArrayParam(search, "size").length,
    color: getArrayParam(search, "color").length,
    price: getArrayParam(search, "price").length,
  };

  const clearAll = () => {
    const url = removeParams(pathname, search, ["gender", "size", "color", "price", "page"]);
    router.push(url, { scroll: false });
  };

  return (
    <>
      <aside className="sticky top-20 hidden h-fit min-w-60 rounded-lg border border-light-300 bg-light-100 p-4 md:block">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-body-medium text-dark-900">Filtros</h3>
          <Button variant="link" className="text-caption text-dark-700 cursor-pointer" onClick={clearAll}>
            Limpiar filtros
          </Button>
        </div>

        <GroupCheckbox title={`Genero ${activeCounts.gender ? `(${activeCounts.gender})` : ""}`} k="gender" group={GENDERS} />

        <GroupCheckbox title={`Tamaño ${activeCounts.size ? `(${activeCounts.size})` : ""}`} k="size" group={SIZES} />

        <GroupCheckbox title={`Color ${activeCounts.color ? `(${activeCounts.color})` : ""}`} k="color" group={COLORS} />

        <GroupCheckbox title={`Precio ${activeCounts.price ? `(${activeCounts.price})` : ""}`} k="price" group={PRICES} />
      </aside>

      <FiltersMobile activeCounts={activeCounts} />
    </>
  )
}

export default Filters