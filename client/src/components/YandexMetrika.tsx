//@ts-nocheck
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    ym(111111111, "hit", url);
  }, [pathname, searchParams]);

  return null;
}
