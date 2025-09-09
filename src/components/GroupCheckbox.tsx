'use client';
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Checkbox } from "./ui/checkbox";
import { useMemo, useState } from "react";
import { getArrayParam, toggleArrayParam } from "@/lib/utils/query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "./ui/label";

type PriceOption = { id: string; label: string };

type GroupKey = "gender" | "size" | "color" | "price";

function GroupCheckbox({
  title,
  k,
  group
}: {
  title: string;
  k: GroupKey;
  group: ReadonlyArray<string | PriceOption>;
}) {
  const [expanded, setExpanded] = useState<Record<GroupKey, boolean>>({
    gender: true,
    size: true,
    color: true,
    price: true,
  });

  const isPriceGroup = k === "price" && group.length > 0 && typeof (group as PriceOption[])[0] === "object";

  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const search = useMemo(() => `?${searchParams.toString()}`, [searchParams]);

  const onToggle = (key: GroupKey, value: string) => {
    const url = toggleArrayParam(pathname, search, key, value);
    router.push(url, { scroll: false });
  };

  return (
    <Collapsible
      open={expanded[k]}
      onOpenChange={() => setExpanded((s) => ({ ...s, [k]: !s[k] }))}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-body-medium text-dark-900">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8 cursor-pointer">
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <ul className="space-y-2 grid grid-cols-2 gap-2">
          {
            isPriceGroup ? (group as PriceOption[]).map((p) => {
              const checked = getArrayParam(search, k).includes(p.id);
              return (
                <li key={p.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`${k}-${p.id}`}
                    checked={checked}
                    className="cursor-pointer"
                    onCheckedChange={() => onToggle(k as GroupKey, p.id)}
                  />
                  <Label className="text-body font-normal text-dark-900 capitalize" htmlFor={`${k}-${p.id}`}>{p.label}</Label>
                </li>
              );
            }) : (group as string[]).map((g) => {
              const checked = getArrayParam(search, k).includes(g);
              return (
                <li key={g} className="flex items-center gap-2">
                  <Checkbox
                    id={`${k}-${g}`}
                    checked={checked}
                    className="cursor-pointer"
                    onCheckedChange={() => onToggle(k as GroupKey, g)}
                  />
                  <Label className="text-body font-normal text-dark-900 capitalize" htmlFor={`${k}-${g}`}>{g}</Label>
                </li>
              );
            })
          }
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default GroupCheckbox