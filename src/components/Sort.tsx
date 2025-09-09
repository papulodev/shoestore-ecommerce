'use client';

import { setParam } from "@/lib/utils/query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

const OPTIONS = [
  { label: "Presentado", value: "featured" },
  { label: "Más reciente", value: "newest" },
  { label: "Precio (desc.)", value: "price_desc" },
  { label: "Precio (asc.)", value: "price_asc" },
] as const;

function Sort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = useMemo(() => `?${searchParams.toString()}`, [searchParams]);
  const selected = searchParams.get("sort") ?? "featured";

  const onChange = (value: string) => {
    const withSort = setParam(pathname, search, "sort", value);
    const withPageReset = setParam(pathname, new URL(withSort, "http://dummy").search, "page", "1");
    router.push(withPageReset, { scroll: false });
  };

  return (
    <Select defaultValue={selected} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Orden</SelectLabel>
          {OPTIONS.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Sort